import {
  endOfMonthStr,
  isoDateFormat,
  isoDateTimeFormatT,
  parseDateTime,
  startOfMonthStr,
} from "../lib/dates";
import { randomTitles, randomUsageCount } from "../lib/random";
import { he } from "date-fns/locale";

class BaseReportGeneratorR50 {
  reportId = "FOO";

  reportName = "Foo Report";

  metrics = [];

  reportAttributes = [];

  recordBase = {};

  titleAttr = "X";

  constructor(context) {
    this.context = context;
  }

  reportHeader(monthStart, monthEnd) {
    let now = new Date();
    let out = {
      Created: isoDateTimeFormatT(now),
      Created_By: "Sashimi fake SUSHI generator",
      Customer_ID: this.context.customerId,
      Report_ID: this.reportId,
      Release: "5",
      Report_Name: this.reportName,
      Institution_Name: `Test Organization ${this.context.customerId}`,
      Report_Filters: [
        {
          Name: "Begin_Date",
          Value: isoDateFormat(monthStart),
        },
        {
          Name: "End_Date",
          Value: isoDateFormat(monthEnd),
        },
      ],
    };
    if (this.reportAttributes && this.reportAttributes.length > 0) {
      out["Report_Attributes"] = this.reportAttributes;
    }
    return out;
  }

  createPerformance(monthDate, seedArray = [], weight = 1) {
    let counts = {};
    this.metrics.forEach((metric) => {
      let count = Math.round(
        weight *
          metric.weight *
          randomUsageCount(
            [isoDateFormat(monthDate), metric.name, ...seedArray],
            this.context
          )
      );
      if (metric.caps) {
        let minCap = Math.min(...metric.caps.map((cap) => counts[cap]));
        // if minCap is non-zero, we should not exceed it, but also not report 0
        count = Math.min(count, minCap);
        if (count === 0 && minCap > 0) {
          count = minCap;
        }
      }
      if (count > 0) {
        counts[metric.name] = count;
      }
    });
    let instance = Object.entries(counts).map(([key, value]) => ({
      Metric_Type: key,
      Count: value,
    }));

    if (instance.length === 0) return [];

    return [
      {
        Period: {
          Begin_Date: startOfMonthStr(monthDate),
          End_Date: endOfMonthStr(monthDate),
        },
        Instance: instance,
      },
    ];
  }

  createOneRecord(title, month, params, weight = 1) {
    /*
     * seedObj is used to provide a seed to the random number generator and thus return the same
     * random data for the same input every time
     * It contains several seed arrays for different purposes
     * */
    let record = {
      ...this.recordBase,
      [this.titleAttr]: title.title,
      Platform: this.context.platform,
      ...params,
    };
    if (record.Item_ID) {
      // create new array to avoid modifying the original
      record.Item_ID = [];
      if ("eissn" in title) {
        record["Item_ID"].push({ Type: "Online_ISSN", Value: title.eissn });
      }
      if ("issn" in title) {
        record["Item_ID"].push({ Type: "Print_ISSN", Value: title.issn });
      }
    }
    record["Performance"] = this.createPerformance(
      month,
      [title.title, ...Object.values(params)],
      weight
    );
    if (record["Performance"].length === 0) return null;
    return record;
  }

  *generateParams() {
    // should return array of [params, weight] pairs
  }

  createTitleList(monthStart) {
    return randomTitles(this.context, monthStart);
  }

  createTitleData(monthStart, monthEnd) {
    let records = [];
    const titleSubset = this.createTitleList(monthStart);
    let titleIdx = 0;
    let totalTitles = titleSubset.length;
    for (let title of titleSubset) {
      for (let [params, weight] of this.generateParams()) {
        let rec = this.createOneRecord(
          title,
          monthStart,
          params,
          ((totalTitles - titleIdx) / totalTitles) * weight
        );
        if (rec) {
          // rec may be null if no performance data was generated
          records.push(rec);
        }
      }
      titleIdx++;
    }
    return records;
  }

  createReportData(monthStart, monthEnd) {
    if (this.context.config && this.context.config.code) {
      // specific return code was requested
      let header = this.reportHeader(monthStart, monthEnd);
      return {
        Report_Header: {
          ...header,
          Exceptions: [
            {
              Code: this.context.config.code,
              Message: "Client has made too many requests", // "An exception has occurred",
            },
          ],
        },
      };
    }
    return {
      Report_Header: this.reportHeader(monthStart, monthEnd),
      Report_Items: this.createTitleData(monthStart, monthEnd),
    };
  }
}

export { BaseReportGeneratorR50 };
