import { client } from "../utils/fetch";
import {
  formatRecentKeywords,
  formatRecommendedKeywords,
} from "../utils/format";

export const fetchSearch = async (keyword: string) => {
  const cache = localStorage.getItem(keyword);
  if (cache) return JSON.parse(cache);
  console.info("calling api");
  const res = await client.get(`/api/v1/search-conditions/?name=${keyword}`);
  localStorage.setItem(keyword, JSON.stringify(res));
  return res;
};

export const readRecentKeywords = () => {
  const recentKeywords = localStorage.getItem("recentKeywords");
  if (recentKeywords) {
    return formatRecentKeywords(JSON.parse(recentKeywords));
  } else {
    return [];
  }
};

export const updateRecentKeywords = (keyword: string) => {
  const recentKeywords = localStorage.getItem("recentKeywords");
  let newRecentKeywords;
  if (recentKeywords) {
    newRecentKeywords = formatRecentKeywords([
      keyword,
      ...JSON.parse(localStorage.getItem("recentKeywords") || ""),
    ]);
  } else {
    newRecentKeywords = [keyword];
  }
  localStorage.setItem("recentKeywords", JSON.stringify(newRecentKeywords));
  return newRecentKeywords;
};

export const readCachedKeywords = (keyword: string) => {
  const cachedKeywords = localStorage.getItem(keyword);
  if (cachedKeywords) {
    return formatRecommendedKeywords(JSON.parse(cachedKeywords).data);
  }
  return null;
};
