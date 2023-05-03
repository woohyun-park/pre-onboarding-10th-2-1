import { ISearch } from "../types/types";

export const formatRecommendedKeywords = (keywords: ISearch[]) => {
  return keywords.map((e: ISearch) => e.name).slice(0, 7);
};

export const formatRecentKeywords = (keywords: string[]) => {
  return keywords.slice(0, 7);
};
