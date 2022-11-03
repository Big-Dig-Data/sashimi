import {
  endOfMonthStr,
  isoDateTimeFormatT,
  parseDateTime,
  startOfMonthStr,
} from "./dates";
import { randomTitles, randomUsageCount } from "./random";
import { possibleValues } from "./dimensions";

function reportHeader(monthStart, monthEnd, context) {
  let now = new Date();
  return {
    Created: isoDateTimeFormatT(now),
    Created_By: "Sashimi fake SUSHI generator",
    Customer_ID: context.customerId,
    Report_ID: "TR",
    Release: "5",
    Report_Name: "Title Master Report",
    Institution_Name: `Test Organization ${context.customerId}`,
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
    Report_Attributes: [
      {
        Name: "Attributes_To_Show",
        Value: "YOP|Access_Method|Access_Type|Data_Type|Section_Type",
      },
    ],
  };
}

function createPerformance(month, context, seedArray = []) {
  let metrics = [
    "Total_Item_Investigations",
    "Total_Item_Requests",
    "Unique_Item_Investigations",
    "Unique_Item_Requests",
    "No_License",
  ];
  let monthDate;
  if ((month.match(/-/g) || []).length === 1) {
    monthDate = parseDateTime(month + "-15");
  } else {
    monthDate = parseDateTime(month);
  }
  let instance = metrics.map((metric, idx) => {
    return {
      Metric_Type: metric,
      Count: randomUsageCount([month, metric, ...seedArray], context),
    };
  });

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

function createOneRecord(title, month, params, context) {
  /*
   * seedObj is used to provide a seed to the random number generator and thus return the same
   * random data for the same input every time
   * It contains several seed arrays for different purposes
   * */
  let record = {
    Title: title.title,
    Publisher: "Sashimi publishing house",
    Section_Type: "Article",
    Platform: context.platform,
    Data_Type: "Journal",
    ...params,
    Item_ID: [],
  };
  if ("eissn" in title) {
    record["Item_ID"].push({ Type: "Online_ISSN", Value: title.eissn });
  }
  if ("issn" in title) {
    record["Item_ID"].push({ Type: "Print_ISSN", Value: title.issn });
  }
  record["Performance"] = createPerformance(month, context, [
    title.title,
    ...Object.values(params),
  ]);
  return record;
}

function createTitleData(monthStart, monthEnd, context) {
  let records = [];
  const titleSubset = randomTitles(context);
  for (let title of titleSubset) {
    for (let accessType of possibleValues.Access_Type) {
      for (let accessMethod of possibleValues.Access_Method) {
        let record = createOneRecord(
          title,
          monthStart,
          { Access_Type: accessType, Access_Method: accessMethod },
          context
        );
        records.push(record);
      }
    }
  }
  return records;
}

function createReportData(monthStart, monthEnd, context) {
  return {
    Report_Header: reportHeader(monthStart, monthEnd, context),
    Report_Items: createTitleData(monthStart, monthEnd, context),
  };
}

export { createReportData };
