import {isoDateTimeFormatT, endOfMonthStr, startOfMonthStr, parseDateTime} from './dates'
import {randomCount} from './random'
import { databases } from './titles'
import {possibleValues} from './dimensions'


function reportHeader (monthStart, monthEnd, customerId) {
  let now = new Date()
  return {
    "Created": isoDateTimeFormatT(now),
    "Created_By": "Sashimi fake SUSHI generator",
    "Customer_ID": customerId,
    "Report_ID": "DR",
    "Release": "5",
    "Report_Name": "Database Master Report",
    "Institution_Name": "Test Organization",
    "Report_Filters":
      [
        {
          "Name": "Begin_Date",
          "Value": monthStart
        },
        {
          "Name": "End_Date",
          "Value": monthEnd
        }
      ],
    "Report_Attributes":
      [
        {
          "Name": "Attributes_To_Show",
          "Value": "Access_Method|Data_Type"
        }
      ]
  }
}

function createPerformance (month, seedArray=[], index=1) {
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
  ]
  let monthDate;
  if ((month.match(/-/g) || []).length === 1) {
    monthDate = parseDateTime(month + '-15')
  } else {
    monthDate = parseDateTime(month)
  }
  let instance = metrics.map((metric, idx) => {
    return {
      'Metric_Type': metric,
      'Count': randomCount([month, metric, ...seedArray], (idx+1)*index)
    }
  })

  return [
        {
          "Period": {
            "Begin_Date": startOfMonthStr(monthDate),
            "End_Date": endOfMonthStr(monthDate),
          },
          "Instance": instance,
        }
      ]
}


function createOneRecord (title, month, params, seedArray=[], index=1) {
  /*
  * seedArray is used to provide a seed to the random number generator and thus return the same
  * random data for the same input every time
  * */
  let record = {
    "Database": title.title,
    "Publisher": "Hogwarts database powerhouse",
    "Platform": "Hogwarts database central",
    "Data_Type": "Database",
    ...params,
  }
  record['Performance'] = createPerformance(
    month,
    [title.title, ...Object.values(params), ...seedArray],
    index
  )
  return record
}


function createTitleData (monthStart, monthEnd, seedArray=[]) {
  let records = []
  let idxTitle = 0, idxAM
  for (let title of databases) {
    idxTitle++
    idxAM = 0
    for (let accessMethod of possibleValues.Access_Method) {
      idxAM++
      let record = createOneRecord(
        title,
        monthStart,
        {'Access_Method': accessMethod},
        seedArray,
        idxTitle * idxAM
        )
      records.push(record)
    }
  }
  return records
}

function createReportData (monthStart, monthEnd, customerId, seedArray=[]) {
  return {
    'Report_Header': reportHeader(monthStart, monthEnd, customerId),
    'Report_Items': createTitleData(monthStart, monthEnd, [...seedArray]),
  }
}

export {
  createReportData,
}
