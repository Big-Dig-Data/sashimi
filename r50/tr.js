import { possibleValues } from "./dimensions";
import { BaseReportGeneratorR50 } from "./base";

class ReportGeneratorR50TR extends BaseReportGeneratorR50 {
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

  titleAttr = "Title";

  recordBase = {
    Title: "",
    Publisher: "Sashimi publishing house",
    Section_Type: "Article",
    Platform: "",
    Data_Type: "Journal",
    Item_ID: [],
  };

  *generateParams() {
    for (let accessType of possibleValues.Access_Type) {
      for (let accessMethod of possibleValues.Access_Method) {
        yield [
          {
            Access_Type: accessType.name,
            Access_Method: accessMethod.name,
          },
          accessType.weight * accessMethod.weight,
        ];
      }
    }
  }
}

export { ReportGeneratorR50TR };
