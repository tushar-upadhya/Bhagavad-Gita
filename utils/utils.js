import { aboutData } from "./utilsData";

export const uniqueCategories = [
  "all",
  ...new Set(aboutData.map((item) => item.category)),
];
