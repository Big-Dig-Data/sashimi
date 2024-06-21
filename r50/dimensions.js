const possibleValues = {
  Access_Type: [
    { name: "Controlled", weight: 1.5 },
    { name: "OA_Gold", weight: 1 },
    { name: "Other_Free_To_Read", weight: 0.1 },
  ],
  Access_Method: [
    { name: "Regular", weight: 1 },
    { name: "TDM", weight: 0.1 },
  ],
  Section_Type: [
    { name: "Article", weight: 1 },
    { name: "Book", weight: 1 },
    { name: "Chapter", weight: 1 },
    { name: "Other", weight: 1 },
    { name: "Section", weight: 1 },
  ],
  Data_Type: [
    { name: "Article", weight: 1 },
    { name: "Book", weight: 1 },
    { name: "Book_Segment", weight: 1 },
    { name: "Dataset", weight: 1 },
    { name: "Journal", weight: 1 },
    { name: "Multimedia", weight: 1 },
    { name: "Newspaper_or_Newsletter", weight: 1 },
    { name: "Other", weight: 1 },
    { name: "Report", weight: 1 },
    { name: "Repository_Item", weight: 1 },
    { name: "Thesis_or_Dissertation", weight: 1 },
  ],
};

export { possibleValues };
