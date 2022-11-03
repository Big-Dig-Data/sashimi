import {
  endOfMonthStr,
  isoDateTimeFormatT,
  parseDateTime,
  startOfMonthStr,
} from "./dates";
import { randomTitles, randomUsageCount } from "./random";
import { possibleValues } from "./dimensions";

class ReportGenerator {
  reportId = "TR";

  reportName = "Title Master Report";

  metrics = [
    { name: "Total_Item_Investigations", weight: 1.6 },
    { name: "Unique_Item_Investigations", weight: 1.4 },
    { name: "Total_Item_Requests", weight: 1 },
    { name: "Unique_Item_Requests", weight: 0.8 },
    { name: "No_License", weight: 0.1 },
  ];

  reportAttributes = [
    {
      Name: "Attributes_To_Show",
      Value: "YOP|Access_Method|Access_Type|Data_Type|Section_Type",
    },
  ];

  recordBase = {
    Title: "",
    Publisher: "Sashimi publishing house",
    Section_Type: "Article",
    Platform: "",
    Data_Type: "Journal",
    Item_ID: [],
  };

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

  createTitleData(monthStart, monthEnd) {
    let records = [];
    const titleSubset = randomTitles(this.context);
    let titleIdx = 0;
    let totalTitles = titleSubset.length;
    for (let title of titleSubset) {
      for (let accessType of possibleValues.Access_Type) {
        for (let accessMethod of possibleValues.Access_Method) {
          let record = this.createOneRecord(
            title,
            monthStart,
            {
              Access_Type: accessType.name,
              Access_Method: accessMethod.name,
            },
            ((totalTitles - titleIdx) / totalTitles) *
              accessType.weight *
              accessMethod.weight
          );
          records.push(record);
        }
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

export { ReportGenerator };
