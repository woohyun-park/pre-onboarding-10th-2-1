import {
  formatRecentKeywords,
  formatRecommendedKeywords,
} from "../utils/format";

export const readRecentKeywords = () => {
  const recentKeywords = localStorage.getItem("recentKeywords");
  if (recentKeywords) {
    return formatRecentKeywords(JSON.parse(recentKeywords));
  } else {
    return [];
  }
};

export const updateRecentKeywords = (keyword: string) => {
  const newRecentKeywords = [
    keyword,
    ...JSON.parse(localStorage.getItem("recentKeywords") || ""),
  ];
  console.log(newRecentKeywords);
  localStorage.setItem("recentKeywords", JSON.stringify(newRecentKeywords));
};

export const readCachedKeywords = (keyword: string) => {
  const cachedKeywords = localStorage.getItem(keyword);
  if (cachedKeywords) {
    return formatRecommendedKeywords(JSON.parse(cachedKeywords).data);
  }
  return null;
};
