import { randomDatabases } from "../lib/random";
import { possibleValues } from "./dimensions";
import { BaseReportGeneratorR50 } from "./base";

class ReportGeneratorR50DR extends BaseReportGeneratorR50 {
  reportId = "DR";

  reportName = "Database Master Report";

  metrics = [
    { name: "Searches_Automated", weight: 3.0 },
    { name: "Searches_Federated", weight: 2.0 },
    { name: "Searches_Regular", weight: 2.0 },
    { name: "Total_Item_Investigations", weight: 1.0 },
    { name: "Total_Item_Requests", weight: 0.9 },
    { name: "Unique_Item_Investigations", weight: 1.0 },
    { name: "Unique_Item_Requests", weight: 0.8 },
    { name: "Unique_Title_Investigations", weight: 0.2 },
    { name: "Unique_Title_Requests", weight: 0.1 },
    { name: "Limit_Exceeded", weight: 0.05 },
    { name: "No_License", weight: 0.05 },
  ];

  reportAttributes = [
    {
      Name: "Attributes_To_Show",
      Value: "Access_Method|Data_Type",
    },
  ];

  titleAttr = "Database";

  recordBase = {
    Database: "",
    Publisher: "Sashimi database powerhouse",
    Platform: "",
    Data_Type: "Database",
  };

  createTitleList(monthStart) {
    return randomDatabases(this.context, monthStart);
  }

  *generateParams() {
    for (let accessMethod of possibleValues.Access_Method) {
      yield [
        {
          Access_Method: accessMethod.name,
        },
        accessMethod.weight,
      ];
    }
  }
}

export { ReportGeneratorR50DR };
