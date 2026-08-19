export type InvestmentProject = {
  slug: string;
  name: string;
  status: "running" | "coming-soon";
  category: string;
  description: string;

  /**
   * Main image used on the investment listing.
   */
  image: string;

  /**
   * Additional project images.
   * Can later be used by the detail page gallery.
   */
  images: string[];

  goalsInvestment: string;
  minimumInvestment: string;
  period: string;
  requirement?: string;
  simulatedReturn?: string;

  coverImage: string;
  gallery: string[];
  overview: string;
  investmentPeriod: string;
  investment: {
    requirement?: string;
    simulatedReturn?: string;
    risk?: string;
  };
  location?: string;
  countryOfOrigin?: string;
  features?: string[];
  advantages?: string[];
  specifications?: { label: string; value: string }[];
  services?: string[];
  videoUrl?: string;
  allocationProject?: {
    allocationLabel: string;
    allocationValue: string;
    costStructure: string[];
    riskMitigation: string[];
  };
  commercial?: {
    purchasePrice?: string;
    sellingPrice?: string;
    successFee?: string;
    importFee?: string[];
    vat?: string;
    refurbishment?: string;
    warranty?: string;
    incentive?: string;
    investorMargin?: string;
  };
};

const projectRecords = [
  {
    slug: "bulldozer-komatsu-d31p-20e",
    name: "Komatsu D31P-20E",
    status: "running",
    category: "Equipment",

    description:
      "Komatsu D31P-20E Built-Up Tahun 2026 adalah bulldozer mini handal yang dirancang untuk pekerjaan perataan tanah ringan hingga menengah.",

    image: "/bull1.jpg",

    images: [
      "/bull1.jpg",
      "/bull2.jpg",
      "/bull3.jpg",
      "/bull4.jpg",
    ],

    goalsInvestment: "Rp20 Miliar",
    minimumInvestment: "Rp20 Miliar",
    period: "12 Bulan",
    requirement: "35 Unit",
    simulatedReturn: "5%",
  },

  {
    slug: "ecavator-komatsu-pc57-7",
    name: "Komatsu PC57-7",
    status: "running",
    category: "Equipment",

    description:
      "Project PC57-7 merupakan peluang strategic equipment yang sedang dipersiapkan Montana Global Investama untuk pengembangan dan perputaran bisnis.",

    image: "/bull5.jpg",

    images: [
      "/bull5.jpg",
      "/bull6.jpg",
      "/bull7.jpg",
      "/bull8.jpg",
    ],

    goalsInvestment: "Rp20.000.000.000",
    minimumInvestment: "Rp2.000.000.000",
    period: "12 Bulan",
    simulatedReturn: "7,8%",
    requirement: "-",
    commercial: {
      purchasePrice: "Rp150.000.000",
      sellingPrice: "Rp346.000.000",
      successFee: "12%",
      importFee: [
        "Rp130.000.000 / Container 20FT",
        "Rp160.000.000 / Container 40FT",
      ],
      vat: "11%",
      refurbishment: "Rp25.000.000 / Unit",
      warranty: "1%",
      incentive: "1%",
    },
    allocationProject: {
      allocationLabel: "Alokasi dana",
      allocationValue: "Ponor ~73 Unit PC57-7",
      costStructure: ["Success Fee Penjualan 12%", "Garansi 1%", "Insentif 1%"],
      riskMitigation: [
        "Grade Resiko: B",
      ],
    },

  },
] satisfies Array<
  Pick<
    InvestmentProject,
    | "slug"
    | "name"
    | "status"
    | "category"
    | "description"
    | "image"
    | "images"
    | "goalsInvestment"
    | "minimumInvestment"
    | "period"
    | "requirement"
    | "simulatedReturn"
    | "allocationProject"
    | "commercial"
  >
>;

export const investmentProjects: InvestmentProject[] = projectRecords.map(
  (project) => ({
    ...project,
    coverImage: project.image,
    gallery: project.images,
    overview: project.description,
    investmentPeriod: project.period,
    investment: {
      requirement: project.requirement,
      simulatedReturn: project.simulatedReturn,
    },
  }),
);

export const investments = investmentProjects;

export function getInvestmentBySlug(slug: string) {
  return investments.find((investment) => investment.slug === slug);
}