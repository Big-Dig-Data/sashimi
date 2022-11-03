import {
  endOfMonthStr,
  isoDateTimeFormatT,
  parseDateTime,
  startOfMonthStr,
} from "./dates";
import { randomTitles, randomUsageCount } from "./random";

class BaseReportGenerator {
  reportId = "FOO";

  reportName = "Foo Report";

  metrics = [];

  reportAttributes = [];

  recordBase = {};

  constructor(context) {
    this.context = context;
  }

  reportHeader(monthStart, monthEnd) {
    let now = new Date();
    return {
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
          Value: monthStart,
        },
        {
          Name: "End_Date",
          Value: monthEnd,
        },
      ],
      Report_Attributes: this.reportAttributes,
    };
  }

  createPerformance(month, seedArray = [], weight = 1) {
    let monthDate;
    if ((month.match(/-/g) || []).length === 1) {
      monthDate = parseDateTime(month + "-15");
    } else {
      monthDate = parseDateTime(month);
    }
    let instance = this.metrics
      .map((metric) => {
        return {
          Metric_Type: metric.name,
          Count: Math.round(
            weight *
              metric.weight *
              randomUsageCount([month, metric.name, ...seedArray], this.context)
          ),
        };
      })
      .filter((item) => item.Count > 0);

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
      Title: title.title,
      Platform: this.context.platform,
      ...params,
    };
    if ("eissn" in title && record.Item_ID) {
      record["Item_ID"].push({ Type: "Online_ISSN", Value: title.eissn });
    }
    if ("issn" in title && record.Item_ID) {
      record["Item_ID"].push({ Type: "Print_ISSN", Value: title.issn });
    }
    record["Performance"] = this.createPerformance(
      month,
      [title.title, ...Object.values(params)],
      weight
    );
    return record;
  }

  *generateParams() {
    // should return array of [params, weight] pairs
  }

  createTitleData(monthStart, monthEnd) {
    let records = [];
    const titleSubset = randomTitles(this.context);
    let titleIdx = 0;
    let totalTitles = titleSubset.length;
    for (let title of titleSubset) {
      for (let [params, weight] of this.generateParams()) {
        records.push(
          this.createOneRecord(
            title,
            monthStart,
            params,
            ((totalTitles - titleIdx) / totalTitles) * weight
          )
        );
      }
      titleIdx++;
    }
    return records;
  }

  createReportData(monthStart, monthEnd) {
    return {
      Report_Header: this.reportHeader(monthStart, monthEnd),
      Report_Items: this.createTitleData(monthStart, monthEnd),
    };
  }
}

export { BaseReportGenerator };
