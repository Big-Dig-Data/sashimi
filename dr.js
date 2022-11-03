import {
  isoDateTimeFormatT,
  endOfMonthStr,
  startOfMonthStr,
  parseDateTime,
} from "./dates";
import { randomDatabases, randomUsageCount } from "./random";
import { databases } from "./titles";
import { possibleValues } from "./dimensions";

function reportHeader(monthStart, monthEnd, context) {
  let now = new Date();
  return {
    Created: isoDateTimeFormatT(now),
    Created_By: "Sashimi fake SUSHI generator",
    Customer_ID: context.customerId,
    Report_ID: "DR",
    Release: "5",
    Report_Name: "Database Master Report",
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
        Value: "Access_Method|Data_Type",
      },
    ],
  };
}

function createPerformance(month, context, seedArray = []) {
  let metrics = [
    "Searches_Automated",
    "Searches_Federated",
    "Searches_Regular",
    "Total_Item_Investigations",
    "Total_Item_Requests",
    "Unique_Item_Investigations",
    "Unique_Item_Requests",
    "Unique_Title_Investigations",
    "Unique_Title_Requests",
    "Limit_Exceeded",
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
   * seedArray is used to provide a seed to the random number generator and thus return the same
   * random data for the same input every time
   * */
  let record = {
    Database: title.title,
    Publisher: "Sashimi database powerhouse",
    Platform: context.platform,
    Data_Type: "Database",
    ...params,
  };
  record["Performance"] = createPerformance(month, context, [
    title.title,
    ...Object.values(params),
  ]);
  return record;
}

function createTitleData(monthStart, monthEnd, context) {
  let records = [];
  const databaseSubset = randomDatabases(context);
  for (let title of databaseSubset) {
    for (let accessMethod of possibleValues.Access_Method) {
      let record = createOneRecord(
        title,
        monthStart,
        { Access_Method: accessMethod },
        context
      );
      records.push(record);
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
