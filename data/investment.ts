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
  commercial?: {
    purchasePrice?: string;
    sellingPrice?: string;
    successFee?: string;
    importFee?: string;
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

    minimumInvestment: "Rp20 Miliar",
    period: "12 Bulan",
    requirement: "35 Unit",
    simulatedReturn: "5%",
  },

  {
    slug: "pc57-7",
    name: "PC57-7",
    status: "coming-soon",
    category: "Equipment",

    description:
      "Project PC57-7 merupakan peluang strategic equipment yang sedang dipersiapkan Montana Global Investama untuk pengembangan dan perputaran bisnis.",

    image: "/pc571.jpg",

    images: [
      "/pc571.jpg",
      "/pc572.jpg",
      "/pc573.jpg",
      "/pc574.jpg",
    ],

    minimumInvestment: "Rp2 Miliar",
    period: "12 Bulan",
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
    | "minimumInvestment"
    | "period"
    | "requirement"
    | "simulatedReturn"
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