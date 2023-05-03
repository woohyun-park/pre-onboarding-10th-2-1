import { formatRecommendedKeywords } from "../utils/format";

export const readRecentKeywords = () => {
  const recentKeywords = localStorage.getItem("recentKeywords");
  if (recentKeywords) {
    return JSON.parse(recentKeywords);
  } else {
    return [];
  }
};

export const updateRecentKeywords = (keywords: string[]) => {
  return localStorage.setItem("recentKeywords", JSON.stringify(keywords));
};

export const readCachedKeywords = (keyword: string) => {
  const cachedKeywords = localStorage.getItem(keyword);
  if (cachedKeywords) {
    return formatRecommendedKeywords(JSON.parse(cachedKeywords).data);
  }
  return null;
};
