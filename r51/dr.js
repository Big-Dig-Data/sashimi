import { BaseReportGeneratorR51 } from "./base";

class ReportGeneratorR51DR extends BaseReportGeneratorR51 {
  reportId = "DR";

  reportName = "Database Report";

  metrics = [
    // database metrics
    { name: "Searches_Automated", weight: 3.0 },
    { name: "Searches_Federated", weight: 2.0 },
    { name: "Searches_Regular", weight: 2.0 },
    { name: "Limit_Exceeded", weight: 0.05 },
    { name: "No_License", weight: 0.05 },
    // other possible metrics - not compatible with the Database_* Data_Type
    // { name: "Total_Item_Investigations", weight: 1.0 },
    // { name: "Total_Item_Requests", weight: 0.9 },
    // { name: "Unique_Item_Investigations", weight: 1.0 },
    // { name: "Unique_Item_Requests", weight: 0.8 },
    // { name: "Unique_Title_Investigations", weight: 0.2 },
    // { name: "Unique_Title_Requests", weight: 0.1 },
  ];

  reportAttributes = [
    {
      Attributes_To_Show: ["Access_Method", "Data_Type"],
    },
  ];

  titleAttr = "Database";

  possibleValues = {
    Access_Method: [
      { name: "Regular", weight: 1 },
      { name: "TDM", weight: 0.1 },
    ],
    Data_Type: [
      { name: "Database_Aggregated", weight: 1 },
      { name: "Database_AI", weight: 1 },
      { name: "Database_Full", weight: 1 },
    ],
  };

  recordBase = {
    Database: "",
    Publisher: "Sashimi database powerhouse",
    Platform: "",
  };

  *generateParams() {
    for (let accessMethod of this.possibleValues.Access_Method) {
      for (let dataType of this.possibleValues.Data_Type) {
        yield [
          {
            Access_Method: accessMethod.name,
            Data_Type: dataType.name,
          },
          accessMethod.weight * dataType.weight,
        ];
      }
    }
  }
}

export { ReportGeneratorR51DR };
