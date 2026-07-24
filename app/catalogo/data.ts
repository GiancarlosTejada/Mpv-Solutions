// app/productos/data.ts

export type OpcionProducto = {
  item: number;
  medida: string;
};

export type ProductoAgrupado = {
  id: string;
  marca: string;
  nombre: string;
  familia: string;
  opciones: OpcionProducto[];
};

export const catalogoAgrupado: ProductoAgrupado[] = [
  // --- Conduit, Fittings & Accessories ---
  {
    id: "anaconda-tuberia-flexible",
    marca: "ANACONDA/SEALTITE",
    nombre: "TUBERIA FLEXIBLE LIQUIDTIGHT C/REVEST PVC TYPE EFST GRIS",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 3, medida: '6" ROLLO X2 5FT' }
    ]
  },
  {
    id: "cantex-conduit-body-lb",
    marca: "CANTEX",
    nombre: "PVC Conduit Body type LB",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 21, medida: '3/4"' },
      { item: 20, medida: '1"' }
    ]
  },
  {
    id: "cantex-coupling-pvc",
    marca: "CANTEX",
    nombre: "COUPLING PVC SCH40/80 UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 32, medida: '3/4"' },
      { item: 28, medida: '1"' },
      { item: 29, medida: '1-1/2"' },
      { item: 30, medida: '2"' },
      { item: 31, medida: '3"' },
      { item: 33, medida: '4"' },
      { item: 34, medida: '6"' }
    ]
  },
  {
    id: "Cantex-form5-lb",
    marca: "Cantex",
    nombre: "CONDUIT BODY FORM 5 TYPE LB, IRON, HDG, UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 54, medida: '1"' }
    ]
  },
  {
    id: "Cantex-form5-lr",
    marca: "Cantex",
    nombre: "CONDUIT BODY FORM 5 TYPE LR, IRON, HDG, UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 56, medida: '3/4"' },
      { item: 55, medida: '1"' }
    ]
  },
  {
    id: "Cantex-form5-t",
    marca: "CANTEX",
    nombre: "CONDUIT BODY FORM 5 TYPE T, IRON, HDG, UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 58, medida: '1/2"' },
      { item: 57, medida: '1"' }
    ]
  },
  {
    id: "Cantex-conduit-sch40",
    marca: "Cantex",
    nombre: "CONDUIT PVC SCH40 x10FT BELLED END",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 79, medida: '3/4"' },
      { item: 75, medida: '1"' },
      { item: 76, medida: '1-1/2"' },
      { item: 77, medida: '2"' },
      { item: 78, medida: '3"' },
      { item: 80, medida: '4"' },
      { item: 81, medida: '6"' }
    ]
  },
  {
    id: "Cantex-conduit-sch80",
    marca: "Cantex",
    nombre: "CONDUIT PVC SCH80 x10FT BELLED END",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 82, medida: '1-1/2"' },
      { item: 83, medida: '2"' },
      { item: 84, medida: '4"' },
      { item: 85, medida: '6"' }
    ]
  },
  {
    id: "crouse-sealing-fitting",
    marca: "CROUSE-HINDS",
    nombre: "Conduit Sealing Fitting Cat. EYS31",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 98, medida: '1"' }
    ]
  },
  {
    id: "crouse-emt-connector",
    marca: "CROUSE-HINDS",
    nombre: "EMT compression connector, Straight, Non-insulated, Steel",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 119, medida: '3/4"' }
    ]
  },
  {
    id: "crouse-emt-coupling",
    marca: "CROUSE-HINDS",
    nombre: "EMT compression coupling, Zinc plated steel",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 120, medida: '3/4"' }
    ]
  },
  {
    id: "crouse-male-union",
    marca: "CROUSE-HINDS",
    nombre: "Male Union (UNY Series)",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 123, medida: '1/2" (UNY105)' },
      { item: 124, medida: '3/4" (UNY205)' },
      { item: 122, medida: '1" (UNY305)' }
    ]
  },
  {
    id: "crouse-plug-rigid",
    marca: "CROUSE-HINDS",
    nombre: "PLG Conduit plug Rigid/IMC, Steel, Square head",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 125, medida: '1"' }
    ]
  },
  {
    id: "crouse-myers-hub",
    marca: "CROUSE-HINDS",
    nombre: "MYERS GROUND HUB, ZINC (STG2)",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 135, medida: '3/4"' }
    ]
  },
  {
    id: "crouse-unf-union",
    marca: "CROUSE-HINDS",
    nombre: "UNF union, Rigid/IMC, Female, Feraloy iron alloy",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 143, medida: '1/2" (UNF105)' },
      { item: 138, medida: '2-1/2"' }
    ]
  },
  {
    id: "eaton-load-break",
    marca: "EATON",
    nombre: "Cooper LE235F00T 35KV 200A Load Break Elbows",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 171, medida: 'Lote de 3' }
    ]
  },
  {
    id: "ecnkoms-elbow",
    marca: "ECNKoms",
    nombre: "GALVANIZED ELBOW SPECIAL RADIUS",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 190, medida: '3 X 90 X 24' }
    ]
  },
  {
    id: "ipex-pvc-union",
    marca: "IPEX",
    nombre: "PVC Sch80 conduit union UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 232, medida: '1"' }
    ]
  },
  {
    id: "killark-splice-box",
    marca: "KILLARK",
    nombre: "VMX6B Splice Box Ceiling 5 Hub",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 243, medida: '3/4"' }
    ]
  },
  {
    id: "national-sch80-conduit",
    marca: "NATIONAL",
    nombre: "PVC SCH80 CONDUIT (10537)",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 245, medida: '3/4 X 10' }
    ]
  },
  {
    id: "penn-rigid-alum",
    marca: "PENN CONDUIT",
    nombre: "RIGID ALUM CONDUIT",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 247, medida: '3/4"' },
      { item: 254, medida: '1-1/2"' },
      { item: 258, medida: '2"' },
      { item: 262, medida: '3"' }
    ]
  },
  {
    id: "penn-elbow-45",
    marca: "PENN CONDUIT",
    nombre: "ARC 45DEG ELBOW",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 251, medida: '3/4"' }
    ]
  },
  {
    id: "produit-hub-aterrizamiento",
    marca: "PRODUIT",
    nombre: "HUBs CON POLO DE ATERRIZAMIENTO",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 275, medida: '1 1/2"' }
    ]
  },
  {
    id: "produit-tubo-rgs",
    marca: "PRODUIT",
    nombre: "TUBO CONDUIT RGS 10FT ANSI C80.1 UL6",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 279, medida: '1"' }
    ]
  },
  {
    id: "sci-caja-condulet",
    marca: "SCI",
    nombre: "CAJA CONDULET FORM 5 HIERRO HDG, UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 286, medida: '1" TIPO C' },
      { item: 291, medida: '2" TIPO LB' },
      { item: 322, medida: '1 1/2" TIPO LB' }
    ]
  },
  {
    id: "sci-cover-condulet",
    marca: "SCI",
    nombre: "COVER FOR CONDULET / TAPAS",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 337, medida: '1" SERIE 7' },
      { item: 375, medida: '1" ACERO C/EMPAQUETADURA' }
    ]
  },
  {
    id: "sci-empaquetadura",
    marca: "SCI",
    nombre: "EMPAQUETADURA P/CAJA CONDULET",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 341, medida: '1"' }
    ]
  },
  {
    id: "sci-hubs",
    marca: "SCI",
    nombre: "HUBs CON POLO DE ATERRIZAMIENTO",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 345, medida: '1 1/4"' }
    ]
  },
  {
    id: "sci-reduccion-bushing",
    marca: "SCI",
    nombre: "REDUCCION BUSHING M-H ACERO CL1 DIV182, UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 349, medida: 'Ø1"x3/4"' }
    ]
  },
  {
    id: "sepco-conector-hub",
    marca: "SEPCO",
    nombre: "CONECTOR CONDUIT TIPO HUB C/AISLAMIENTO HIERRO HDG, UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 386, medida: '1-1/2"' }
    ]
  },
  {
    id: "thompson-swivel",
    marca: "THOMPSON",
    nombre: "Hinged Swivel Point To Base Connector",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 445, medida: 'Estándar' }
    ]
  },
  {
    id: "topaz-imc-union",
    marca: "TOPAZ",
    nombre: "IMC CONDUIT Universal union UL",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 452, medida: '1"' }
    ]
  },
  {
    id: "unistrut-p1112ss",
    marca: "UNISTRUT",
    nombre: "RIGID STEEL CONDUIT CLAMP (P1112SS)",
    familia: "Conduit, Fittings & Accessories",
    opciones: [
      { item: 458, medida: '3/4"' }
    ]
  },

  // --- General Electrical Materials ---
  {
    id: "bline-neoprene",
    marca: "B-LINE",
    nombre: "ROLLO DE NEOPRENE 2 X 7.6m",
    familia: "General Electrical Materials",
    opciones: [
      { item: 15, medida: 'e:1/8"' }
    ]
  },
  {
    id: "cooper-reliabreak",
    marca: "COOPER",
    nombre: "M-Force 3-Phase Reliabreak Interrupter",
    familia: "General Electrical Materials",
    opciones: [
      { item: 61, medida: '15KV/25KV' }
    ]
  },
  {
    id: "crousehinds-tapon",
    marca: "CROUSE HINDS",
    nombre: "TAPON CABEZA HUECA ACERO UL",
    familia: "General Electrical Materials",
    opciones: [
      { item: 90, medida: '1"' }
    ]
  },
  {
    id: "crousehinds-corrosafe",
    marca: "CROUSE-HINDS",
    nombre: "CORROSAFE7 LB COND BDY",
    familia: "General Electrical Materials",
    opciones: [
      { item: 102, medida: '3/4"' }
    ]
  },
  {
    id: "cyclone-cleat",
    marca: "CYCLONE",
    nombre: "ALUMINIUM I STRAP CLEAT-TREFOIL",
    familia: "General Electrical Materials",
    opciones: [
      { item: 147, medida: '3 X 069-80' }
    ]
  },
  {
    id: "eaton-megablock",
    marca: "EATON",
    nombre: "8 PORT IS MEGABLOCK - SPURGUARD T",
    familia: "General Electrical Materials",
    opciones: [
      { item: 152, medida: 'Estándar' }
    ]
  },
  {
    id: "eaton-molded-breaker",
    marca: "EATON",
    nombre: "HMCP250W5W Molded Case Circuit Breaker",
    familia: "General Electrical Materials",
    opciones: [
      { item: 170, medida: 'Estándar' }
    ]
  },
  {
    id: "flowcom-antisismico",
    marca: "FLOWCOM",
    nombre: "ANTISISMICO FIGURA 1000 GALV. EN CALIENTE",
    familia: "General Electrical Materials",
    opciones: [
      { item: 208, medida: '2-1/2 PULG' }
    ]
  },
  {
    id: "hammond-enc",
    marca: "HAMMOND",
    nombre: "R100-102-035 ENC",
    familia: "General Electrical Materials",
    opciones: [
      { item: 222, medida: '3.9X5.9X3.1' }
    ]
  },
  {
    id: "rotork-electronics",
    marca: "ROTORK",
    nombre: "6A COMPLETE ELECTRONICS ASSEMBLY w/ MOD6J",
    familia: "General Electrical Materials",
    opciones: [
      { item: 284, medida: 'Estándar' }
    ]
  },
  {
    id: "saft-bateria",
    marca: "SAFT",
    nombre: "Elemento de bateria NiCd SBH59",
    familia: "General Electrical Materials",
    opciones: [
      { item: 285, medida: 'Estándar' }
    ]
  },
  {
    id: "sci-reduccion-galv",
    marca: "SCI",
    nombre: "REDUCCION GALVANIZADA",
    familia: "General Electrical Materials",
    opciones: [
      { item: 359, medida: '1 1/2" A 1 1/4"' }
    ]
  },
  {
    id: "thompson-extension",
    marca: "THOMPSON",
    nombre: "Copper Extension Rod w/1! Thread At Each End",
    familia: "General Electrical Materials",
    opciones: [
      { item: 439, medida: '1/2 x 48"' }
    ]
  },
  {
    id: "tripplite-battery",
    marca: "TRIP LITE",
    nombre: "Ups External Battery Pack",
    familia: "General Electrical Materials",
    opciones: [
      { item: 455, medida: 'Bp240V10Rt3U BZ3332340' }
    ]
  },

  // --- Cable, Wire & Conductors ---
  {
    id: "3m-wire-connector",
    marca: "3M",
    nombre: "Twist On Wire Connector, PACK 500 UNIT",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 1, medida: '22-12 AWG' }
    ]
  },
  {
    id: "anixter-compression-terminal",
    marca: "ANIXTER",
    nombre: "Compression Terminal, 1/4\" Stud, 5/8\" Spacing",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 4, medida: '2/0 AWG Cu' }
    ]
  },
  {
    id: "burndy-grounding-splice",
    marca: "BURNDY",
    nombre: "Compression Grounding Splice",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 19, medida: '4/0 AWG Cu' }
    ]
  },
  {
    id: "cmp-connector",
    marca: "CMP",
    nombre: "CMPTMC200SA ALUMINUM CONNECTOR",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 60, medida: '200S-2 NPT' }
    ]
  },
  {
    id: "crouse-clavija",
    marca: "CROUSE-HINDS",
    nombre: "Clavija de 2 Lineas x 3 Polos, 600VAC/250VDC; NEMA 4",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 96, medida: '30A' }
    ]
  },
  {
    id: "crouse-wjb-box",
    marca: "CROUSE-HINDS",
    nombre: "WJB Junction Box, Cooper-Free Aluminum",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 144, medida: 'Outdoor Use' }
    ]
  },
  {
    id: "eaton-tmcx-connector",
    marca: "EATON",
    nombre: "CMPTMCX200SA ALUMINUM TMCX CONNECTOR",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 159, medida: '200S-2 NPT HUB' }
    ]
  },
  {
    id: "florida-strut-alum",
    marca: "FLORIDA STRUT",
    nombre: "Aluminum strut FS-2001",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 198, medida: '1 5/8"x1 5/8"x10ft' }
    ]
  },
  {
    id: "southwire-cable",
    marca: "SOUTHWIRE",
    nombre: "3/C CU XLP TECK90 1KV AIA BLACK PVC JKT",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 395, medida: '750-61' }
    ]
  },
  {
    id: "thompson-solid-cu",
    marca: "THOMPSON",
    nombre: "Solid Cu Pt NT w/Adapter",
    familia: "Cable, Wire & Conductors",
    opciones: [
      { item: 441, medida: '1/2 x 48"' }
    ]
  },

  // --- Industrial Safety / Hazardous Area ---
  {
    id: "bartec-bateria-is",
    marca: "Bartec",
    nombre: "BATERIA DE LITIO PARA AGILES X IS, CLASE1, DIV 1",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 10, medida: '7.6 V/4200 mAh (31.92 Wh)' }
    ]
  },
  {
    id: "cantex-end-bell",
    marca: "CANTEX",
    nombre: "END BELL SCH40/80 UL",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 35, medida: '1"' }
    ]
  },
  {
    id: "cantex-female-adaptor",
    marca: "CANTEX",
    nombre: "FEMALE ADAPTOR PVC SCH40/80 UL",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 41, medida: '1"' }
    ]
  },
  {
    id: "cantex-male-adaptor",
    marca: "CANTEX",
    nombre: "MALE ADAPTOR PVC SCH40/80 UL",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 47, medida: '1"' }
    ]
  },
  {
    id: "copeflex-flexible",
    marca: "COPEFLEX",
    nombre: "COPFLEX UL ETGH115 LONGITUD FLEXIBLE",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 63, medida: '1/2"x15"' }
    ]
  },
  {
    id: "copleflex-flexible",
    marca: "COPLEFLEX",
    nombre: "COPLEFLEX UL ETGJH115 LONGITUD FLEXIBLE",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 69, medida: '1/2"x15"' }
    ]
  },
  {
    id: "ferraz-fusible",
    marca: "FERRAZ SHAMWUT/ME",
    nombre: "TRS-60R DUAL ELEMENT TIME DELAY CURRENT LIMITING CLASS",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 194, medida: '60A 600 V' }
    ]
  },
  {
    id: "ipex-female-adapter",
    marca: "IPEX",
    nombre: "Schedule 80 PVC Female Adapter",
    familia: "Industrial Safety / Hazardous Area",
    opciones: [
      { item: 236, medida: '1"' }
    ]
  },

  // --- Utility Poles & Crossarms ---
  {
    id: "brooks-crossarm",
    marca: "BROOKS",
    nombre: "Laminated Douglas Fir Crossarm Blank / No Drilling",
    familia: "Utility Poles & Crossarms",
    opciones: [
      { item: 16, medida: '4-1/2"x6-3/4"x28\'' }
    ]
  },
  {
    id: "crousehinds-evled",
    marca: "CROUSE HINDS",
    nombre: "LUMINARIA EVLED MONT. A POSTE 25 C/HUB 11/4\"",
    familia: "Utility Poles & Crossarms",
    opciones: [
      { item: 86, medida: '30W 5000K' }
    ]
  },
  {
    id: "douglas-fir-crossarm",
    marca: "DOUGLAS FIR",
    nombre: "TREATED WOOD CROSSARM SYP, ANSI 190.1, AWPA",
    familia: "Utility Poles & Crossarms",
    opciones: [
      { item: 148, medida: '3 5/8x9 3/8x25 ft' }
    ]
  },
  {
    id: "eaton-vmv-led",
    marca: "EATON",
    nombre: "LUM. VMV LED NEMA 4X POSTE 25\"-1.1/2', CLI DIV2 UL",
    familia: "Utility Poles & Crossarms",
    opciones: [
      { item: 172, medida: '94W, 7404LM, 3000K, 120-277VAC' }
    ]
  },
  {
    id: "hubbell-pole-ext",
    marca: "HUBBELL",
    nombre: "Universal pole extension with rubber insulator skirts",
    familia: "Utility Poles & Crossarms",
    opciones: [
      { item: 225, medida: 'Estándar' }
    ]
  },
  {
    id: "syp-pole",
    marca: "SYP",
    nombre: "Southern Yellow Pine Wood CCA treated Pole",
    familia: "Utility Poles & Crossarms",
    opciones: [
      { item: 422, medida: '40 FT Class 1' }
    ]
  },
  {
    id: "thomasson-crossarm",
    marca: "THOMASSON",
    nombre: "CROSSARM TREATED WOOD, TYPE OF PRESERVATIVE DCOI",
    familia: "Utility Poles & Crossarms",
    opciones: [
      { item: 435, medida: '3-1/2"X4-1/2\'X8\'' }
    ]
  },

  // --- Hardware, Fasteners & Supports ---
  {
    id: "cmp-falcon-cleat",
    marca: "CMP",
    nombre: "2 BOLT STANDARD NYLON FALCON CLEAT",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 59, medida: '70-83' }
    ]
  },
  {
    id: "crousehinds-locknut",
    marca: "CROUSE-HINDS",
    nombre: "16 SA ALUM LOCKNUT",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 106, medida: '2-IN' }
    ]
  },
  {
    id: "erico-mold-support",
    marca: "ERICO",
    nombre: "CAD B134 VERT SURFACE MOLD SUPPORT FOR USE W/L160",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 192, medida: 'Estándar' }
    ]
  },
  {
    id: "flexstrut-bracket",
    marca: "FLEXSTRUT",
    nombre: "DOUBLE CHANNEL BRACKET HDG",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 195, medida: '12"' }
    ]
  },
  {
    id: "florida-strut-strap",
    marca: "FLORIDA STRUT",
    nombre: "FGR W6134AALST ALU STRUT STRAP",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 200, medida: '1-1/2"' }
    ]
  },
  {
    id: "flowcom-ubolt",
    marca: "FLOWCOM",
    nombre: "UBOLT ZINCADO-UBO-52828",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 218, medida: '1 1/4" X 3/8\'' }
    ]
  },
  {
    id: "isc-washer",
    marca: "ISC",
    nombre: "FLAT WASHER, ALUM",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 238, medida: '3/8-16' }
    ]
  },
  {
    id: "wesanco-channel",
    marca: "WESANCO",
    nombre: "Double Plain Structural Channel",
    familia: "Hardware, Fasteners & Supports",
    opciones: [
      { item: 462, medida: '1-5/8" wide X 3/1/4" high, 3m' }
    ]
  },

  // --- Power Distribution & Protection ---
  {
    id: "arteche-socket",
    marca: "ARTECHE",
    nombre: "SOCKET FN DE IP20",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 6, medida: 'Estándar' }
    ]
  },
  {
    id: "axis-switch",
    marca: "AXIS",
    nombre: "MEDIA CONVERTER SWITCH",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 7, medida: 'Estándar' }
    ]
  },
  {
    id: "bartec-rotary",
    marca: "BARTEC",
    nombre: "Kit rotary handle, execution Ex d IIB+H2 or IIC, in aluminium",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 11, medida: 'Estándar' }
    ]
  },
  {
    id: "eaton-fused-sw",
    marca: "EATON",
    nombre: "HD Fused Sw/CR-H Recept 600V N12",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 151, medida: '100A/3P' }
    ]
  },
  {
    id: "eaton-disconnect-sw",
    marca: "EATON",
    nombre: "DISCONNECT SWITCH DH C/FUSIBLE ACERO IP66 NEMA 12/3R, UL",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 160, medida: '3X100A+T 277/480-600V' }
    ]
  },
  {
    id: "hirschmann-bobcat",
    marca: "HIRSCHMANN/BELDEN",
    nombre: "BOBCAT SWITCH, FAST ETHERNET",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 223, medida: '12 PORTS' }
    ]
  },
  {
    id: "littlefuse-vidrio",
    marca: "LITTLEFUSE",
    nombre: "FUSIBLE DE VIDRIO ACCION RAPIDA 5X20mm",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 244, medida: '2A' }
    ]
  },
  {
    id: "siemens-safety-sw",
    marca: "SIEMENS",
    nombre: "SAFETY SWITCH 600 VAC. 3F, NO FUSE, NEMA 12",
    familia: "Power Distribution & Protection",
    opciones: [
      { item: 394, medida: '60A' }
    ]
  },

  // --- Enclosures, Boxes & Cabinets ---
  {
    id: "abtech-enclosure",
    marca: "ABTECH",
    nombre: "ENCLOSURE 316L STAINLESS STEEL",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 2, medida: '306X306X140MM' }
    ]
  },
  {
    id: "cantex-box-adaptor",
    marca: "CANTEX",
    nombre: "BOX ADAPTERS PVC SCH40/80 UL",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 22, medida: '1"' }
    ]
  },
  {
    id: "crouse-excell-box",
    marca: "CROUSE-HINDS",
    nombre: "CAJA DE DISTRIBUCION EX-CELL 1GP SS316",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 95, medida: '24 X16"X08' }
    ]
  },
  {
    id: "hammond-jic-box",
    marca: "HAMMOND",
    nombre: "1414N4ALO6 JIC BOX&PNL",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 221, medida: '16X14X6' }
    ]
  },
  {
    id: "killark-excell-box",
    marca: "KILLARK",
    nombre: "CAJA DE DISTRIBUCIÓN EX-CELL 1GP SS316, IP66, IECEX/ATEX",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 242, medida: '24"x24"x12"' }
    ]
  },
  {
    id: "robroy-enclosure",
    marca: "ROBROY",
    nombre: "ENCLOSURE PB FG 5 HOLE",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 283, medida: '14X3X2' }
    ]
  },
  {
    id: "sci-sealing-terminal",
    marca: "SCI",
    nombre: "SEALING FOR TERMINAL BOX SERIE 7",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 371, medida: '1"' }
    ]
  },
  {
    id: "sepco-round-box",
    marca: "SEPCO",
    nombre: "Type X Round Juntion Box UL with Plug for type T",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 384, medida: '1"' }
    ]
  },
  {
    id: "stahlin-enclosure",
    marca: "STAHLIN",
    nombre: "ENCLOSURE PB FG 3 H",
    familia: "Enclosures, Boxes & Cabinets",
    opciones: [
      { item: 421, medida: '8X4X4' }
    ]
  },

  // --- Lighting & Lamps ---
  {
    id: "crouse-proyector-led",
    marca: "CROUSE HINDS",
    nombre: "LUMINARIA TIPO PROYECTOR PARA LAMPARA LED ALTA INTENSIDAD",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 87, medida: '531W, 220V, 60HZ' }
    ]
  },
  {
    id: "crouse-champ-led",
    marca: "CROUSE-HINDS",
    nombre: "PVML-9-J-UNV1 CHAMP PRO PVML LED LIGHT FIXTURE",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 118, medida: 'Estándar' }
    ]
  },
  {
    id: "eaton-piloto-led",
    marca: "EATON",
    nombre: "LUZ PILOTO LED AMBAR HEAVY DUTY",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 173, medida: '120VAC, 30.5mm' }
    ]
  },
  {
    id: "holophane-lineal",
    marca: "HOLOPHANE",
    nombre: "LUMINARIA LINEAL LED C/KIT EMERG.",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 224, medida: '8000LM, 4000K, 122-277V' }
    ]
  },
  {
    id: "phoenix-tenon-kit",
    marca: "PHOENIX LIGHTING",
    nombre: "ADJUSTABLE TENON MOUNT KIT",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 269, medida: '5"' }
    ]
  },
  {
    id: "plastic-lens-ind",
    marca: "PLASTIC LENS",
    nombre: "IND LIGHT FV 120VAC GREEN LED-PLASTIC LENS",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 273, medida: 'Estándar' }
    ]
  },
  {
    id: "unistrut-trolley",
    marca: "UNISTRUT",
    nombre: "Genuine P2750-EG 4 Wheel Light Duty Trolley Assembly",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 457, medida: 'Estándar' }
    ]
  },
  {
    id: "venas-controlador",
    marca: "VENAS",
    nombre: "CONTROLADOR PARA LUMINARIA EMERGENCIA SERIE ES01",
    familia: "Lighting & Lamps",
    opciones: [
      { item: 460, medida: '3W 120-277V' }
    ]
  },

  // --- Grounding, Lugs & Connectors ---
  {
    id: "bline-abrazadera-doble",
    marca: "B-LINE",
    nombre: "ABRAZADERA DOBLE TIPO EXPANSION GUIDE PERNO E.G.",
    familia: "Grounding, Lugs & Connectors",
    opciones: [
      { item: 13, medida: '1/2"' }
    ]
  },
  {
    id: "crouse-plug-tb",
    marca: "CROUSE-HINDS",
    nombre: "PLUG TB Series",
    familia: "Grounding, Lugs & Connectors",
    opciones: [
      { item: 91, medida: '1" (PLG3-TB)' },
      { item: 130, medida: '2 1/2" (PLG7-TB)' }
    ]
  },
  {
    id: "crouse-grnd-bshg",
    marca: "CROUSE-HINDS",
    nombre: "GRND BSHG INSUL 150C AL LUG",
    familia: "Grounding, Lugs & Connectors",
    opciones: [
      { item: 94, medida: '3" (250MCM -6)' },
      { item: 109, medida: '3/4" (GLL2-DC)' }
    ]
  },
  {
    id: "crouse-plg3-reces",
    marca: "CROUSE-HINDS",
    nombre: "PLG3 RECES PLUG",
    familia: "Grounding, Lugs & Connectors",
    opciones: [
      { item: 113, medida: '1-IN' }
    ]
  },

  // --- Instrumentation, Control & Networking ---
  {
    id: "axis-sfp-module",
    marca: "AXIS",
    nombre: "SFP MODULE LC.LX SINGLE MODE",
    familia: "Instrumentation, Control & Networking",
    opciones: [
      { item: 8, medida: 'Estándar' }
    ]
  },
  {
    id: "axis-video-encoder",
    marca: "AXIS",
    nombre: "VIDEO ENCODER",
    familia: "Instrumentation, Control & Networking",
    opciones: [
      { item: 9, medida: '4CH' }
    ]
  }
];