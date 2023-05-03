import axios from "axios";

export const fetchSearch = async (name: string) => {
  const cache = localStorage.getItem(name);
  if (cache) return JSON.parse(cache);
  const res = await axios.get("api/v1/search-conditions/", {
    params: { name },
  });
  console.log("fetch success", res);
  localStorage.setItem(name, JSON.stringify(res));
  return res;
};
