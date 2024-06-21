import { BaseReportGeneratorR51 } from "./base";

class ReportGeneratorR51TR extends BaseReportGeneratorR51 {
  reportId = "TR";

  reportName = "Title Report";

  metrics = [
    { name: "Total_Item_Investigations", weight: 1.6 },
    { name: "Unique_Item_Investigations", weight: 1.4 },
    { name: "Total_Item_Requests", weight: 1 },
    { name: "Unique_Item_Requests", weight: 0.8 },
    { name: "No_License", weight: 0.1 },
  ];

  reportAttributes = [
    {
      Attributes_To_Show: ["Access_Method", "Access_Type", "Data_Type"],
    },
  ];

  possibleValues = {
    Access_Type: [
      { name: "Controlled", weight: 1.5 },
      { name: "Open", weight: 1 },
      { name: "Free_To_Read", weight: 0.1 },
    ],
    Access_Method: [
      { name: "Regular", weight: 1 },
      { name: "TDM", weight: 0.1 },
    ],
    Data_Type: [
      { name: "Book", weight: 1 },
      { name: "Journal", weight: 1 },
      { name: "Newspaper_or_Newsletter", weight: 0.5 },
      { name: "Other", weight: 0.3 },
      { name: "Report", weight: 0.2 },
      { name: "Thesis_or_Dissertation", weight: 0.1 },
      { name: "Conference", weight: 0.1 },
      { name: "Patent", weight: 0.1 },
      { name: "Reference_Work", weight: 0.1 },
      { name: "Standard", weight: 0.1 },
      { name: "Unspecified", weight: 0.1 },
    ],
  };

  titleAttr = "Title";

  recordBase = {
    Title: "",
    Publisher: "Sashimi publishing house",
    Platform: "",
    Item_ID: {},
  };

  *generateParams() {
    for (let accessType of this.possibleValues.Access_Type) {
      for (let accessMethod of this.possibleValues.Access_Method) {
        for (let dataType of this.possibleValues.Data_Type) {
          let totalWeight =
            accessType.weight * accessMethod.weight * dataType.weight;
          if (totalWeight < 0.05) {
            // Skip combinations that are unlikely to occur
            continue;
          }
          yield [
            {
              Access_Type: accessType.name,
              Access_Method: accessMethod.name,
              Data_Type: dataType.name,
            },
            totalWeight,
          ];
        }
      }
    }
  }
}

export { ReportGeneratorR51TR };
