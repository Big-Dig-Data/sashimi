import {
  endOfMonthStr,
  isoDateFormat,
  isoDateTimeFormatT,
  monthsBetweenDates,
  parseDateTime,
  startOfMonthStr,
} from "../lib/dates";
import { randomTitles, randomUsageCount } from "../lib/random";

class BaseReportGeneratorR51 {
  reportId = "FOO";

  reportName = "Foo Report";

  metrics = [];

  reportAttributes = {};

  recordBase = {};

  titleAttr = "X";

  constructor(context) {
    this.context = context;
  }

  reportHeader(monthStart, monthEnd) {
    let now = new Date();
    return {
      Created: isoDateTimeFormatT(now),
      Created_By: "Sashimi fake SUSHI generator",
      Report_ID: this.reportId,
      Release: "5.1",
      Report_Name: this.reportName,
      Institution_ID: { Proprietary: [`sashimi:${this.context.customerId}`] },
      Institution_Name: `Test Organization ${this.context.customerId}`,
      Report_Filters: {
        Begin_Date: isoDateFormat(monthStart),
        End_Date: isoDateFormat(monthEnd),
      },
      Report_Attributes: this.reportAttributes,
      Registry_Record: "",
    };
  }

  createPerformance(monthStart, monthEnd, params, seedArray = [], weight = 1) {
    let performance = {};
    this.metrics.forEach((metric) => {
      performance[metric.name] = {};
      monthsBetweenDates(monthStart, monthEnd).forEach((monthStr) => {
        let usage = Math.round(
          weight *
            metric.weight *
            randomUsageCount(
              [monthStr, metric.name, ...seedArray],
              this.context
            )
        );
        performance[metric.name][monthStr] = usage + 1; // add 1 to avoid 0 values
      });
    });
    return {
      ...params,
      Performance: performance,
    };
  }

  createOneRecord(title, monthStart, monthEnd, titleWeight = 1) {
    /*
     * seedObj is used to provide a seed to the random number generator and thus return the same
     * random data for the same input every time
     * It contains several seed arrays for different purposes
     * */
    let record = {
      ...this.recordBase,
      [this.titleAttr]: title.title,
      Platform: this.context.platform,
    };
    if (record.Item_ID) {
      // create new array to avoid modifying the original
      record.Item_ID = {};
      if (title.eissn) {
        record.Item_ID["Online_ISSN"] = title.eissn;
      }
      if (title.issn) {
        record.Item_ID["Print_ISSN"] = title.issn;
      }
      if (title.proprietary) {
        record.Item_ID["Proprietary"] = title.proprietary;
      }
    }
    record["Attribute_Performance"] = [];
    for (let [params, weight] of this.generateParams()) {
      record["Attribute_Performance"].push(
        this.createPerformance(
          monthStart,
          monthEnd,
          params,
          [title.title, ...Object.values(params)],
          weight * titleWeight
        )
      );
    }
    return record;
  }

  *generateParams() {
    // should return array of [params, weight] pairs
  }

  createTitleData(monthStart, monthEnd) {
    let records = [];
    const titleSubset = randomTitles(this.context, monthStart);
    let titleIdx = 0;
    let totalTitles = titleSubset.length;
    for (let title of titleSubset) {
      records.push(
        this.createOneRecord(
          title,
          monthStart,
          monthEnd,
          (totalTitles - titleIdx) / totalTitles
        )
      );
      titleIdx++;
    }
    return records;
  }

  createReportData(monthStart, monthEnd) {
    if (this.context.config && this.context.config.exception) {
      // specific return code was requested
      let header = this.reportHeader(monthStart, monthEnd);
      return {
        Report_Header: {
          ...header,
          Exceptions: [
            {
              // code must be integer
              Code: parseInt(this.context.config.exception),
              Message: "Client has made too many requests", //"An exception has occurred",
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

export { BaseReportGeneratorR51 };
