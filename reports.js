import {isoDateTimeFormatT, endOfMonthStr, startOfMonthStr, parseDateTime} from './dates'
import {randomCount} from './random'
import {titles} from './titles'


function reportHeader (monthStart, monthEnd) {
  let now = new Date()
  return {
    "Created": isoDateTimeFormatT(now),
    "Created_By": "Sashimi fake SUSHI generator",
    "Customer_ID": "123456",
    "Report_ID": "TR",
    "Release": "5",
    "Report_Name": "Title Master Report",
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
          "Value": "YOP|Access_Method|Access_Type|Data_Type|Section_Type"
        }
      ]
  }
}

function createPerformance (month) {
  let metrics = [
    "Total_Item_Investigations",
    "Total_Item_Requests",
    "Unique_Item_Investigations",
    "Unique_Item_Requests",
  ]

  let monthDate = parseDateTime(month+'-15')
  let instance = metrics.map(metric => {return {'Metric_Type': metric, 'Count': randomCount()}})

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


function createTitleData (monthStart, monthEnd) {
  let records = []
  for (let title of titles) {
    let record = {
      "Title": title.title,
      "Publisher": "Oxford University Press",
      "Section_Type": "Article",
      "Platform": "Oxford Academic",
      "Data_Type": "Journal",
      "YOP": "2006",
      "Access_Type": "Controlled",
      "Access_Method": "Regular",
      "Item_ID": []
    }
    if ('eissn' in title) {
      record['Item_ID'].push({"Type": "Online_ISSN", "Value": title.eissn})
    }
    if ('issn' in title) {
      record['Item_ID'].push({"Type": "Print_ISSN", "Value": title.issn})
    }
    record['Performance'] = createPerformance(monthStart)
    records.push(record)
  }
  return records
}

function createReportData (monthStart, monthEnd) {

  return {
    'Report_Header': reportHeader(monthStart, monthEnd),
    'Report_Items': createTitleData(monthStart, monthEnd),
  }
}

export {
  createReportData,
}
