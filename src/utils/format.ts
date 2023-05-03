import { ISearch } from "../types/types";

export const formatRecommendedKeywords = (keywords: ISearch[]) => {
  return keywords.map((e: ISearch) => e.name).slice(0, 7);
};
