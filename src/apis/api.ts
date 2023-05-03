import axios from "axios";

export const fetchSearch = async (name: string) => {
  const res = await axios.get("api/v1/search-conditions/", {
    params: { name },
  });
  console.log("fetch success", res);
  return res;
};
