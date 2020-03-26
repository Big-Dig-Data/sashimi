import {isoDateTimeFormatT, endOfMonthStr, startOfMonthStr, parseDateTime} from './dates'
import {randomCount} from './random'
import {titles} from './titles'
import {possibleValues} from './dimensions'


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

function createPerformance (month, seedArray=[], index=1) {
  let metrics = [
    "Total_Item_Investigations",
    "Total_Item_Requests",
    "Unique_Item_Investigations",
    "Unique_Item_Requests",
    "No_License",
  ]

  let monthDate = parseDateTime(month+'-15')
  let instance = metrics.map(metric => {
    return {
      'Metric_Type': metric,
      'Count': randomCount([month, metric, ...seedArray], index)
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
    "Title": title.title,
    "Publisher": "Hogwarts publishing house",
    "Section_Type": "Article",
    "Platform": "Hogwarts manuscript collection",
    "Data_Type": "Journal",
    ...params,
    "Item_ID": []
  }
  if ('eissn' in title) {
    record['Item_ID'].push({"Type": "Online_ISSN", "Value": title.eissn})
  }
  if ('issn' in title) {
    record['Item_ID'].push({"Type": "Print_ISSN", "Value": title.issn})
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
  let idxTitle = 0, idxAT, idxAM
  for (let title of titles) {
    idxAT = 0
    idxTitle++
    for (let accessType of possibleValues.Access_Type) {
      idxAM = 0
      idxAT++
      for (let accessMethod of possibleValues.Access_Method) {
        idxAM++
        let record = createOneRecord(
          title,
          monthStart,
          {'Access_Type': accessType, 'Access_Method': accessMethod},
          seedArray,
          idxTitle * idxAM * idxAT
          )
        records.push(record)
      }
    }
  }
  return records
}

function createReportData (monthStart, monthEnd, seedArray=[]) {
  console.log(seedArray)
  return {
    'Report_Header': reportHeader(monthStart, monthEnd),
    'Report_Items': createTitleData(monthStart, monthEnd, [...seedArray]),
  }
}

export {
  createReportData,
}
