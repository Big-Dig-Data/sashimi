const titles = [
  {
    title: "Nature",
    issn: "0028-0836",
    eissn: "1476-4687",
  },
  {
    title: "Scientific Reports",
    issn: "2045-2322",
  },
  {
    title: "Nature Communications",
    issn: "2041-1723",
  },
  {
    title: "Science of The Total Environment",
    issn: "0048-9697",
    eissn: "1879-1026",
  },
  {
    title: "Journal of the American Chemical Society",
    issn: "0002-7863",
    eissn: "1520-5126",
  },
  {
    title: "Food chemistry",
    issn: "0308-8146",
    eissn: "1873-7072",
  },
  {
    title: "Angewandte Chemie International Edition",
    issn: "1433-7851",
    eissn: "1521-3773",
  },
  {
    title: "Women's Wear Daily - WWD",
    issn: "0149-5380",
  },
  {
    title: "Chemosphere",
    issn: "0045-6535",
    eissn: "1879-1298",
  },
  {
    title: "PLoS One",
    issn: "",
    eissn: "1932-6203",
  },
  {
    title: "Earthquake Engineering & Structural Dynamics",
    issn: "0098-8847",
    eissn: "1096-9845",
  },
  {
    title: "Journal of chromatography A",
    issn: "0021-9673",
    eissn: "1873-3778",
  },
  {
    title: "Advanced Materials",
    issn: "0935-9648",
    eissn: "1521-4095",
  },
  {
    title: "Journal of cleaner production",
    issn: "0959-6526",
    eissn: "1879-1786",
  },
  {
    title: "Progress in Structural Engineering and Materials",
    issn: "1365-0556",
    eissn: "1528-2716",
  },
  {
    title: "The Journal of Organic Chemistry",
    issn: "0022-3263",
    eissn: "1520-6904",
  },
  {
    title: "Analytical Chemistry",
    issn: "0003-2700",
    eissn: "1520-6882",
  },
  {
    title: "Fire and Materials",
    issn: "0308-0501",
    eissn: "1099-1018",
  },
  {
    title: "Cell",
    issn: "0092-8674",
    eissn: "1097-4172",
  },
  {
    title: "Journal of personality and social psychology",
    issn: "0022-3514",
    eissn: "1939-1315",
  },
  {
    title: "Advanced Functional Materials",
    issn: "1616-301X",
    eissn: "1616-3028",
  },
  {
    title: "Bioresource Technology",
    issn: "0960-8524",
    eissn: "1873-2976",
  },
  {
    title: "Construction and building materials",
    issn: "0950-0618",
    eissn: "1879-0526",
  },
  {
    title: "Renewable and Sustainable Energy Reviews",
    issn: "1364-0321",
    eissn: "1879-0690",
  },
  {
    title: "Textile Research Journal",
    issn: "0040-5175",
    eissn: "1746-7748",
  },
  {
    title: "Water research",
    issn: "0043-1354",
    eissn: "1879-2448",
  },
  {
    title: "Applied Surface Science",
    issn: "0169-4332",
    eissn: "1873-5584",
  },
  {
    title: "Environmental pollution",
    issn: "0269-7491",
    eissn: "1873-6424",
  },
  {
    title: "Forest ecology and management",
    issn: "0378-1127",
    eissn: "1872-7042",
  },
  {
    title: "Tetrahedron Letters",
    issn: "0040-4039",
    eissn: "1873-3581",
  },
  {
    title: "Surface and Coatings Technology",
    issn: "0257-8972",
    eissn: "1879-3347",
  },
  {
    title: "Ceskoslovenska Psychologie",
    issn: "0009-062X",
    eissn: "1804-6436",
  },
  {
    title: "Analytica Chimica Acta",
    issn: "0003-2670",
    eissn: "1873-4324",
  },
  {
    title: "Journal of hazardous materials",
    issn: "0304-3894",
    eissn: "1873-3336",
  },
  {
    title: "Library Journal",
    issn: "0363-0277",
  },
  {
    title: "Organic letters",
    issn: "1523-7060",
    eissn: "1523-7052",
  },
  {
    title: "Child Development",
    issn: "0009-3920",
    eissn: "1467-8624",
  },
  {
    title: "Computers in human behavior",
    issn: "0747-5632",
    eissn: "1873-7692",
  },
  {
    title: "Journal of Applied Polymer Science",
    issn: "0021-8995",
    eissn: "1097-4628",
  },
  {
    title: "Annals of tourism research",
    issn: "0160-7383",
    eissn: "1873-7722",
  },
  {
    title: "Journal of agricultural and food chemistry",
    issn: "0021-8561",
    eissn: "1520-5118",
  },
  {
    title: "Chemistry â A European Journal",
    issn: "0947-6539",
    eissn: "1521-3765",
  },
  {
    title: "Small",
    issn: "1613-6810",
    eissn: "1613-6829",
  },
  {
    title: "American Psychologist",
    issn: "0003-066X",
    eissn: "1935-990X",
  },
  {
    title: "Developmental psychology",
    issn: "0012-1649",
    eissn: "1939-0599",
  },
  {
    title: "Environmental Science & Technology",
    issn: "0013-936X",
    eissn: "1520-5851",
  },
  {
    title: "ACS Nano",
    issn: "1936-0851",
    eissn: "1936-086X",
  },
  {
    title: "Journal of membrane science",
    issn: "0376-7388",
    eissn: "1873-3123",
  },
  {
    title: "Journal of Chemical Education",
    issn: "0021-9584",
    eissn: "1938-1328",
  },
  {
    title:
      "Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment",
    issn: "0168-9002",
    eissn: "1872-9576",
  },
  {
    title: "Journal of the American Ceramic Society",
    issn: "0002-7820",
    eissn: "1551-2916",
  },
  {
    title: "Veterinary Pathology",
    issn: "0300-9858",
    eissn: "1544-2217",
  },
  {
    title: "Materials Science and Engineering: A",
    issn: "0921-5093",
    eissn: "1873-4936",
  },
  {
    title: "Journal of Dairy Science",
    issn: "0022-0302",
    eissn: "1525-3198",
  },
  {
    title: "International journal of pharmaceutics",
    issn: "0378-5173",
    eissn: "1873-3476",
  },
  {
    title: "British Journal of Nursing",
    issn: "0966-0461",
    eissn: "2052-2819",
  },
  {
    title: "Chemical reviews",
    issn: "0009-2665",
    eissn: "1520-6890",
  },
  {
    title: "Advanced Energy Materials",
    issn: "1614-6832",
    eissn: "1614-6840",
  },
  {
    title: "Talanta",
    issn: "0039-9140",
    eissn: "1873-3573",
  },
  {
    title: "Journal of alloys and compounds",
    issn: "0925-8388",
    eissn: "1873-4669",
  },
  {
    title: "ACS Applied Materials & Interfaces",
    issn: "1944-8244",
    eissn: "1944-8252",
  },
  {
    title: "Applied energy",
    issn: "0306-2619",
    eissn: "1872-9118",
  },
  {
    title: "Journal of Family Psychology",
    issn: "0893-3200",
    eissn: "1939-1293",
  },
  {
    title: "Chemical engineering journal",
    issn: "1385-8947",
    eissn: "1873-3212",
  },
  {
    title: "Journal of applied psychology",
    issn: "0021-9010",
    eissn: "1939-1854",
  },
  {
    title: "New Phytologist",
    issn: "0028-646X",
    eissn: "1469-8137",
  },
  {
    title: "Energy",
    issn: "0360-5442",
    eissn: "1873-6785",
  },
  {
    title: "Foreign Affairs",
    issn: "0015-7120",
    eissn: "2327-7793",
  },
  {
    title: "Tetrahedron",
    issn: "0040-4020",
    eissn: "1464-5416",
  },
  {
    title: "Fuel",
    issn: "0016-2361",
    eissn: "1873-7153",
  },
  {
    title: "Electrochimica acta",
    issn: "0013-4686",
    eissn: "1873-3859",
  },
  {
    title: "Journal of consulting and clinical psychology",
    issn: "0022-006X",
    eissn: "1939-2117",
  },
  {
    title: "Langmuir",
    issn: "0743-7463",
    eissn: "1520-5827",
  },
  {
    title: "Geoderma",
    issn: "0016-7061",
    eissn: "1872-6259",
  },
  {
    title: "Chemical engineering science",
    issn: "0009-2509",
    eissn: "1873-4405",
  },
  {
    title: "Journal of Marriage and Family",
    issn: "0022-2445",
    eissn: "1741-3737",
  },
  {
    title: "AIChE Journal",
    issn: "0001-1541",
    eissn: "1547-5905",
  },
  {
    title: "Science",
    issn: "0036-8075",
    eissn: "1095-9203",
  },
  {
    title: "The Journal of Physical Chemistry A",
    issn: "1089-5639",
    eissn: "1520-5215",
  },
  {
    title: "The Journal of Physical Chemistry C",
    issn: "1932-7447",
    eissn: "1932-7455",
  },
  {
    title: "Global Change Biology",
    issn: "1354-1013",
    eissn: "1365-2486",
  },
  {
    title: "Sensors and Actuators B: Chemical",
    issn: "0925-4005",
    eissn: "1873-3077",
  },
  {
    title: "The Lancet",
    issn: "0140-6736",
    eissn: "1474-547X",
  },
  {
    title: "International journal of hydrogen energy",
    issn: "0360-3199",
    eissn: "1879-3487",
  },
  {
    title: "Sociologický Časopis = Czech Sociological Review",
    issn: "0038-0288",
    eissn: "2336-128X",
  },
  {
    title: "International Security",
    issn: "0162-2889",
    eissn: "1531-4804",
  },
  {
    title: "Energy policy",
    issn: "0301-4215",
    eissn: "1873-6777",
  },
  {
    title: "The Journal of Chemical Physics",
    issn: "0021-9606",
    eissn: "1089-7690",
  },
  {
    title: "The Journal of Physical Chemistry B",
    issn: "1520-6106",
    eissn: "1520-5207",
  },
  {
    title: "Biomaterials",
    issn: "0142-9612",
    eissn: "1878-5905",
  },
  {
    title: "Journal of power sources",
    issn: "0378-7753",
    eissn: "1873-2755",
  },
  {
    title: "Publishers Weekly",
    issn: "0000-0019",
    eissn: "2150-4008",
  },
  {
    title: "The Reading Teacher",
    issn: "0034-0561",
    eissn: "1936-2714",
  },
  {
    title: "Journal of Chemical Theory and Computation",
    issn: "1549-9618",
    eissn: "1549-9626",
  },
  {
    title: "Journal of environmental management",
    issn: "0301-4797",
    eissn: "1095-8630",
  },
  {
    title: "ChemSusChem",
    issn: "1864-5631",
    eissn: "1864-564X",
  },
  {
    title: "Journal of Management",
    issn: "0149-2063",
    eissn: "1557-1211",
  },
  {
    title: "Journal of medicinal chemistry",
    issn: "0022-2623",
    eissn: "1520-4804",
  },
  {
    title: "Salem Press Encyclopedia",
    issn: "",
  },
  {
    title: "Biosensors and bioelectronics",
    issn: "0956-5663",
    eissn: "1873-4235",
  },
  {
    title: "International journal of heat and mass transfer",
    issn: "0017-9310",
    eissn: "1879-2189",
  },
  {
    title: "Food research international",
    issn: "0963-9969",
    eissn: "1873-7145",
  },
  {
    title: "TrAC Trends in Analytical Chemistry",
    issn: "0165-9936",
    eissn: "1879-3142",
  },
  {
    title: "Industrial & engineering chemistry research",
    issn: "0888-5885",
    eissn: "1520-5045",
  },
  {
    title: "Waste management",
    issn: "0956-053X",
    eissn: "1879-2456",
  },
  {
    title: "Journal of hydrology",
    issn: "0022-1694",
    eissn: "1879-2707",
  },
  {
    title: "Carbohydrate polymers",
    issn: "0144-8617",
    eissn: "1879-1344",
  },
  {
    title: "Molecular Cell",
    issn: "1097-2765",
    eissn: "1097-4164",
  },
  {
    title: "Psychological bulletin",
    issn: "0033-2909",
    eissn: "1939-1455",
  },
  {
    title: "Inorganic chemistry",
    issn: "0020-1669",
    eissn: "1520-510X",
  },
  {
    title: "Ceramics international",
    issn: "0272-8842",
    eissn: "1873-3956",
  },
  {
    title: "European Journal of Organic Chemistry",
    issn: "1434-193X",
    eissn: "1099-0690",
  },
  {
    title: "Water Resources Research",
    issn: "0043-1397",
    eissn: "1944-7973",
  },
  {
    title: "Personality and Individual Differences",
    issn: "0191-8869",
    eissn: "1873-3549",
  },
  {
    title: "Cement and concrete research",
    issn: "0008-8846",
    eissn: "1873-3948",
  },
  {
    title: "Energy and buildings",
    issn: "0378-7788",
    eissn: "1872-6178",
  },
  {
    title: "Current Biology",
    issn: "0960-9822",
    eissn: "1879-0445",
  },
  {
    title: "Journal of Autism and Developmental Disorders",
    issn: "0162-3257",
    eissn: "1573-3432",
  },
  {
    title: "Journal of pharmaceutical and biomedical analysis",
    issn: "0731-7085",
    eissn: "1873-264X",
  },
  {
    title: "Angewandte Chemie",
    issn: "0044-8249",
    eissn: "1521-3757",
  },
  {
    title: "LWT",
    issn: "0023-6438",
  },
  {
    title: "Food control",
    issn: "0956-7135",
    eissn: "1873-7129",
  },
  {
    title: "Materials Science and Engineering: C",
    issn: "0928-4931",
    eissn: "1873-0191",
  },
  {
    title: "Czech & Slovak Social Work / Sociální Práce / Sociálna Práca",
    issn: "1213-6204",
    eissn: "1805-885X",
  },
  {
    title: "Renewable Energy",
    issn: "0960-1481",
    eissn: "1879-0682",
  },
  {
    title: "WWD",
    issn: "0149-5380",
  },
  {
    title: "Journal of colloid and interface science",
    issn: "0021-9797",
    eissn: "1095-7103",
  },
  {
    title: "Acta Materialia",
    issn: "1359-6454",
    eissn: "1873-2453",
  },
  {
    title: "American Sociological Review",
    issn: "0003-1224",
    eissn: "1939-8271",
  },
  {
    title: "NeuroImage",
    issn: "1053-8119",
    eissn: "1095-9572",
  },
  {
    title: "Journal of counseling psychology",
    issn: "0022-0167",
    eissn: "1939-2168",
  },
  {
    title: "Scandinavian Journal of Caring Sciences",
    issn: "0283-9318",
    eissn: "1471-6712",
  },
  {
    title: "Ecotoxicology and environmental safety",
    issn: "0147-6513",
    eissn: "1090-2414",
  },
  {
    title: "Forensic science international",
    issn: "0379-0738",
    eissn: "1872-6283",
  },
  {
    title: "Journal of Child and Family Studies",
    issn: "1062-1024",
    eissn: "1573-2843",
  },
  {
    title: "Journal of sports sciences",
    issn: "0264-0414",
    eissn: "1466-447X",
  },
  {
    title: "International journal of food microbiology",
    issn: "0168-1605",
    eissn: "1879-3460",
  },
  {
    title: "Environment international",
    issn: "0160-4120",
    eissn: "1873-6750",
  },
  {
    title: "Meat Science",
    issn: "0309-1740",
    eissn: "1873-4138",
  },
  {
    title: "Applied thermal engineering",
    issn: "1359-4311",
    eissn: "1359-4311",
  },
  {
    title: "International journal of biological macromolecules",
    issn: "0141-8130",
    eissn: "1879-0003",
  },
  {
    title: "Psychotherapy: Theory, Research, Practice, Training",
    issn: "0033-3204",
    eissn: "1939-1536",
  },
  {
    title: "Journal of educational psychology",
    issn: "0022-0663",
    eissn: "1939-2176",
  },
  {
    title: "Sociologický Časopis / Czech Sociological Review",
    issn: "0038-0288",
    eissn: "2336-128X",
  },
  {
    title: "Biochemical and biophysical research communications",
    issn: "0006-291X",
    eissn: "1090-2104",
  },
  {
    title: "ACM Proceedings",
    issn: "2168-4081",
  },
  {
    title: "Trends in food science & technology",
    issn: "0924-2244",
    eissn: "1879-3053",
  },
  {
    title: "Biological conservation",
    issn: "0006-3207",
    eissn: "1873-2917",
  },
  {
    title: "Soil Biology and Biochemistry",
    issn: "0038-0717",
    eissn: "1879-3428",
  },
  {
    title: "Separation and purification technology",
    issn: "1383-5866",
    eissn: "1873-3794",
  },
  {
    title: "Social Behavior and Personality: An International Journal",
    issn: "0301-2212",
    eissn: "1179-6391",
  },
  {
    title: "Carbohydrate research",
    issn: "0008-6215",
    eissn: "1873-426X",
  },
  {
    title: "American Journal of Public Health",
    issn: "0090-0036",
    eissn: "1541-0048",
  },
  {
    title: "International Organization",
    issn: "0020-8183",
    eissn: "1531-5088",
  },
  {
    title: "The American Economic Review",
    issn: "0002-8282",
    eissn: "1944-7981",
  },
  {
    title: "Polymer Degradation and Stability",
    issn: "0141-3910",
    eissn: "1873-2321",
  },
  {
    title: "Corrosion science",
    issn: "0010-938X",
    eissn: "1879-0496",
  },
  {
    title: "European journal of operational research",
    issn: "0377-2217",
    eissn: "1872-6860",
  },
  {
    title: "Journal of nuclear materials",
    issn: "0022-3115",
    eissn: "1873-4820",
  },
  {
    title: "Powder Technology",
    issn: "0032-5910",
    eissn: "1873-328X",
  },
  {
    title: "Science and Children",
    issn: "0036-8148",
    eissn: "1943-4812",
  },
  {
    title: "Journal of Chromatography B",
    issn: "1570-0232",
    eissn: "1873-376X",
  },
  {
    title: "Macromolecules",
    issn: "0024-9297",
    eissn: "1520-5835",
  },
  {
    title: "Psychological Science",
    issn: "0956-7976",
    eissn: "1467-9280",
  },
  {
    title: "Biochemistry",
    issn: "0006-2960",
    eissn: "1520-4995",
  },
  {
    title: "Time",
    issn: "0040-781X",
    eissn: "2169-1665",
  },
  {
    title: "Desalination",
    issn: "0011-9164",
    eissn: "1873-4464",
  },
  {
    title: "Chemistry – A European Journal",
    issn: "0947-6539",
    eissn: "1521-3765",
  },
  {
    title: "Building and Environment",
    issn: "0360-1323",
    eissn: "1873-684X",
  },
  {
    title: "ChemCatChem",
    issn: "1867-3880",
    eissn: "1867-3899",
  },
  {
    title: "Journal of Clinical Psychology",
    issn: "0021-9762",
    eissn: "1097-4679",
  },
  {
    title: "Thin solid films",
    issn: "0040-6090",
    eissn: "1879-2731",
  },
  {
    title: "Journal of Chemical & Engineering Data",
    issn: "0021-9568",
    eissn: "1520-5134",
  },
  {
    title: "Industrial crops and products",
    issn: "0926-6690",
    eissn: "1872-633X",
  },
  {
    title: "Scientific American",
    issn: "0036-8733",
    eissn: "1946-7087",
  },
  {
    title: "Chemistry of materials",
    issn: "0897-4756",
    eissn: "1520-5002",
  },
  {
    title: "Nature medicine",
    issn: "1078-8956",
    eissn: "1546-170X",
  },
  {
    title: "Polymer",
    issn: "0032-3861",
    eissn: "1873-2291",
  },
  {
    title: "Booklist",
    issn: "0006-7385",
  },
  {
    title: "Energy conversion and management",
    issn: "0196-8904",
    eissn: "1879-2227",
  },
  {
    title: "Journal of Business Ethics",
    issn: "0167-4544",
    eissn: "1573-0697",
  },
  {
    title: "Theriogenology",
    issn: "0093-691X",
    eissn: "1879-3231",
  },
  {
    title: "Journal of molecular biology",
    issn: "0022-2836",
    eissn: "1089-8638",
  },
  {
    title: "Tourism management",
    issn: "0261-5177",
    eissn: "1879-3193",
  },
  {
    title: "Academy of Management Journal",
    issn: "0001-4273",
    eissn: "1948-0989",
  },
  {
    title: "Soil and Tillage Research",
    issn: "0167-1987",
    eissn: "1879-3444",
  },
  {
    title: "Nano letters",
    issn: "1530-6984",
    eissn: "1530-6992",
  },
  {
    title: "Social Forces",
    issn: "0037-7732",
    eissn: "1534-7605",
  },
  {
    title: "Agriculture, Ecosystems & Environment",
    issn: "0167-8809",
    eissn: "1873-2305",
  },
  {
    title: "School Library Journal",
    issn: "0362-8930",
    eissn: "1573-2959",
  },
  {
    title: "Nature Neuroscience",
    issn: "1097-6256",
    eissn: "1546-1726",
  },
  {
    title: "Psychological Trauma: Theory, Research, Practice, and Policy",
    issn: "1942-9681",
    eissn: "1942-969X",
  },
  {
    title: "Transportation Research Record",
    issn: "0361-1981",
    eissn: "2169-4052",
  },
  {
    title: "International journal of energy research",
    issn: "0363-907X",
    eissn: "1099-114X",
  },
  {
    title: "Current Directions in Psychological Science",
    issn: "0963-7214",
    eissn: "1467-8721",
  },
  {
    title: "Biomass and bioenergy",
    issn: "0961-9534",
    eissn: "1873-2909",
  },
  {
    title: "Materials letters",
    issn: "0167-577X",
    eissn: "1873-4979",
  },
  {
    title: "Catena",
    issn: "0341-8162",
    eissn: "1872-6887",
  },
  {
    title: "DynaMed Classic",
    issn: "",
  },
  {
    title: "Biotechnology advances",
    issn: "0734-9750",
    eissn: "1873-1899",
  },
  {
    title: "Chemical Engineering & Technology",
    issn: "0930-7516",
    eissn: "1521-4125",
  },
  {
    title: "Social Work",
    issn: "0037-8046",
    eissn: "1545-6846",
  },
  {
    title: "Journal of materials processing technology",
    issn: "0924-0136",
    eissn: "1873-4774",
  },
  {
    title: "Applied animal behaviour science",
    issn: "0168-1591",
    eissn: "1872-9045",
  },
  {
    title: "Phytochemistry",
    issn: "0031-9422",
    eissn: "1873-3700",
  },
  {
    title: "Journal of Biblical Literature",
    issn: "0021-9231",
    eissn: "1934-3876",
  },
  {
    title: "Catalysis today",
    issn: "0920-5861",
    eissn: "1873-4308",
  },
  {
    title: "Journal of the European Ceramic Society",
    issn: "0955-2219",
    eissn: "1873-619X",
  },
  {
    title: "Administrative Science Quarterly",
    issn: "0001-8392",
    eissn: "1930-3815",
  },
  {
    title: "Colloids and Surfaces A: Physicochemical and Engineering Aspects",
    issn: "0927-7757",
    eissn: "1873-4359",
  },
  {
    title: "Journal of Feline Medicine and Surgery",
    issn: "1098-612X",
    eissn: "1532-2750",
  },
  {
    title: "Accounts of chemical research",
    issn: "0001-4842",
    eissn: "1520-4898",
  },
  {
    title: "Journal of Veterinary Diagnostic Investigation",
    issn: "1040-6387",
    eissn: "1943-4936",
  },
  {
    title: "Ecological indicators",
    issn: "1470-160X",
    eissn: "1872-7034",
  },
  {
    title: "Journal of Controlled Release",
    issn: "0168-3659",
    eissn: "1873-4995",
  },
  {
    title: "Journal of Chemical Information and Modeling",
    issn: "1549-9596",
    eissn: "1549-960X",
  },
  {
    title: "Journal of Chemical Technology & Biotechnology",
    issn: "0268-2575",
    eissn: "1097-4660",
  },
  {
    title: "Psychological Assessment",
    issn: "1040-3590",
    eissn: "1939-134X",
  },
  {
    title: "Food and Chemical Toxicology",
    issn: "0278-6915",
    eissn: "1873-6351",
  },
  {
    title: "Land use policy",
    issn: "0264-8377",
    eissn: "1873-5754",
  },
  {
    title: "Prakticky Lekar",
    issn: "0032-6739",
  },
  {
    title: "American Journal of Orthopsychiatry",
    issn: "0002-9432",
    eissn: "1939-0025",
  },
  {
    title: "Health Psychology",
    issn: "0278-6133",
    eissn: "1930-7810",
  },
  {
    title: "College Student Journal",
    issn: "0146-3934",
  },
  {
    title: "Journal of business research",
    issn: "0148-2963",
    eissn: "1873-7978",
  },
  {
    title: "Bioorganic & medicinal chemistry letters",
    issn: "0960-894X",
    eissn: "1464-3405",
  },
  {
    title: "Composite Structures",
    issn: "0263-8223",
    eissn: "1879-1085",
  },
  {
    title: "Addiction",
    issn: "0965-2140",
    eissn: "1360-0443",
  },
  {
    title: "Expert systems with applications",
    issn: "0957-4174",
    eissn: "1873-6793",
  },
  {
    title: "Bioorganic & medicinal chemistry",
    issn: "0968-0896",
    eissn: "1464-3391",
  },
  {
    title: "American Journal of Sociology",
    issn: "0002-9602",
    eissn: "1537-5390",
  },
  {
    title: "Journal of youth and adolescence",
    issn: "0047-2891",
    eissn: "1573-6601",
  },
  {
    title: "Acta biomaterialia",
    issn: "1742-7061",
    eissn: "1878-7568",
  },
  {
    title: "Ecological engineering",
    issn: "0925-8574",
    eissn: "1872-6992",
  },
  {
    title: "Journal of Personality",
    issn: "0022-3506",
    eissn: "1467-6494",
  },
  {
    title: "The American Historical Review",
    issn: "0002-8762",
    eissn: "1937-5239",
  },
  {
    title: "Česká literatura",
    issn: "0009-0468",
    eissn: "2571-094X",
  },
  {
    title: "Biophysical Journal",
    issn: "0006-3495",
    eissn: "1542-0086",
  },
  {
    title: "Journal of sport management",
    issn: "0888-4773",
    eissn: "1543-270X",
  },
  {
    title: "Psychological review",
    issn: "0033-295X",
    eissn: "1939-1471",
  },
  {
    title: "Atmospheric environment",
    issn: "1352-2310",
    eissn: "1873-2844",
  },
  {
    title: "Rehabilitace a Fyzikalni Lekarstvi",
    issn: "1211-2658",
  },
  {
    title: "Český lid",
    issn: "0009-0794",
    eissn: "2570-9216",
  },
  {
    title: "Crystal growth & design",
    issn: "1528-7483",
    eissn: "1528-7505",
  },
  {
    title: "E-psychologie",
    issn: "",
    eissn: "1802-8853",
  },
  {
    title: "Journal of Personality Assessment",
    issn: "0022-3891",
    eissn: "1532-7752",
  },
  {
    title: "Journal of Social Psychology",
    issn: "0022-4545",
    eissn: "1940-1183",
  },
  {
    title: "New Statesman",
    issn: "1364-7431",
    eissn: "1758-924X",
  },
  {
    title: "The Journal of Sex Research",
    issn: "0022-4499",
    eissn: "1559-8519",
  },
  {
    title: "Sex roles",
    issn: "0360-0025",
    eissn: "1573-2762",
  },
  {
    title: "Bloomberg Businessweek",
    issn: "0007-7135",
    eissn: "2162-657X",
  },
  {
    title: "Chemical Engineering Research and Design",
    issn: "0263-8762",
    eissn: "1744-3563",
  },
  {
    title: "Journal of food engineering",
    issn: "0260-8774",
    eissn: "1873-5770",
  },
  {
    title: "Engineering structures",
    issn: "0141-0296",
    eissn: "1873-7323",
  },
  {
    title: "Remote sensing of environment",
    issn: "0034-4257",
    eissn: "1879-0704",
  },
  {
    title: "Journal of Applied Crystallography",
    issn: "1600-5767",
    eissn: "1600-5767",
  },
  {
    title: "Wear",
    issn: "0043-1648",
    eissn: "1873-2577",
  },
  {
    title: "Carbon",
    issn: "0008-6223",
    eissn: "1873-3891",
  },
  {
    title: "Composites Part B: Engineering",
    issn: "1359-8368",
  },
  {
    title: "European Journal of Medicinal Chemistry",
    issn: "0223-5234",
    eissn: "1768-3254",
  },
  {
    title: "Nuclear Engineering and Design",
    issn: "0029-5493",
    eissn: "1872-759X",
  },
  {
    title: "European Journal of Pharmaceutics and Biopharmaceutics",
    issn: "0939-6411",
    eissn: "1873-3441",
  },
  {
    title: "ACS Catalysis",
    issn: "",
    eissn: "2155-5435",
  },
  {
    title: "Journal of Applied Microbiology",
    issn: "1364-5072",
    eissn: "1365-2672",
  },
  {
    title: "Harvard Business Review",
    issn: "0017-8012",
  },
  {
    title: "Animal Behaviour",
    issn: "0003-3472",
    eissn: "1095-8282",
  },
  {
    title: "Colloids and Surfaces B: Biointerfaces",
    issn: "0927-7765",
    eissn: "1873-4367",
  },
  {
    title: "Journal of Marketing Research",
    issn: "0022-2437",
    eissn: "1547-7193",
  },
  {
    title: "The American Political Science Review",
    issn: "0003-0554",
    eissn: "1537-5943",
  },
  {
    title: "Environmental research",
    issn: "0013-9351",
    eissn: "1096-0953",
  },
  {
    title: "Substance use & misuse",
    issn: "1082-6084",
    eissn: "1532-2491",
  },
  {
    title: "Geophysical Research Letters",
    issn: "0094-8276",
    eissn: "1944-8007",
  },
  {
    title: "European Journal of Inorganic Chemistry",
    issn: "1434-1948",
    eissn: "1099-0682",
  },
  {
    title: "Applied Catalysis B: Environmental",
    issn: "0926-3373",
    eissn: "1873-3883",
  },
  {
    title: "Medicina Sportiva Bohemica et Slovaca",
    issn: "1210-5481",
  },
  {
    title: "Biotechnology and Bioengineering",
    issn: "0006-3592",
    eissn: "1097-0290",
  },
  {
    title: "International Journal of Eating Disorders",
    issn: "0276-3478",
    eissn: "1098-108X",
  },
  {
    title: "Computers & education",
    issn: "0360-1315",
    eissn: "1873-782X",
  },
  {
    title: "Nucleic Acids Research",
    issn: "0305-1048",
    eissn: "1362-4962",
  },
  {
    title: "Family Relations",
    issn: "0197-6664",
    eissn: "1741-3729",
  },
  {
    title: "Landscape and urban planning",
    issn: "0169-2046",
    eissn: "1872-6062",
  },
  {
    title: "BMJ: British Medical Journal",
    issn: "0959-8138",
    eissn: "1756-1833",
  },
  {
    title: "Journal for the Scientific Study of Religion",
    issn: "0021-8294",
    eissn: "1468-5906",
  },
  {
    title: "International Studies Quarterly",
    issn: "0020-8833",
    eissn: "1468-2478",
  },
  {
    title: "Journal of Raman Spectroscopy",
    issn: "0377-0486",
    eissn: "1097-4555",
  },
  {
    title: "Journal of Polymer Science Part A: Polymer Chemistry",
    issn: "0887-624X",
    eissn: "1099-0518",
  },
  {
    title: "Journal of the Science of Food and Agriculture",
    issn: "0022-5142",
    eissn: "1097-0010",
  },
  {
    title: "British journal of community nursing",
    issn: "1462-4753",
    eissn: "2052-2215",
  },
  {
    title: "Emotion",
    issn: "1528-3542",
    eissn: "1931-1516",
  },
  {
    title: "Professional Psychology: Research and Practice",
    issn: "0735-7028",
    eissn: "1939-1323",
  },
  {
    title: "The sport psychologist",
    issn: "0888-4781",
    eissn: "1543-2793",
  },
  {
    title:
      "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy",
    issn: "1386-1425",
    eissn: "1873-3557",
  },
  {
    title: "Trends in Plant Science",
    issn: "1360-1385",
    eissn: "1878-4372",
  },
  {
    title: "Advanced drug delivery reviews",
    issn: "0169-409X",
    eissn: "1872-8294",
  },
  {
    title: "European Journal of Social Psychology",
    issn: "0046-2772",
    eissn: "1099-0992",
  },
  {
    title: "Organometallics",
    issn: "0276-7333",
    eissn: "1520-6041",
  },
  {
    title: "International Affairs",
    issn: "0020-5850",
    eissn: "1468-2346",
  },
  {
    title: "BMC Public Health",
    issn: "",
    eissn: "1471-2458",
  },
  {
    title: "Materials & Design",
    issn: "0264-1275",
    eissn: "1873-4197",
  },
  {
    title: "Arts & Activities",
    issn: "0004-3931",
  },
  {
    title: "International journal of impact engineering",
    issn: "0734-743X",
    eissn: "1879-3509",
  },
  {
    title: "Journal of abnormal psychology",
    issn: "0021-843X",
    eissn: "1939-1846",
  },
  {
    title: "Journal of sport & exercise psychology",
    issn: "0895-2779",
    eissn: "1543-2904",
  },
  {
    title: "Analytical biochemistry",
    issn: "0003-2697",
    eissn: "1096-0309",
  },
  {
    title: "Third World Quarterly",
    issn: "0143-6597",
    eissn: "1360-2241",
  },
  {
    title: "FEBS Letters",
    issn: "0014-5793",
    eissn: "1873-3468",
  },
  {
    title: "Journal of Food Science",
    issn: "0022-1147",
    eissn: "1750-3841",
  },
  {
    title: "Trends in ecology & evolution",
    issn: "0169-5347",
    eissn: "1872-8383",
  },
  {
    title: "Scripta Materialia",
    issn: "1359-6462",
    eissn: "1872-8456",
  },
  {
    title: "Sociální studia",
    issn: "1214-813X",
    eissn: "1803-6104",
  },
  {
    title: "The Journal of Politics",
    issn: "0022-3816",
    eissn: "1468-2508",
  },
  {
    title: "Advanced Engineering Materials",
    issn: "1438-1656",
    eissn: "1527-2648",
  },
  {
    title: "New Scientist",
    issn: "0262-4079",
    eissn: "2059-5387",
  },
  {
    title: "Mechanical Systems and Signal Processing",
    issn: "0888-3270",
    eissn: "1096-1216",
  },
  {
    title: "Journal of ethnopharmacology",
    issn: "0378-8741",
    eissn: "1872-7573",
  },
  {
    title: "BMC nursing",
    issn: "",
    eissn: "1472-6955",
  },
  {
    title: "Appetite",
    issn: "0195-6663",
    eissn: "1095-8304",
  },
  {
    title: "Fatigue & Fracture of Engineering Materials & Structures",
    issn: "8756-758X",
    eissn: "1460-2695",
  },
  {
    title: "The Journal of Physical Chemistry",
    issn: "0022-3654",
    eissn: "1541-5740",
  },
  {
    title: "Soccer & Society",
    issn: "1466-0970",
    eissn: "1743-9590",
  },
  {
    title: "Aquatic toxicology",
    issn: "0166-445X",
    eissn: "1879-1514",
  },
  {
    title: "Quaternary International",
    issn: "1040-6182",
    eissn: "1873-4553",
  },
  {
    title: "Work : A Journal of Prevention, Assessment, and Rehabilitation",
    issn: "1051-9815",
    eissn: "1875-9270",
  },
  {
    title: "Ecology",
    issn: "0012-9658",
    eissn: "1939-9170",
  },
  {
    title: "Sociologia Slovak Sociological Review",
    issn: "0049-1225",
    eissn: "1336-8613",
  },
  {
    title: "Geomorphology",
    issn: "0169-555X",
    eissn: "1872-695X",
  },
  {
    title: "Journal of molecular structure",
    issn: "0022-2860",
    eissn: "1872-8014",
  },
  {
    title: "Scandinavian journal of medicine & science in sports",
    issn: "0905-7188",
    eissn: "1600-0838",
  },
  {
    title: "The Annals of the American Academy of Political and Social Science",
    issn: "0002-7162",
    eissn: "1552-3349",
  },
  {
    title: "BMC Psychiatry",
    issn: "",
    eissn: "1471-244X",
  },
  {
    title: "Environmental Microbiology",
    issn: "1462-2912",
    eissn: "1462-2920",
  },
  {
    title: "PMLA",
    issn: "0030-8129",
    eissn: "1938-1530",
  },
  {
    title: "Journal of Polymer Science Part B: Polymer Physics",
    issn: "0887-6266",
    eissn: "1099-0488",
  },
  {
    title: "Cement and concrete composites",
    issn: "0958-9465",
    eissn: "1873-393X",
  },
  {
    title: "Coordination chemistry reviews",
    issn: "0010-8545",
    eissn: "1873-3840",
  },
  {
    title: "European polymer journal",
    issn: "0014-3057",
    eissn: "1873-1945",
  },
  {
    title: "Cyberpsychology, Behavior, and Social Networking",
    issn: "2152-2715",
    eissn: "2152-2723",
  },
  {
    title: "Chemical physics letters",
    issn: "0009-2614",
    eissn: "1873-4448",
  },
  {
    title: "Electoral studies",
    issn: "0261-3794",
    eissn: "1873-6890",
  },
  {
    title: "Energy & fuels",
    issn: "0887-0624",
    eissn: "1520-5029",
  },
  {
    title: "Journal of occupational health psychology",
    issn: "1076-8998",
    eissn: "1939-1307",
  },
  {
    title: "Nature Methods",
    issn: "1548-7091",
    eissn: "1548-7105",
  },
  {
    title: "Microchemical Journal",
    issn: "0026-265X",
    eissn: "1095-9149",
  },
  {
    title: "Scandinavian journal of educational research",
    issn: "0031-3831",
    eissn: "1470-1170",
  },
  {
    title: "Journal of Religion and Health",
    issn: "0022-4197",
    eissn: "1573-6571",
  },
  {
    title: "Oncogene",
    issn: "0950-9232",
    eissn: "1476-5594",
  },
  {
    title: "Fluid Phase Equilibria",
    issn: "0378-3812",
    eissn: "1879-0224",
  },
  {
    title: "Geochimica et cosmochimica acta",
    issn: "0016-7037",
    eissn: "1872-9533",
  },
  {
    title: "Journal of computational physics",
    issn: "0021-9991",
    eissn: "1090-2716",
  },
  {
    title: "Europe-Asia Studies",
    issn: "0966-8136",
    eissn: "1465-3427",
  },
  {
    title: "Research Starters: Diseases & Disorders",
    issn: "",
  },
  {
    title: "Neuroscience & Biobehavioral Reviews",
    issn: "0149-7634",
    eissn: "1873-7528",
  },
  {
    title: "Psychological reports",
    issn: "0033-2941",
    eissn: "1558-691X",
  },
  {
    title: "Journal of Social Issues",
    issn: "0022-4537",
    eissn: "1540-4560",
  },
  {
    title: "Journal of child psychology and psychiatry and allied disciplines",
    issn: "0021-9630",
    eissn: "1469-7610",
  },
  {
    title: "Journal of Physical Education and Sport",
    issn: "2247-8051",
    eissn: "2247-806X",
  },
  {
    title: "MIS Quarterly",
    issn: "0276-7783",
    eissn: "2162-9730",
  },
  {
    title: "The Art Bulletin",
    issn: "0004-3079",
    eissn: "1559-6478",
  },
  {
    title: "Ecological economics",
    issn: "0921-8009",
    eissn: "1873-6106",
  },
  {
    title: "Resources, Conservation and Recycling",
    issn: "0921-3449",
    eissn: "1879-0658",
  },
  {
    title: "Journal of archaeological science",
    issn: "0305-4403",
    eissn: "1095-9238",
  },
  {
    title: "Journal of non-crystalline solids",
    issn: "0022-3093",
    eissn: "1873-4812",
  },
  {
    title: "World Politics",
    issn: "0043-8871",
    eissn: "1086-3338",
  },
  {
    title: "Fusion engineering and design",
    issn: "0920-3796",
    eissn: "1873-7196",
  },
  {
    title: "Biochimica et Biophysica Acta (BBA) - Biomembranes",
    issn: "0005-2736",
    eissn: "1879-2642",
  },
  {
    title: "Tribology international",
    issn: "0301-679X",
    eissn: "1879-2464",
  },
  {
    title: "Psychology of Addictive Behaviors",
    issn: "0893-164X",
    eissn: "1939-1501",
  },
  {
    title: "Journal of Microbiology",
    issn: "1225-8873",
    eissn: "1976-3794",
  },
  {
    title: "Nature Reviews Cancer",
    issn: "1474-175X",
    eissn: "1474-1768",
  },
  {
    title: "Church History",
    issn: "0009-6407",
    eissn: "1755-2613",
  },
  {
    title: "American Journal of Political Science",
    issn: "0092-5853",
    eissn: "1540-5907",
  },
  {
    title: "Nature biotechnology",
    issn: "1087-0156",
    eissn: "1546-1696",
  },
  {
    title: "The Plant Journal",
    issn: "0960-7412",
    eissn: "1365-313X",
  },
  {
    title: "Bioinformatics",
    issn: "1367-4803",
    eissn: "1460-2059",
  },
  {
    title: "Review of International Studies",
    issn: "0260-2105",
    eissn: "1469-9044",
  },
  {
    title: "ChemPhysChem",
    issn: "1439-4235",
    eissn: "1439-7641",
  },
  {
    title: "Nature Reviews Neuroscience",
    issn: "1471-003X",
    eissn: "1471-0048",
  },
  {
    title:
      "Proceedings of the National Academy of Sciences of the United States of America",
    issn: "0027-8424",
    eissn: "1091-6490",
  },
  {
    title: "Food microbiology",
    issn: "0740-0020",
    eissn: "1095-9998",
  },
  {
    title: "Advanced Synthesis & Catalysis",
    issn: "1615-4150",
    eissn: "1615-4169",
  },
  {
    title: "Psychology in the Schools",
    issn: "0033-3085",
    eissn: "1520-6807",
  },
  {
    title: "Sociology of sport journal",
    issn: "0741-1235",
    eissn: "1543-2785",
  },
  {
    title: "Journal of food composition and analysis",
    issn: "0889-1575",
    eissn: "1096-0481",
  },
  {
    title: "Thermochimica acta",
    issn: "0040-6031",
    eissn: "1872-762X",
  },
  {
    title: "Social Science Quarterly",
    issn: "0038-4941",
    eissn: "1540-6237",
  },
  {
    title: "IFAC-PapersOnLine",
    issn: "2405-8963",
  },
  {
    title: "Social Indicators Research",
    issn: "0303-8300",
    eissn: "1573-0921",
  },
  {
    title: "Journal of European public policy",
    issn: "1350-1763",
    eissn: "1466-4429",
  },
  {
    title: "Current opinion in biotechnology",
    issn: "0958-1669",
    eissn: "1879-0429",
  },
  {
    title: "Materials characterization",
    issn: "1044-5803",
    eissn: "1873-4189",
  },
  {
    title: "The British Journal of Social Work",
    issn: "0045-3102",
    eissn: "1468-263X",
  },
  {
    title: "Annals of nuclear energy",
    issn: "0306-4549",
    eissn: "1873-2100",
  },
  {
    title: "Early Childhood Education Journal",
    issn: "1082-3301",
    eissn: "1573-1707",
  },
  {
    title: "Applied Catalysis A: General",
    issn: "0926-860X",
    eissn: "1873-3875",
  },
  {
    title: "Economic and Political Weekly",
    issn: "0012-9976",
    eissn: "2349-8846",
  },
  {
    title: "Polymer Composites",
    issn: "0272-8397",
    eissn: "1548-0569",
  },
  {
    title: "Journal of Natural Products",
    issn: "0163-3864",
    eissn: "1520-6025",
  },
  {
    title: "International Journal of Sports Science & Coaching",
    issn: "1747-9541",
    eissn: "2048-397X",
  },
  {
    title: "Environmental Toxicology and Chemistry",
    issn: "0730-7268",
    eissn: "1552-8618",
  },
  {
    title: "International journal of solids and structures",
    issn: "0020-7683",
    eissn: "1879-2146",
  },
  {
    title: "Journal of Experimental Psychology: General",
    issn: "0096-3445",
    eissn: "1939-2222",
  },
  {
    title: "Journal of biomedical materials research Part A",
    issn: "1549-3296",
    eissn: "1552-4965",
  },
  {
    title: "Journal of microbiological methods",
    issn: "0167-7012",
    eissn: "1872-8359",
  },
  {
    title: "Educational Leadership",
    issn: "0013-1784",
    eissn: "1943-5878",
  },
  {
    title: "Chemical Communications",
    issn: "1359-7345",
    eissn: "1364-548X",
  },
  {
    title: "Journal of Computational Chemistry",
    issn: "0192-8651",
    eissn: "1096-987X",
  },
  {
    title: "Nature Immunology",
    issn: "1529-2908",
    eissn: "1529-2916",
  },
  {
    title: "Solar Energy",
    issn: "0038-092X",
    eissn: "1471-1257",
  },
  {
    title: "Fuel processing technology",
    issn: "0378-3820",
    eissn: "1873-7188",
  },
  {
    title: "Journal of industrial ecology",
    issn: "1088-1980",
    eissn: "1530-9290",
  },
  {
    title: "Food hydrocolloids",
    issn: "0268-005X",
    eissn: "1873-7137",
  },
  {
    title: "Scientia Horticulturae",
    issn: "0304-4238",
    eissn: "1879-1018",
  },
  {
    title: "Measurement",
    issn: "0263-2241",
    eissn: "1873-412X",
  },
  {
    title: "JCMS: Journal of Common Market Studies",
    issn: "0021-9886",
    eissn: "1468-5965",
  },
  {
    title: "International journal of fatigue",
    issn: "0142-1123",
    eissn: "1879-3452",
  },
  {
    title: "Neuroscience",
    issn: "0306-4522",
    eissn: "1873-7544",
  },
  {
    title: "Ecological Applications",
    issn: "1051-0761",
    eissn: "1939-5582",
  },
  {
    title: "Microporous and Mesoporous Materials",
    issn: "1387-1811",
    eissn: "1873-3093",
  },
  {
    title: "International journal of sports physiology and performance",
    issn: "1555-0265",
    eissn: "1555-0273",
  },
  {
    title: "Molecular Microbiology",
    issn: "0950-382X",
    eissn: "1365-2958",
  },
  {
    title: "Journal of analytical and applied pyrolysis",
    issn: "0165-2370",
    eissn: "1873-250X",
  },
  {
    title: "Public Administration Review",
    issn: "0033-3352",
    eissn: "1540-6210",
  },
  {
    title: "The American Journal of Sports Medicine",
    issn: "0363-5465",
    eissn: "1552-3365",
  },
  {
    title: "The English Journal",
    issn: "0013-8274",
    eissn: "2161-8895",
  },
  {
    title: "Journal of American College Health",
    issn: "0744-8481",
    eissn: "1940-3208",
  },
  {
    title: "Journal of Separation Science",
    issn: "1615-9306",
    eissn: "1615-9314",
  },
  {
    title: "Political Psychology",
    issn: "0162-895X",
    eissn: "1467-9221",
  },
  {
    title: "Physical Education & Sport Pedagogy",
    issn: "1740-8989",
    eissn: "1742-5786",
  },
  {
    title: "International Journal for Numerical Methods in Engineering",
    issn: "0029-5981",
    eissn: "1097-0207",
  },
  {
    title: "Speculum",
    issn: "0038-7134",
    eissn: "2040-8072",
  },
  {
    title: "Progress in Polymer Science",
    issn: "0079-6700",
    eissn: "1873-1619",
  },
  {
    title: "Toxicology and Applied Pharmacology",
    issn: "0041-008X",
    eissn: "1096-0333",
  },
  {
    title: "Signs",
    issn: "0097-9740",
    eissn: "1545-6943",
  },
  {
    title: "Journal of the Association for Information Science and Technology",
    issn: "2330-1635",
    eissn: "2330-1643",
  },
  {
    title: "Child: Care, Health and Development",
    issn: "0305-1862",
    eissn: "1365-2214",
  },
  {
    title: "Journal of Consumer Research",
    issn: "0093-5301",
    eissn: "1537-5277",
  },
  {
    title: "Critical reviews in food science and nutrition",
    issn: "1040-8398",
    eissn: "1549-7852",
  },
  {
    title: "Toxicology Letters",
    issn: "0378-4274",
    eissn: "1879-3169",
  },
  {
    title: "The FEBS Journal",
    issn: "1742-464X",
    eissn: "1742-4658",
  },
  {
    title: "Environmental Health Perspectives",
    issn: "0091-6765",
    eissn: "1552-9924",
  },
  {
    title: "Psychology & Mental Health (Online Edition)",
    issn: "",
  },
  {
    title: "Veterinary Parasitology",
    issn: "0304-4017",
    eissn: "1873-2550",
  },
  {
    title: "Nature genetics",
    issn: "1061-4036",
    eissn: "1546-1718",
  },
  {
    title: "European journal of pharmaceutical sciences",
    issn: "0928-0987",
    eissn: "1879-0720",
  },
  {
    title: "Neurocomputing",
    issn: "0925-2312",
    eissn: "1872-8286",
  },
  {
    title: "Attachment & Human Development",
    issn: "1461-6734",
    eissn: "1469-2988",
  },
  {
    title: "International journal of palliative nursing",
    issn: "1357-6321",
    eissn: "2052-286X",
  },
  {
    title: "Gait & Posture",
    issn: "0966-6362",
    eissn: "1879-2219",
  },
  {
    title: "International journal of machine tools and manufacture",
    issn: "0890-6955",
    eissn: "1879-2170",
  },
  {
    title: "International Journal for Human Caring",
    issn: "1091-5710",
    eissn: "2578-2304",
  },
  {
    title:
      "Journal of Experimental Psychology: Learning, Memory, and Cognition",
    issn: "0278-7393",
    eissn: "1939-1285",
  },
  {
    title: "Marine pollution bulletin",
    issn: "0025-326X",
    eissn: "1879-3363",
  },
  {
    title: "Gender, rovné prílezitosti, vyzkum",
    issn: "1213-0028",
  },
  {
    title: "JAMA: Journal of the American Medical Association",
    issn: "0098-7484",
    eissn: "1538-3598",
  },
  {
    title: "Journal of affective disorders",
    issn: "0165-0327",
    eissn: "1573-2517",
  },
  {
    title: "The Journal of Physical Chemistry Letters",
    issn: "",
    eissn: "1948-7185",
  },
  {
    title: "Environmental Education Research",
    issn: "1350-4622",
    eissn: "1469-5871",
  },
  {
    title: "Molecular Phylogenetics and Evolution",
    issn: "1055-7903",
    eissn: "1095-9513",
  },
  {
    title: "Journal of physical activity & health",
    issn: "1543-3080",
    eissn: "1543-5474",
  },
  {
    title: "The Catholic Biblical Quarterly",
    issn: "0008-7912",
    eissn: "2163-2529",
  },
  {
    title: "Energy Research & Social Science",
    issn: "2214-6296",
    eissn: "2214-6326",
  },
  {
    title: "Thin-walled structures",
    issn: "0263-8231",
    eissn: "1879-3223",
  },
  {
    title: "Perceptual and Motor Skills",
    issn: "0031-5125",
    eissn: "1558-688X",
  },
  {
    title: "Materials chemistry and physics",
    issn: "0254-0584",
    eissn: "1879-3312",
  },
  {
    title: "Advanced Materials Interfaces",
    issn: "2196-7350",
    eissn: "2196-7350",
  },
  {
    title: "IFAC Proceedings Volumes",
    issn: "1474-6670",
  },
  {
    title: "Journal of Divorce & Remarriage",
    issn: "1050-2556",
    eissn: "1540-4811",
  },
  {
    title: "Neuron",
    issn: "0896-6273",
    eissn: "1097-4199",
  },
  {
    title: "The American Journal of Clinical Nutrition",
    issn: "0002-9165",
    eissn: "1938-3207",
  },
  {
    title: "International journal of production research",
    issn: "0020-7543",
    eissn: "1366-588X",
  },
  {
    title: "Knowledge Quest",
    issn: "1094-9046",
    eissn: "2163-5234",
  },
  {
    title: "Small Ruminant Research",
    issn: "0921-4488",
    eissn: "1879-0941",
  },
  {
    title: "Journal of Educational Technology & Society",
    issn: "1176-3647",
    eissn: "1436-4522",
  },
  {
    title: "Review of Educational Research",
    issn: "0034-6543",
    eissn: "1935-1046",
  },
  {
    title: "Journal of Geophysical Research: Atmospheres",
    issn: "2169-897X",
    eissn: "2169-8996",
  },
  {
    title: "Trends in biotechnology",
    issn: "0167-7799",
    eissn: "1879-3096",
  },
  {
    title: "Journal of biotechnology",
    issn: "0168-1656",
    eissn: "1873-4863",
  },
  {
    title: "Trends in microbiology",
    issn: "0966-842X",
    eissn: "1878-4380",
  },
  {
    title: "Journal of Cultural Heritage",
    issn: "1296-2074",
    eissn: "1778-3674",
  },
  {
    title: "Archiv des öffentlichen Rechts",
    issn: "0003-8911",
    eissn: "1868-6796",
  },
  {
    title: "Animal Reproduction Science",
    issn: "0378-4320",
    eissn: "1873-2232",
  },
  {
    title: "British Journal of Nutrition",
    issn: "0007-1145",
    eissn: "1475-2662",
  },
  {
    title:
      "Scientific Papers of the University of Pardubice. Series D, Faculty of Economics & Administration",
    issn: "1211-555X",
    eissn: "1804-8048",
  },
  {
    title: "Journal of Geophysical Research: Biogeosciences",
    issn: "2169-8953",
    eissn: "2169-8961",
  },
  {
    title: "Journal of Cereal Science",
    issn: "0733-5210",
    eissn: "1095-9963",
  },
  {
    title: "Computers and electronics in agriculture",
    issn: "0168-1699",
    eissn: "1872-7107",
  },
  {
    title: "Neuroscience Letters",
    issn: "0304-3940",
    eissn: "1872-7972",
  },
  {
    title: "Journal of Counseling and Development",
    issn: "0748-9633",
    eissn: "1556-6676",
  },
  {
    title: "Studies in Conflict & Terrorism",
    issn: "1057-610X",
    eissn: "1521-0731",
  },
  {
    title:
      "Nuclear Instruments and Methods in Physics Research Section B: Beam Interactions with Materials and Atoms",
    issn: "0168-583X",
    eissn: "1872-9584",
  },
  {
    title: "Applied soil ecology",
    issn: "0929-1393",
    eissn: "1873-0272",
  },
  {
    title: "European Journal of Lipid Science and Technology",
    issn: "1438-7697",
    eissn: "1438-9312",
  },
  {
    title: "Spectrochimica Acta Part B: Atomic Spectroscopy",
    issn: "0584-8547",
    eissn: "1873-3565",
  },
  {
    title: "Developmental Biology",
    issn: "0012-1606",
    eissn: "1095-564X",
  },
  {
    title: "Journal of International Affairs",
    issn: "0022-197X",
  },
  {
    title: "Knihovna",
    issn: "1801-3252",
  },
  {
    title: "The History Teacher",
    issn: "0018-2745",
    eissn: "1945-2292",
  },
  {
    title: "History Today",
    issn: "0018-2753",
  },
  {
    title: "Teaching and teacher education",
    issn: "0742-051X",
    eissn: "1879-2480",
  },
  {
    title: "Journal of Advanced Nursing",
    issn: "0309-2402",
    eissn: "1365-2648",
  },
  {
    title: "Biological psychiatry",
    issn: "0006-3223",
    eissn: "1873-2402",
  },
  {
    title: "Journal of proteome research",
    issn: "1535-3893",
    eissn: "1535-3907",
  },
  {
    title: "Applied geochemistry",
    issn: "0883-2927",
    eissn: "1872-9134",
  },
  {
    title: "Annual Review of Sociology",
    issn: "0360-0572",
    eissn: "1545-2115",
  },
  {
    title: "Bulletin of the Atomic Scientists",
    issn: "0096-3402",
    eissn: "1938-3282",
  },
  {
    title: "International biodeterioration & biodegradation",
    issn: "0964-8305",
    eissn: "1879-0208",
  },
  {
    title: "Applied Radiation and Isotopes",
    issn: "0969-8043",
    eissn: "1872-9800",
  },
  {
    title: "The journal of chemical thermodynamics",
    issn: "0021-9614",
    eissn: "1096-3626",
  },
  {
    title: "Annals of the New York Academy of Sciences",
    issn: "0077-8923",
    eissn: "1749-6632",
  },
  {
    title: "Computer methods in applied mechanics and engineering",
    issn: "0045-7825",
    eissn: "1879-2138",
  },
  {
    title: "Journal of Interprofessional Care",
    issn: "1356-1820",
    eissn: "1469-9567",
  },
  {
    title: "International journal of sport nutrition and exercise metabolism",
    issn: "1526-484X",
    eissn: "1543-2742",
  },
  {
    title: "Free Radical Biology and Medicine",
    issn: "0891-5849",
    eissn: "1873-4596",
  },
  {
    title: "Journal of teaching in physical education : JTPE",
    issn: "0273-5024",
    eissn: "1543-2769",
  },
  {
    title: "Journal of the American College of Cardiology",
    issn: "0735-1097",
    eissn: "1558-3597",
  },
  {
    title: "Journal of Functional Foods",
    issn: "1756-4646",
    eissn: "2214-9414",
  },
  {
    title: "CIRP Annals",
    issn: "0007-8506",
    eissn: "1726-0604",
  },
  {
    title: "Analytical and bioanalytical chemistry",
    issn: "1618-2642",
    eissn: "1618-2650",
  },
  {
    title: "The Economist,Ed.U.S. edition",
    issn: "0013-0613",
  },
  {
    title: "Research policy",
    issn: "0048-7333",
    eissn: "1873-7625",
  },
  {
    title: "Psychology and aging",
    issn: "0882-7974",
    eissn: "1939-1498",
  },
  {
    title: "Molecular Plant",
    issn: "1674-2052",
    eissn: "1752-9867",
  },
  {
    title: "Theory Into Practice",
    issn: "0040-5841",
    eissn: "1543-0421",
  },
  {
    title: "BMC Health Services Research",
    issn: "",
    eissn: "1472-6963",
  },
  {
    title: "Journal of Interpersonal Violence",
    issn: "0886-2605",
    eissn: "1552-6518",
  },
  {
    title: "The Canadian Journal of Chemical Engineering",
    issn: "0008-4034",
    eissn: "1939-019X",
  },
  {
    title: "Journal of Organometallic Chemistry",
    issn: "0022-328X",
    eissn: "1872-8561",
  },
  {
    title: "Journal of electroanalytical chemistry",
    issn: "1572-6657",
    eissn: "1873-2569",
  },
  {
    title: "Journal of sound and vibration",
    issn: "0022-460X",
    eissn: "1095-8568",
  },
  {
    title: "College Literature",
    issn: "0093-3139",
    eissn: "1542-4286",
  },
  {
    title: "Polymer Engineering & Science",
    issn: "0032-3888",
    eissn: "1548-2634",
  },
  {
    title: "Inorganica chimica acta",
    issn: "0020-1693",
    eissn: "1873-3255",
  },
  {
    title: "Materials & Design (1980-2015)",
    issn: "0261-3069",
    eissn: "1873-4197",
  },
  {
    title: "Cultural diversity and ethnic minority psychology",
    issn: "1099-9809",
    eissn: "1939-0106",
  },
  {
    title: "Journal of Clinical Nursing",
    issn: "0962-1067",
    eissn: "1365-2702",
  },
  {
    title: "Nature Protocols",
    issn: "1754-2189",
    eissn: "1750-2799",
  },
  {
    title: "Population and Development Review",
    issn: "0098-7921",
    eissn: "1728-4457",
  },
  {
    title: "International journal of production economics",
    issn: "0925-5273",
    eissn: "1873-7579",
  },
  {
    title: "Materials Today: Proceedings",
    issn: "2214-7853",
  },
  {
    title: "International dairy journal",
    issn: "0958-6946",
    eissn: "1879-0143",
  },
  {
    title: "Future Generation Computer Systems",
    issn: "0167-739X",
    eissn: "1872-7115",
  },
  {
    title: "Teaching Exceptional Children",
    issn: "0040-0599",
    eissn: "2163-5684",
  },
  {
    title: "Iluminace",
    issn: "0862-397X",
  },
  {
    title: "Supportive Care in Cancer",
    issn: "0941-4355",
    eissn: "1433-7339",
  },
  {
    title: "Comprehensive Reviews in Food Science and Food Safety",
    issn: "1541-4337",
    eissn: "1541-4337",
  },
  {
    title: "Progress in Organic Coatings",
    issn: "0300-9440",
    eissn: "1873-331X",
  },
  {
    title: "Gene",
    issn: "0378-1119",
    eissn: "1879-0038",
  },
  {
    title: "World Literature Today",
    issn: "0196-3570",
    eissn: "1945-8134",
  },
  {
    title: "Agricultural water management",
    issn: "0378-3774",
    eissn: "1873-2283",
  },
  {
    title: "World development",
    issn: "0305-750X",
    eissn: "1873-5991",
  },
  {
    title: "Journal of Pharmaceutical Sciences",
    issn: "0022-3549",
    eissn: "1520-6017",
  },
  {
    title: "Journal of molecular liquids",
    issn: "0167-7322",
    eissn: "1873-3166",
  },
  {
    title: "British Journal of Guidance & Counselling",
    issn: "0306-9885",
    eissn: "1469-3534",
  },
  {
    title: "Trends in cognitive sciences",
    issn: "1364-6613",
    eissn: "1879-307X",
  },
  {
    title: "Veterinary Microbiology",
    issn: "0378-1135",
    eissn: "1873-2542",
  },
  {
    title: "Annals of the Association of American Geographers",
    issn: "0004-5608",
    eissn: "1467-8306",
  },
  {
    title: "International journal of hygiene and environmental health",
    issn: "1438-4639",
    eissn: "1618-131X",
  },
  {
    title: "Foreign Policy",
    issn: "0015-7228",
    eissn: "1945-2276",
  },
  {
    title: "Journal of Organizational Behavior",
    issn: "0894-3796",
    eissn: "1099-1379",
  },
  {
    title: "Psychiatry Research",
    issn: "0165-1781",
    eissn: "1872-7123",
  },
  {
    title: "The Academy of Management Review",
    issn: "0363-7425",
    eissn: "1930-3807",
  },
  {
    title: "Brain Research",
    issn: "0006-8993",
    eissn: "1872-6240",
  },
  {
    title: "Journal of Broadcasting & Electronic Media",
    issn: "0883-8151",
    eissn: "1550-6878",
  },
  {
    title: "Livestock science",
    issn: "1871-1413",
    eissn: "1878-0490",
  },
  {
    title: "Nature Reviews Immunology",
    issn: "1474-1733",
    eissn: "1474-1741",
  },
  {
    title: "Journal of Environmental Sciences",
    issn: "1001-0742",
    eissn: "1878-7320",
  },
  {
    title: "Oikos",
    issn: "0030-1299",
    eissn: "1600-0706",
  },
  {
    title: "Journal of Medical Internet Research",
    issn: "1439-4456",
    eissn: "1438-8871",
  },
  {
    title: "Structural Control and Health Monitoring",
    issn: "1545-2255",
    eissn: "1545-2263",
  },
  {
    title: "Nature Reviews Drug Discovery",
    issn: "1474-1776",
    eissn: "1474-1784",
  },
  {
    title: "International Journal of Greenhouse Gas Control",
    issn: "1750-5836",
    eissn: "1878-0148",
  },
  {
    title: "The Nation",
    issn: "0027-8378",
    eissn: "2472-5897",
  },
  {
    title: "Business Ethics Quarterly",
    issn: "1052-150X",
    eissn: "2153-3326",
  },
  {
    title: "Accident Analysis & Prevention",
    issn: "0001-4575",
    eissn: "1879-2057",
  },
  {
    title: "Salem Press Encyclopedia of Health",
    issn: "",
  },
  {
    title: "Hispania",
    issn: "0018-2133",
    eissn: "2153-6414",
  },
  {
    title: "Ceskoslovenska Pediatrie",
    issn: "0069-2328",
  },
  {
    title: "Journal of Catalysis",
    issn: "0021-9517",
    eissn: "1090-2694",
  },
  {
    title: "Journal of Peace Research",
    issn: "0022-3433",
    eissn: "1460-3578",
  },
  {
    title: "Macromolecular Chemistry and Physics",
    issn: "1022-1352",
    eissn: "1521-3935",
  },
  {
    title: "Psychologie Pro Praxi",
    issn: "1803-8670",
    eissn: "2336-6486",
  },
  {
    title: "Developmental Cell",
    issn: "1534-5807",
    eissn: "1878-1551",
  },
  {
    title: "Journal of Sports Science and Medicine",
    issn: "1303-2968",
    eissn: "1303-2968",
  },
  {
    title: "Trends in biochemical sciences",
    issn: "0968-0004",
    eissn: "1362-4326",
  },
  {
    title: "Knihovny Soucasnosti",
    issn: "1805-6962",
    eissn: "1805-6970",
  },
  {
    title: "Journal of Human Kinetics",
    issn: "1640-5544",
    eissn: "1899-7562",
  },
  {
    title: "Listy filologické / Folia philologica",
    issn: "0024-4457",
    eissn: "2570-9410",
  },
  {
    title: "Plant Science",
    issn: "0168-9452",
    eissn: "1873-2259",
  },
  {
    title: "Toxicology",
    issn: "0300-483X",
    eissn: "1879-3185",
  },
  {
    title: "Applied clay science",
    issn: "0169-1317",
    eissn: "1872-9053",
  },
  {
    title: "Journal of the Fantastic in the Arts",
    issn: "0897-0521",
  },
  {
    title: "Religious Studies",
    issn: "0034-4125",
    eissn: "1469-901X",
  },
  {
    title: "Journal of the Mechanical Behavior of Biomedical Materials",
    issn: "1751-6161",
    eissn: "1878-0180",
  },
  {
    title: "Agricultural and forest meteorology",
    issn: "0168-1923",
    eissn: "1873-2240",
  },
  {
    title: "The Journal of American History",
    issn: "0021-8723",
    eissn: "1936-0967",
  },
  {
    title: "Radiation Physics and Chemistry",
    issn: "0969-806X",
    eissn: "1879-0895",
  },
  {
    title: "Journal of Environmental Studies and Sciences",
    issn: "2190-6483",
    eissn: "2190-6491",
  },
  {
    title: "Food quality and preference",
    issn: "0950-3293",
    eissn: "1873-6343",
  },
  {
    title: "Studies in English Literature, 1500-1900",
    issn: "0039-3657",
    eissn: "1522-9270",
  },
  {
    title: "Biosystems engineering",
    issn: "1537-5110",
    eissn: "1537-5129",
  },
  {
    title: "Journal of magnetism and magnetic materials",
    issn: "0304-8853",
    eissn: "1873-4766",
  },
  {
    title: "Psychological Inquiry",
    issn: "1047-840X",
    eissn: "1532-7965",
  },
  {
    title: "Aging & Mental Health",
    issn: "1360-7863",
    eissn: "1364-6915",
  },
  {
    title: "Health Communication",
    issn: "1041-0236",
    eissn: "1532-7027",
  },
  {
    title: "Social Science & Medicine",
    issn: "0277-9536",
    eissn: "1873-5347",
  },
  {
    title: "British journal of educational technology",
    issn: "0007-1013",
    eissn: "1467-8535",
  },
  {
    title: "International Journal of Environmental Research and Public Health",
    issn: "1661-7827",
    eissn: "1660-4601",
  },
  {
    title: "Journal of luminescence",
    issn: "0022-2313",
    eissn: "1872-7883",
  },
  {
    title: "International Journal of Sport Communication",
    issn: "1936-3915",
    eissn: "1936-3907",
  },
  {
    title: "Journal of Health and Social Behavior",
    issn: "0022-1465",
    eissn: "2150-6000",
  },
  {
    title: "Psychopharmacology",
    issn: "0033-3158",
    eissn: "1432-2072",
  },
  {
    title: "Computers & security",
    issn: "0167-4048",
    eissn: "1872-6208",
  },
  {
    title: "Journal of crystal growth",
    issn: "0022-0248",
    eissn: "1873-5002",
  },
  {
    title: "Journal of Equine Veterinary Science",
    issn: "0737-0806",
    eissn: "1542-7412",
  },
  {
    title: "The Burlington Magazine",
    issn: "0007-6287",
    eissn: "2044-9925",
  },
  {
    title: "Vnitrni Lekarstvi / Internal Medicine",
    issn: "0042-773X",
    eissn: "1801-7592",
  },
  {
    title: "BioScience",
    issn: "0006-3568",
    eissn: "1525-3244",
  },
  {
    title: "Maternal and Child Health Journal",
    issn: "1092-7875",
    eissn: "1573-6628",
  },
  {
    title: "Nano Energy",
    issn: "2211-2855",
    eissn: "2211-3282",
  },
  {
    title: "Journal of Speech, Language, and Hearing Research",
    issn: "1092-4388",
    eissn: "1558-9102",
  },
  {
    title: "Schizophrenia Research",
    issn: "0920-9964",
    eissn: "1573-2509",
  },
  {
    title: "Current opinion in plant biology",
    issn: "1369-5266",
    eissn: "1879-0356",
  },
  {
    title: "Optical Materials",
    issn: "0925-3467",
    eissn: "1873-1252",
  },
  {
    title: "Computers & chemical engineering",
    issn: "0098-1354",
    eissn: "1873-4375",
  },
  {
    title: "Christianity and Literature",
    issn: "0148-3331",
    eissn: "2056-5666",
  },
  {
    title: "Archives of Sexual Behavior",
    issn: "0004-0002",
    eissn: "1573-2800",
  },
  {
    title: "Journal of constructional steel research",
    issn: "0143-974X",
    eissn: "1873-5983",
  },
  {
    title: "Palaeogeography, Palaeoclimatology, Palaeoecology",
    issn: "0031-0182",
    eissn: "1872-616X",
  },
  {
    title: "ProtoView",
    issn: "2372-3424",
  },
  {
    title: "Modern Fiction Studies",
    issn: "0026-7724",
    eissn: "1080-658X",
  },
  {
    title: "West European Politics",
    issn: "0140-2382",
    eissn: "1743-9655",
  },
  {
    title: "Nature Cell Biology",
    issn: "1465-7392",
    eissn: "1476-4679",
  },
  {
    title: "Methods",
    issn: "1046-2023",
    eissn: "1095-9130",
  },
  {
    title: "Synthetic Communications",
    issn: "0039-7911",
    eissn: "1532-2432",
  },
  {
    title: "Biofuels, Bioproducts and Biorefining",
    issn: "1932-104X",
    eissn: "1932-1031",
  },
  {
    title: "Quaternary Science Reviews",
    issn: "0277-3791",
    eissn: "1873-457X",
  },
  {
    title: "Virology",
    issn: "0042-6822",
    eissn: "1096-0341",
  },
  {
    title: "Nature Reviews Genetics",
    issn: "1471-0056",
    eissn: "1471-0064",
  },
  {
    title: "Biochimica et Biophysica Acta (BBA) - Molecular Cell Research",
    issn: "0167-4889",
    eissn: "1879-2596",
  },
  {
    title: "FEMS Microbiology Letters",
    issn: "0378-1097",
    eissn: "1574-6968",
  },
  {
    title: "Current opinion in structural biology",
    issn: "0959-440X",
    eissn: "1879-033X",
  },
  {
    title: "Archaeometry",
    issn: "0003-813X",
    eissn: "1475-4754",
  },
  {
    title: "ChemBioChem",
    issn: "1439-4227",
    eissn: "1439-7633",
  },
  {
    title: "Vaccine",
    issn: "0264-410X",
    eissn: "1873-2518",
  },
  {
    title: "Chemical Geology",
    issn: "0009-2541",
    eissn: "1872-6836",
  },
  {
    title: "College English",
    issn: "0010-0994",
    eissn: "2161-8178",
  },
  {
    title: "Advances in colloid and interface science",
    issn: "0001-8686",
    eissn: "1873-3727",
  },
  {
    title: "Molecular pharmaceutics",
    issn: "1543-8384",
    eissn: "1543-8392",
  },
  {
    title: "International Journal of Fashion Studies",
    issn: "2051-7106",
  },
  {
    title: "Plant Physiology and Biochemistry",
    issn: "0981-9428",
    eissn: "1873-2690",
  },
  {
    title: "Progress in Materials Science",
    issn: "0079-6425",
    eissn: "1873-2208",
  },
  {
    title:
      "Preventing School Failure: Alternative Education for Children and Youth",
    issn: "1045-988X",
    eissn: "1940-4387",
  },
  {
    title: "Sex Education:Sexuality, Society and Learning",
    issn: "1468-1811",
    eissn: "1472-0825",
  },
  {
    title: "Experimental neurology",
    issn: "0014-4886",
    eissn: "1090-2430",
  },
  {
    title: "MedSurg Nursing",
    issn: "1092-0811",
  },
  {
    title: "Rapid Communications in Mass Spectrometry",
    issn: "0951-4198",
    eissn: "1097-0231",
  },
  {
    title: "Journal of Intellectual Disability Research",
    issn: "0964-2633",
    eissn: "1365-2788",
  },
  {
    title: "Entrepreneurship Theory and Practice",
    issn: "1042-2587",
    eissn: "1540-6520",
  },
  {
    title: "Solar Energy Materials and Solar Cells",
    issn: "0927-0248",
    eissn: "1879-3398",
  },
  {
    title: "Sensors and Actuators A: Physical",
    issn: "0924-4247",
    eissn: "1873-3069",
  },
  {
    title: "Computational materials science",
    issn: "0927-0256",
    eissn: "1879-0801",
  },
  {
    title: "Macromolecular Rapid Communications",
    issn: "1022-1336",
    eissn: "1521-3927",
  },
  {
    title: "Cancer Letters",
    issn: "0304-3835",
    eissn: "1872-7980",
  },
  {
    title: "Journal of ethnic and migration studies",
    issn: "1369-183X",
    eissn: "1469-9451",
  },
  {
    title: "Harvard Law Review",
    issn: "0017-811X",
    eissn: "2161-976X",
  },
  {
    title: "The Journal of Theological Studies",
    issn: "0022-5185",
    eissn: "1477-4607",
  },
  {
    title: "International Journal of Psychology",
    issn: "0020-7594",
    eissn: "1464-066X",
  },
  {
    title: "Technological forecasting and social change",
    issn: "0040-1625",
    eissn: "1873-5509",
  },
  {
    title: "The American Journal of Drug and Alcohol Abuse",
    issn: "0095-2990",
    eissn: "1097-9891",
  },
  {
    title: "Journal of General Internal Medicine",
    issn: "0884-8734",
    eissn: "1525-1497",
  },
  {
    title: "Newswires",
    issn: "",
  },
  {
    title: "Automatica",
    issn: "0005-1098",
  },
  {
    title: "Theoretical Computer Science",
    issn: "0304-3975",
    eissn: "1879-2294",
  },
  {
    title: "Vacuum",
    issn: "0042-207X",
    eissn: "1879-2715",
  },
  {
    title: "European Journal of Sport Science",
    issn: "1746-1391",
    eissn: "1536-7290",
  },
  {
    title: "European Planning Studies",
    issn: "0965-4313",
    eissn: "1469-5944",
  },
  {
    title: "Journal of economic behavior & organization",
    issn: "0167-2681",
    eissn: "1879-1751",
  },
  {
    title: "Revista de Enfermagem UFPE On Line",
    issn: "1981-8963",
  },
  {
    title: "Harper's Magazine",
    issn: "0017-789X",
  },
  {
    title: "Total quality management & business excellence",
    issn: "1478-3363",
    eissn: "1478-3371",
  },
  {
    title: "Conference Papers -- American Sociological Association",
    issn: "",
  },
  {
    title: "Journal of Modern Literature",
    issn: "0022-281X",
    eissn: "1529-1464",
  },
  {
    title: "Journal of Molecular Spectroscopy",
    issn: "0022-2852",
    eissn: "1096-083X",
  },
  {
    title: "Academy of Management Review",
    issn: "0363-7425",
    eissn: "1930-3807",
  },
  {
    title: "Studies in higher education",
    issn: "0307-5079",
    eissn: "1470-174X",
  },
  {
    title: "Applied Materials Today",
    issn: "2352-9407",
  },
  {
    title: "ACS Sustainable Chemistry & Engineering",
    issn: "",
    eissn: "2168-0485",
  },
  {
    title: "Process biochemistry",
    issn: "1359-5113",
    eissn: "1873-3298",
  },
  {
    title: "British Journal of Political Science",
    issn: "0007-1234",
    eissn: "1469-2112",
  },
  {
    title: "Australian Dental Journal",
    issn: "0045-0421",
    eissn: "1834-7819",
  },
  {
    title: "British Journal of Educational Psychology",
    issn: "0007-0998",
    eissn: "2044-8279",
  },
  {
    title: "Forest policy and economics",
    issn: "1389-9341",
    eissn: "1872-7050",
  },
  {
    title: "Journal of Rural Studies",
    issn: "0743-0167",
    eissn: "1873-1392",
  },
  {
    title: "Additive Manufacturing",
    issn: "2214-8604",
    eissn: "2214-7810",
  },
  {
    title: "Demography",
    issn: "0070-3370",
    eissn: "1533-7790",
  },
  {
    title: "The Future of Children",
    issn: "1054-8289",
    eissn: "1550-1558",
  },
  {
    title: "Adapted Physical Activity Quarterly: APAQ",
    issn: "0736-5829",
    eissn: "1543-2777",
  },
  {
    title: "Obrana a Strategie/Defence & Strategy",
    issn: "1214-6463",
    eissn: "1802-7199",
  },
  {
    title: "Drug discovery today",
    issn: "1359-6446",
    eissn: "1878-5832",
  },
  {
    title: "Food Additives & Contaminants: Part A",
    issn: "1944-0049",
    eissn: "1944-0057",
  },
  {
    title: "Organization Science",
    issn: "1047-7039",
    eissn: "1526-5455",
  },
  {
    title: "The American Journal of International Law",
    issn: "0002-9300",
    eissn: "2161-7953",
  },
  {
    title: "Cognition and Emotion",
    issn: "0269-9931",
    eissn: "1464-0600",
  },
  {
    title: "Journal of applied biomechanics",
    issn: "1065-8483",
    eissn: "1543-2688",
  },
  {
    title: "Political Science Quarterly",
    issn: "0032-3195",
    eissn: "1538-165X",
  },
  {
    title: "Business Horizons",
    issn: "0007-6813",
    eissn: "1873-6068",
  },
  {
    title: "Family Process",
    issn: "0014-7370",
    eissn: "1545-5300",
  },
  {
    title: "Journal of the Institute of Brewing",
    issn: "0046-9750",
    eissn: "2050-0416",
  },
  {
    title: "Journal of mathematical analysis and applications",
    issn: "0022-247X",
    eissn: "1096-0813",
  },
  {
    title: "The Academy of Management Journal",
    issn: "0001-4273",
    eissn: "1948-0989",
  },
  {
    title: "International journal of refrigeration",
    issn: "0140-7007",
    eissn: "1879-2081",
  },
  {
    title: "Journal of bioscience and bioengineering",
    issn: "1389-1723",
    eissn: "1347-4421",
  },
  {
    title: "Journal of Ecology",
    issn: "0022-0477",
    eissn: "1365-2745",
  },
  {
    title: "International journal of information management",
    issn: "0268-4012",
    eissn: "1873-4707",
  },
  {
    title: "Psychological services",
    issn: "1541-1559",
    eissn: "1939-148X",
  },
  {
    title: "Daedalus",
    issn: "0011-5266",
    eissn: "1548-6192",
  },
  {
    title: "Reading Research Quarterly",
    issn: "0034-0553",
    eissn: "1936-2722",
  },
  {
    title: "Journal of Applied Behavior Analysis",
    issn: "0021-8855",
    eissn: "1938-3703",
  },
  {
    title: "Electrochemistry communications",
    issn: "1388-2481",
    eissn: "1873-1902",
  },
  {
    title: "Journal of Industrial and Engineering Chemistry",
    issn: "1226-086X",
    eissn: "2234-5957",
  },
  {
    title: "Pattern Recognition",
    issn: "0031-3203",
  },
  {
    title: "Career Development Quarterly",
    issn: "0889-4019",
    eissn: "2161-0045",
  },
  {
    title: "Ecological modelling",
    issn: "0304-3800",
    eissn: "1872-7026",
  },
  {
    title: "Journal of environmental radioactivity",
    issn: "0265-931X",
    eissn: "1879-1700",
  },
  {
    title: "Ceská a Slovenská Psychiatrie",
    issn: "1212-0383",
  },
  {
    title: "The Harvard Theological Review",
    issn: "0017-8160",
    eissn: "1475-4517",
  },
  {
    title: "European Early Childhood Education Research Journal",
    issn: "1350-293X",
    eissn: "1752-1807",
  },
  {
    title:
      "Health Expectations: An International Journal of Public Participation in Health Care and Health Policy",
    issn: "1369-6513",
    eissn: "1369-7625",
  },
  {
    title: "Psychoneuroendocrinology",
    issn: "0306-4530",
    eissn: "1873-3360",
  },
  {
    title: "Animal Feed Science and Technology",
    issn: "0377-8401",
    eissn: "1873-2216",
  },
  {
    title: "The Phi Delta Kappan",
    issn: "0031-7217",
    eissn: "1940-6487",
  },
  {
    title: "Education",
    issn: "0013-1172",
  },
  {
    title: "Nature Climate Change",
    issn: "1758-678X",
    eissn: "1758-6798",
  },
  {
    title: "Journal of Experimental Botany",
    issn: "0022-0957",
    eissn: "1460-2431",
  },
  {
    title: "Journal of Applied Research in Intellectual Disabilities",
    issn: "1360-2322",
    eissn: "1468-3148",
  },
  {
    title: "British Journal of Psychology",
    issn: "0007-1269",
    eissn: "2044-8295",
  },
  {
    title: "Risk Analysis",
    issn: "0272-4332",
    eissn: "1539-6924",
  },
  {
    title: "Transportation Research Part A: Policy and Practice",
    issn: "0965-8564",
    eissn: "1879-2375",
  },
  {
    title: "Indoor Air",
    issn: "0905-6947",
    eissn: "1600-0668",
  },
  {
    title: "Current Opinion in Cell Biology",
    issn: "0955-0674",
    eissn: "1879-0410",
  },
  {
    title: "British Educational Research Journal",
    issn: "0141-1926",
    eissn: "1469-3518",
  },
  {
    title: "Advanced Electronic Materials",
    issn: "2199-160X",
    eissn: "2199-160X",
  },
  {
    title: "Adolescence",
    issn: "0001-8449",
  },
  {
    title: "Cities",
    issn: "0264-2751",
    eissn: "1873-6084",
  },
  {
    title: "Computers & operations research",
    issn: "0305-0548",
    eissn: "1873-765X",
  },
  {
    title: "International journal of cardiology",
    issn: "0167-5273",
    eissn: "1874-1754",
  },
  {
    title: "Psychotherapy Research",
    issn: "1050-3307",
    eissn: "1468-4381",
  },
  {
    title: "Biochemical pharmacology",
    issn: "0006-2952",
    eissn: "1873-2968",
  },
  {
    title: "Steroids",
    issn: "0039-128X",
    eissn: "1878-5867",
  },
  {
    title: "Journal of Career Assessment",
    issn: "1069-0727",
    eissn: "1552-4590",
  },
  {
    title: "Journal Of Library Administration",
    issn: "0193-0826",
    eissn: "1540-3564",
  },
  {
    title: "Medical Education",
    issn: "0308-0110",
    eissn: "1365-2923",
  },
  {
    title: "Child Welfare",
    issn: "0009-4021",
    eissn: "2833-5619",
  },
  {
    title: "Survival",
    issn: "0039-6338",
    eissn: "1468-2699",
  },
  {
    title: "Journal of Advertising",
    issn: "0091-3367",
    eissn: "1557-7805",
  },
  {
    title: "BioMed Research International",
    issn: "2314-6133",
    eissn: "2314-6141",
  },
  {
    title:
      "Journal of Biomedical Materials Research Part B: Applied Biomaterials",
    issn: "1552-4973",
    eissn: "1552-4981",
  },
  {
    title: "Journal of biomechanics",
    issn: "0021-9290",
    eissn: "1873-2380",
  },
  {
    title: "Physica A: Statistical Mechanics and its Applications",
    issn: "0378-4371",
  },
  {
    title: "Medical Image Analysis",
    issn: "1361-8415",
    eissn: "1361-8423",
  },
  {
    title: "California English",
    issn: "0279-1161",
  },
  {
    title: "Information & management",
    issn: "0378-7206",
    eissn: "1872-7530",
  },
  {
    title: "Personal relationships",
    issn: "1350-4126",
    eissn: "1475-6811",
  },
  {
    title: "Perspectives on Psychological Science",
    issn: "1745-6916",
    eissn: "1745-6924",
  },
  {
    title: "Training and Education in Professional Psychology",
    issn: "1931-3918",
    eissn: "1931-3926",
  },
  {
    title: "Quality - Access to Success",
    issn: "1582-2559",
  },
  {
    title: "Journal of Black Studies",
    issn: "0021-9347",
    eissn: "1552-4566",
  },
  {
    title: "Journal of Family Violence",
    issn: "0885-7482",
    eissn: "1573-2851",
  },
  {
    title: "Nature Reviews Molecular Cell Biology",
    issn: "1471-0072",
    eissn: "1471-0080",
  },
  {
    title: "Structure",
    issn: "0969-2126",
    eissn: "1878-4186",
  },
  {
    title: "Dalton transactions",
    issn: "1477-9226",
    eissn: "1477-9234",
  },
  {
    title: "The New York Times,Ed.National Edition",
    issn: "0362-4331",
  },
  {
    title: "Child & Family Social Work",
    issn: "1356-7500",
    eissn: "1365-2206",
  },
  {
    title: "The Effect of State Marijuana Legalizations:",
    issn: "",
  },
  {
    title: "Clinical Microbiology and Infection",
    issn: "1198-743X",
    eissn: "1469-0691",
  },
  {
    title: "Clinical Neurophysiology",
    issn: "1388-2457",
    eissn: "1872-8952",
  },
  {
    title: "The Sixteenth Century Journal",
    issn: "0361-0160",
    eissn: "2326-0726",
  },
  {
    title: "International journal of mechanical sciences",
    issn: "0020-7403",
    eissn: "1879-2162",
  },
  {
    title: "Advanced Healthcare Materials",
    issn: "2192-2640",
    eissn: "2192-2659",
  },
  {
    title: "American Journal of Health Promotion",
    issn: "0890-1171",
    eissn: "2168-6602",
  },
  {
    title: "Journal of the American Academy of Religion",
    issn: "0002-7189",
    eissn: "1477-4585",
  },
  {
    title: "Reference & User Services Quarterly",
    issn: "1094-9054",
    eissn: "2163-5242",
  },
  {
    title: "The Journal of Supercritical Fluids",
    issn: "0896-8446",
    eissn: "1872-8162",
  },
  {
    title: "Polymer Testing",
    issn: "0142-9418",
    eissn: "1873-2348",
  },
  {
    title: "Environmental and experimental botany",
    issn: "0098-8472",
    eissn: "1873-7307",
  },
  {
    title: "Physical Chemistry Chemical Physics",
    issn: "1463-9076",
    eissn: "1463-9084",
  },
  {
    title: "Clinica chimica acta",
    issn: "0009-8981",
    eissn: "1873-3492",
  },
  {
    title: "Health & Social Care in the Community",
    issn: "0966-0410",
    eissn: "1365-2524",
  },
  {
    title: "Journal of Natural Gas Science and Engineering",
    issn: "1875-5100",
    eissn: "2212-3865",
  },
  {
    title: "Information, Communication & Society",
    issn: "1369-118X",
    eissn: "1468-4462",
  },
  {
    title: "Artforum International",
    issn: "1086-7058",
  },
  {
    title: "Journal of Nursing Management",
    issn: "0966-0429",
    eissn: "1365-2834",
  },
  {
    title: "Journal of Clinical Sport Psychology",
    issn: "1932-9261",
    eissn: "1932-927X",
  },
  {
    title: "Journal of structural biology",
    issn: "1047-8477",
    eissn: "1095-8657",
  },
  {
    title: "PLoS ONE",
    issn: "1932-6203",
  },
  {
    title: "American Quarterly",
    issn: "0003-0678",
    eissn: "1080-6490",
  },
  {
    title: "Journal of Adolescence",
    issn: "0140-1971",
    eissn: "1095-9254",
  },
  {
    title: "Sports Biomechanics",
    issn: "1476-3141",
    eissn: "1752-6116",
  },
  {
    title: "Journal of Allergy and Clinical Immunology",
    issn: "0091-6749",
    eissn: "1097-6825",
  },
  {
    title: "Trends in Genetics",
    issn: "0168-9525",
    eissn: "1362-4555",
  },
  {
    title: "Cell Stem Cell",
    issn: "1934-5909",
    eissn: "1875-9777",
  },
  {
    title: "Management Science",
    issn: "0025-1909",
    eissn: "1526-5501",
  },
  {
    title: "Discrete applied mathematics",
    issn: "0166-218X",
    eissn: "1872-6771",
  },
  {
    title: "American Libraries",
    issn: "0002-9769",
    eissn: "2163-5129",
  },
  {
    title: "Journal of Education for Library and Information Science",
    issn: "0748-5786",
    eissn: "2328-2967",
  },
  {
    title: "Journal of Abnormal Child Psychology",
    issn: "0091-0627",
    eissn: "1573-2835",
  },
  {
    title: "Psychology of Sexual Orientation and Gender Diversity",
    issn: "2329-0382",
    eissn: "2329-0390",
  },
  {
    title: "Plant, Cell & Environment",
    issn: "0140-7791",
    eissn: "1365-3040",
  },
  {
    title: "Polymer International",
    issn: "0959-8103",
    eissn: "1097-0126",
  },
  {
    title: "Journal of the History of Ideas",
    issn: "0022-5037",
    eissn: "1086-3222",
  },
  {
    title: "Journal of Applied Social Psychology",
    issn: "0021-9029",
    eissn: "1559-1816",
  },
  {
    title: "Journal of Curriculum Studies",
    issn: "0022-0272",
    eissn: "1366-5839",
  },
  {
    title: "Social development",
    issn: "0961-205X",
    eissn: "1467-9507",
  },
  {
    title: "Chemical Engineering and Processing - Process Intensification",
    issn: "0255-2701",
  },
  {
    title: "Shakespeare Quarterly",
    issn: "0037-3222",
    eissn: "1538-3555",
  },
  {
    title: "The William and Mary Quarterly",
    issn: "0043-5597",
    eissn: "1933-7698",
  },
  {
    title: "Innovative Food Science & Emerging Technologies",
    issn: "1466-8564",
    eissn: "1878-5522",
  },
  {
    title: "Journal of health communication",
    issn: "1081-0730",
    eissn: "1087-0415",
  },
  {
    title: "Educational Researcher",
    issn: "0013-189X",
    eissn: "1935-102X",
  },
  {
    title: "Physiology & Behavior",
    issn: "0031-9384",
    eissn: "1873-507X",
  },
  {
    title: "Review of general psychology",
    issn: "1089-2680",
    eissn: "1939-1552",
  },
  {
    title: "Ethnic and Racial Studies",
    issn: "0141-9870",
    eissn: "1466-4356",
  },
  {
    title: "Problems of post-communism",
    issn: "1075-8216",
    eissn: "1557-783X",
  },
  {
    title: "Journal of geochemical exploration",
    issn: "0375-6742",
    eissn: "1879-1689",
  },
  {
    title: "Biochemical engineering journal",
    issn: "1369-703X",
    eissn: "1873-295X",
  },
  {
    title: "Diamond and Related Materials",
    issn: "0925-9635",
    eissn: "1879-0062",
  },
  {
    title: "College Composition and Communication",
    issn: "0010-096X",
    eissn: "1939-9006",
  },
  {
    title: "Journal of neuroscience methods",
    issn: "0165-0270",
    eissn: "1872-678X",
  },
  {
    title: "Applied geography",
    issn: "0143-6228",
    eissn: "1873-7730",
  },
  {
    title: "The International Journal of Human Resource Management",
    issn: "0958-5192",
    eissn: "1466-4399",
  },
  {
    title: "Salem Press Encyclopedia of Science",
    issn: "",
  },
  {
    title: "Journal of Industrial Textiles",
    issn: "1528-0837",
    eissn: "1530-8057",
  },
  {
    title: "Political Studies",
    issn: "0032-3217",
    eissn: "1467-9248",
  },
  {
    title: "Medical Physics",
    issn: "0094-2405",
    eissn: "2473-4209",
  },
  {
    title: "Aquaculture",
    issn: "0044-8486",
    eissn: "1873-5622",
  },
  {
    title: "Psychology & marketing",
    issn: "0742-6046",
    eissn: "1520-6793",
  },
  {
    title: "Personnel psychology",
    issn: "0031-5826",
    eissn: "1744-6570",
  },
  {
    title: "Biomacromolecules",
    issn: "1525-7797",
    eissn: "1526-4602",
  },
  {
    title: "Computers & Mathematics with Applications",
    issn: "0898-1221",
    eissn: "1873-7668",
  },
  {
    title: "Kirkus Reviews",
    issn: "1948-7428",
  },
  {
    title: "International Journal of Quantum Chemistry",
    issn: "0020-7608",
    eissn: "1097-461X",
  },
  {
    title: "Journal of Photochemistry and Photobiology A: Chemistry",
    issn: "1010-6030",
    eissn: "1873-2666",
  },
  {
    title: "The Journal of Steroid Biochemistry and Molecular Biology",
    issn: "0960-0760",
    eissn: "1879-1220",
  },
  {
    title: "The Journal of Aesthetics and Art Criticism",
    issn: "0021-8529",
    eissn: "1540-6245",
  },
  {
    title: "Assessment & Evaluation in Higher Education",
    issn: "0260-2938",
    eissn: "1469-297X",
  },
  {
    title: "Environmental science & policy",
    issn: "1462-9011",
    eissn: "1873-6416",
  },
  {
    title: "Anesteziologie a Intenzivni Medicina",
    issn: "1214-2158",
  },
  {
    title: "Biochimica et Biophysica Acta (BBA) - General Subjects",
    issn: "0304-4165",
    eissn: "1872-8006",
  },
  {
    title: "International journal of antimicrobial agents",
    issn: "0924-8579",
    eissn: "1872-7913",
  },
  {
    title: "Electroanalysis",
    issn: "1040-0397",
    eissn: "1521-4109",
  },
  {
    title: "European journal of pharmacology",
    issn: "0014-2999",
    eissn: "1879-0712",
  },
  {
    title: "Intermetallics",
    issn: "0966-9795",
    eissn: "1879-0216",
  },
  {
    title: "Casopis Lekaru Ceskych",
    issn: "0008-7335",
  },
  {
    title: "Communications of the ACM",
    issn: "0001-0782",
    eissn: "1557-7317",
  },
  {
    title: "School Psychology",
    issn: "2578-4218",
    eissn: "2578-4226",
  },
  {
    title: "Reference & Research Book News",
    issn: "0887-3763",
  },
  {
    title: "Real Estate Weekly",
    issn: "1096-7214",
  },
  {
    title: "Toxicology in Vitro",
    issn: "0887-2333",
    eissn: "1879-3177",
  },
  {
    title: "Annals of Botany",
    issn: "0305-7364",
    eissn: "1095-8290",
  },
  {
    title: "Public Choice",
    issn: "0048-5829",
    eissn: "1573-7101",
  },
  {
    title: "Social Psychology Quarterly",
    issn: "0190-2725",
    eissn: "1939-8999",
  },
  {
    title: "The Journal of Economic Perspectives",
    issn: "0895-3309",
    eissn: "1944-7965",
  },
  {
    title: "International Journal of Remote Sensing",
    issn: "0143-1161",
    eissn: "1366-5901",
  },
  {
    title: "Sustainable Cities and Society",
    issn: "2210-6707",
    eissn: "2210-6715",
  },
  {
    title: "International journal of stress management",
    issn: "1072-5245",
    eissn: "1573-3424",
  },
  {
    title: "Political Research Quarterly",
    issn: "1065-9129",
    eissn: "1938-274X",
  },
  {
    title: "The Elementary School Journal",
    issn: "0013-5984",
    eissn: "1554-8279",
  },
  {
    title: "Hydrological Processes",
    issn: "0885-6087",
    eissn: "1099-1085",
  },
  {
    title: "The veterinary journal",
    issn: "1090-0233",
    eissn: "1532-2971",
  },
  {
    title: "Journal of marital and family therapy",
    issn: "0194-472X",
    eissn: "1752-0606",
  },
  {
    title: "physica status solidi (b)",
    issn: "0370-1972",
    eissn: "1521-3951",
  },
  {
    title: "Journal of Inorganic Biochemistry",
    issn: "0162-0134",
    eissn: "1873-3344",
  },
  {
    title: "The American Journal of Family Therapy",
    issn: "0192-6187",
    eissn: "1521-0383",
  },
  {
    title: "Engineering failure analysis",
    issn: "1350-6307",
    eissn: "1873-1961",
  },
  {
    title: "Energy Technology",
    issn: "2194-4288",
    eissn: "2194-4296",
  },
  {
    title: "Polyhedron",
    issn: "0277-5387",
    eissn: "1873-3719",
  },
  {
    title: "European Child & Adolescent Psychiatry",
    issn: "1018-8827",
    eissn: "1435-165X",
  },
  {
    title: "Molecular Ecology",
    issn: "0962-1083",
    eissn: "1365-294X",
  },
  {
    title: "Field crops research",
    issn: "0378-4290",
    eissn: "1872-6852",
  },
  {
    title: "Synthetic metals",
    issn: "0379-6779",
    eissn: "1879-3290",
  },
  {
    title: "California Management Review",
    issn: "0008-1256",
    eissn: "2162-8564",
  },
  {
    title: "Archives of biochemistry and biophysics",
    issn: "0003-9861",
    eissn: "1096-0384",
  },
  {
    title: "Gender and Education",
    issn: "0954-0253",
    eissn: "1360-0516",
  },
  {
    title: "Journal of sport behavior",
    issn: "0162-7341",
    eissn: "2641-3477",
  },
  {
    title: "Neuropharmacology",
    issn: "0028-3908",
    eissn: "1873-7064",
  },
  {
    title: "Educational Psychology Review",
    issn: "1040-726X",
    eissn: "1573-336X",
  },
  {
    title: "Decision support systems",
    issn: "0167-9236",
    eissn: "1873-5797",
  },
  {
    title: "School Psychology Quarterly",
    issn: "1045-3830",
    eissn: "1939-1560",
  },
  {
    title: "Journal of Economic Literature",
    issn: "0022-0515",
    eissn: "2328-8175",
  },
  {
    title: "Strategic Management Journal",
    issn: "0143-2095",
    eissn: "1097-0266",
  },
  {
    title: "Computers & industrial engineering",
    issn: "0360-8352",
    eissn: "1879-0550",
  },
  {
    title: "The International Journal of Robotics Research",
    issn: "0278-3649",
    eissn: "1741-3176",
  },
  {
    title: "Advanced Materials Technologies",
    issn: "2365-709X",
    eissn: "2365-709X",
  },
  {
    title: "Government Information Quarterly",
    issn: "0740-624X",
    eissn: "1872-9517",
  },
  {
    title: "Organic Process Research & Development",
    issn: "1083-6160",
    eissn: "1520-586X",
  },
  {
    title: "Current Opinion in Microbiology",
    issn: "1369-5274",
    eissn: "1879-0364",
  },
  {
    title: "Journal of Comparative Family Studies",
    issn: "0047-2328",
    eissn: "1929-9850",
  },
  {
    title: "Psychoanalytic Psychology",
    issn: "0736-9735",
    eissn: "1939-1331",
  },
  {
    title: "Experimental Thermal and Fluid Science",
    issn: "0894-1777",
    eissn: "1879-2286",
  },
  {
    title: "Journal of Political Economy",
    issn: "0022-3808",
    eissn: "1537-534X",
  },
  {
    title: "The Journal of Conflict Resolution",
    issn: "0022-0027",
    eissn: "1552-8766",
  },
  {
    title: "International Journal of Food Science & Technology",
    issn: "0950-5423",
    eissn: "1365-2621",
  },
  {
    title: "Studies in Philology",
    issn: "0039-3738",
    eissn: "1543-0383",
  },
  {
    title: "Composites science and technology",
    issn: "0266-3538",
    eissn: "1879-1050",
  },
  {
    title: "Psycho-Oncology",
    issn: "1057-9249",
    eissn: "1099-1611",
  },
  {
    title: "Journal of Forensic Sciences",
    issn: "0022-1198",
    eissn: "1556-4029",
  },
  {
    title: "Journal of proteomics",
    issn: "1874-3919",
    eissn: "1876-7737",
  },
  {
    title: "Journal of banking & finance",
    issn: "0378-4266",
    eissn: "1872-6372",
  },
  {
    title: "Oncology Nursing Forum",
    issn: "0190-535X",
    eissn: "1538-0688",
  },
  {
    title: "Journal of sport rehabilitation",
    issn: "1056-6716",
    eissn: "1543-3072",
  },
  {
    title: "Educational Studies in Mathematics",
    issn: "0013-1954",
    eissn: "1573-0816",
  },
  {
    title: "Economics letters",
    issn: "0165-1765",
    eissn: "1873-7374",
  },
  {
    title: "American Journal of Industrial Medicine",
    issn: "0271-3586",
    eissn: "1097-0274",
  },
  {
    title: "FEMS Microbiology Ecology",
    issn: "0168-6496",
    eissn: "1574-6941",
  },
  {
    title: "Neuropsychologia",
    issn: "0028-3932",
    eissn: "1873-3514",
  },
  {
    title: "Urban Studies",
    issn: "0042-0980",
    eissn: "1360-063X",
  },
  {
    title: "Victorian Studies",
    issn: "0042-5222",
    eissn: "1527-2052",
  },
  {
    title: "Journal of theoretical biology",
    issn: "0022-5193",
    eissn: "1095-8541",
  },
  {
    title: "ELECTROPHORESIS",
    issn: "0173-0835",
    eissn: "1522-2683",
  },
  {
    title: "Journal of Comparative Psychology",
    issn: "0735-7036",
    eissn: "1939-2087",
  },
  {
    title: "Journal of Photochemistry and Photobiology B: Biology",
    issn: "1011-1344",
    eissn: "1873-2682",
  },
  {
    title: "C&EN Global Enterprise",
    issn: "",
  },
  {
    title: "Biochimica et Biophysica Acta (BBA) - Bioenergetics",
    issn: "0005-2728",
    eissn: "1879-2650",
  },
  {
    title: "ELH",
    issn: "0013-8304",
    eissn: "1080-6547",
  },
  {
    title: "Literature/Film Quarterly",
    issn: "0090-4260",
  },
  {
    title: "The Journal of Finance",
    issn: "0022-1082",
    eissn: "1540-6261",
  },
  {
    title:
      "International Multidisciplinary Scientific Conference on Social Sciences & Arts SGEM",
    issn: "2367-5659",
  },
  {
    title: "Life sciences",
    issn: "0024-3205",
    eissn: "1879-0631",
  },
  {
    title: "Crop protection",
    issn: "0261-2194",
    eissn: "1873-6904",
  },
  {
    title: "Infant Mental Health Journal",
    issn: "0163-9641",
    eissn: "1097-0355",
  },
  {
    title: "Dyes and pigments",
    issn: "0143-7208",
    eissn: "1873-3743",
  },
  {
    title: "Information research: an international electronic journal",
    issn: "",
    eissn: "1368-1613",
  },
  {
    title: "Journal of Diversity in Higher Education",
    issn: "1938-8926",
    eissn: "1938-8934",
  },
  {
    title: "PR Newswire US",
    issn: "",
  },
  {
    title: "Journal of Applied Ecology",
    issn: "0021-8901",
    eissn: "1365-2664",
  },
  {
    title: "The French Review",
    issn: "0016-111X",
    eissn: "2329-7131",
  },
  {
    title: "Journal of Clinical Child & Adolescent Psychology",
    issn: "1537-4416",
    eissn: "1537-4424",
  },
  {
    title: "PROTEOMICS",
    issn: "1615-9853",
    eissn: "1615-9861",
  },
  {
    title: "Psychiatric Rehabilitation Journal",
    issn: "1095-158X",
    eissn: "1559-3126",
  },
  {
    title: "Evolution and human behavior",
    issn: "1090-5138",
    eissn: "1879-0607",
  },
  {
    title: "British Journal of Midwifery",
    issn: "0969-4900",
    eissn: "2052-4307",
  },
  {
    title: "International Journal of Project Management",
    issn: "0263-7863",
    eissn: "1873-4634",
  },
  {
    title: "Language, Speech & Hearing Services in Schools",
    issn: "0161-1461",
    eissn: "1558-9129",
  },
  {
    title: "Rehabilitation Psychology",
    issn: "0090-5550",
    eissn: "1939-1544",
  },
  {
    title: "American Educational Research Journal",
    issn: "0002-8312",
    eissn: "1935-1011",
  },
  {
    title: "Professional School Counseling",
    issn: "1096-2409",
    eissn: "2156-759X",
  },
  {
    title: "Progress in Human Geography",
    issn: "0309-1325",
    eissn: "1477-0288",
  },
  {
    title: "Public Opinion Quarterly",
    issn: "0033-362X",
    eissn: "1537-5331",
  },
  {
    title: "Journal of Veterinary Behavior",
    issn: "1558-7878",
  },
  {
    title: "TESOL Quarterly",
    issn: "0039-8322",
    eissn: "1545-7249",
  },
  {
    title: "World Affairs",
    issn: "0043-8200",
    eissn: "1940-1582",
  },
  {
    title: "Death Studies",
    issn: "0748-1187",
    eissn: "1091-7683",
  },
  {
    title: "Journal of Environmental Chemical Engineering",
    issn: "2213-3437",
  },
  {
    title: "European Journal of Developmental Psychology",
    issn: "1740-5629",
    eissn: "1740-5610",
  },
  {
    title: "The Journal of Psychology",
    issn: "0022-3980",
    eissn: "1940-1019",
  },
  {
    title: "physica status solidi (a)",
    issn: "1862-6300",
    eissn: "1862-6319",
  },
  {
    title: "Learning Disability Quarterly",
    issn: "0731-9487",
    eissn: "2168-376X",
  },
  {
    title: "Canadian Psychology - Psychologie canadienne",
    issn: "0708-5591",
    eissn: "1878-7304",
  },
  {
    title: "Journal of Trauma Nursing",
    issn: "1078-7496",
    eissn: "1932-3883",
  },
  {
    title: "Sociological Review",
    issn: "0038-0261",
    eissn: "1467-954X",
  },
  {
    title: "Clinical biochemistry",
    issn: "0009-9120",
    eissn: "1873-2933",
  },
  {
    title: "American Literature",
    issn: "0002-9831",
    eissn: "1527-2117",
  },
  {
    title: "Harvard International Review",
    issn: "0739-1854",
    eissn: "2374-6564",
  },
  {
    title: "The Journal of Parasitology",
    issn: "0022-3395",
    eissn: "1937-2345",
  },
  {
    title: "Ecology Letters",
    issn: "1461-023X",
    eissn: "1461-0248",
  },
  {
    title: "European Psychiatry",
    issn: "0924-9338",
    eissn: "1778-3585",
  },
  {
    title: "Journal of transport geography",
    issn: "0966-6923",
    eissn: "1873-1236",
  },
  {
    title: "Teaching In Higher Education",
    issn: "1356-2517",
    eissn: "1470-1294",
  },
  {
    title: "Middle East Journal",
    issn: "0026-3141",
    eissn: "1940-3461",
  },
  {
    title: "Journal of Applied Sport Psychology",
    issn: "1041-3200",
    eissn: "1533-1571",
  },
  {
    title: "Journal of Educational Research",
    issn: "0022-0671",
    eissn: "1940-0675",
  },
  {
    title: "Psychology of Religion and Spirituality",
    issn: "1941-1022",
    eissn: "1943-1562",
  },
  {
    title: "Transportation Research Part C: Emerging Technologies",
    issn: "0968-090X",
    eissn: "1879-2359",
  },
  {
    title: "Trends in cell biology",
    issn: "0962-8924",
    eissn: "1879-3088",
  },
  {
    title: "Virus Research",
    issn: "0168-1702",
    eissn: "1872-7492",
  },
  {
    title: "Critical Inquiry",
    issn: "0093-1896",
    eissn: "1539-7858",
  },
  {
    title: "International Studies Review",
    issn: "1521-9488",
    eissn: "1468-2486",
  },
  {
    title: "Pharmacology & Therapeutics",
    issn: "0163-7258",
    eissn: "1879-016X",
  },
  {
    title: "Social Work Education",
    issn: "0261-5479",
    eissn: "1470-1227",
  },
  {
    title: "Urban forestry & urban greening",
    issn: "1618-8667",
    eissn: "1610-8167",
  },
  {
    title: "Neuropsychology",
    issn: "0894-4105",
    eissn: "1931-1559",
  },
  {
    title: "Journal of insect physiology",
    issn: "0022-1910",
    eissn: "1879-1611",
  },
  {
    title: "Journal of Molecular Catalysis A: Chemical",
    issn: "1381-1169",
    eissn: "1873-314X",
  },
  {
    title: "Hydrometallurgy",
    issn: "0304-386X",
    eissn: "1879-1158",
  },
  {
    title: "Polymers for Advanced Technologies",
    issn: "1042-7147",
    eissn: "1099-1581",
  },
  {
    title: "Applied mathematical modelling",
    issn: "0307-904X",
    eissn: "1872-8480",
  },
  {
    title: "Music Educators Journal",
    issn: "0027-4321",
    eissn: "1945-0087",
  },
  {
    title: "Journal of vocational behavior",
    issn: "0001-8791",
    eissn: "1095-9084",
  },
  {
    title: "Cancer Cell",
    issn: "1535-6108",
    eissn: "1878-3686",
  },
  {
    title: "Vetus Testamentum",
    issn: "0042-4935",
    eissn: "1568-5330",
  },
  {
    title: "Journal of plant physiology",
    issn: "0176-1617",
    eissn: "1618-1328",
  },
  {
    title: "Sexuality & Culture",
    issn: "1095-5143",
    eissn: "1936-4822",
  },
  {
    title: "Quality of Life Research",
    issn: "0962-9343",
    eissn: "1573-2649",
  },
  {
    title: "Renaissance Quarterly",
    issn: "0034-4338",
    eissn: "1935-0236",
  },
  {
    title: "Sociological Forum",
    issn: "0884-8971",
    eissn: "1573-7861",
  },
  {
    title: "Behavioural brain research",
    issn: "0166-4328",
    eissn: "1872-7549",
  },
  {
    title: "The Journal of Genetic Psychology",
    issn: "0022-1325",
    eissn: "1940-0896",
  },
  {
    title: "Medical teacher",
    issn: "0142-159X",
    eissn: "1466-187X",
  },
  {
    title: "Chirality",
    issn: "0899-0042",
    eissn: "1520-636X",
  },
  {
    title: "Macromolecular Materials and Engineering",
    issn: "1438-7492",
    eissn: "1439-2054",
  },
];

let databases = [
  {
    title: "Scopus",
  },
  {
    title: "Library, Information Science & Technology Abstracts",
  },
  {
    title: "ProQuest Central",
  },
  {
    title: "Art Index Retrospective (H.W. Wilson)",
  },
  {
    title: "Newswires",
  },
  {
    title: "European Views of the Americas: 1493 to 1750",
  },
  {
    title: "RILM Abstracts of Music Literature (1967 to present)",
  },
  {
    title: "Ebook Central",
  },
  {
    title: "Audiobook Collection (EBSCOhost)",
  },
  {
    title: "L'Année philologique",
  },
  {
    title: "Associated Press Video",
  },
  {
    title: "RILM Abstracts of Music Literature with Full Text",
  },
  {
    title: "MathSciNet via EBSCOhost",
  },
  {
    title: "ProQuest Natural Science Collection",
  },
  {
    title: "ProQuest Technology Collection",
  },
  {
    title: "OpenDissertations",
  },
  {
    title: "Hospital Premium Collection",
  },
  {
    title: "Literature Online",
  },
  {
    title: "Philosopher's Index",
  },
  {
    title: "Screen Studies Collection",
  },
  {
    title: "Academic Video Online",
  },
  {
    title: "Coronavirus Research Database",
  },
  {
    title: "RILM Abstracts of Music Literature",
  },
  {
    title: "Business and Economics Video Collection",
  },
  {
    title: "RILM Music Encyclopedias",
  },
];

export { titles, databases };
