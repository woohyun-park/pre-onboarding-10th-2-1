import { useContext, useEffect } from "react";
import { readRecentKeywords } from "../apis/api";
import { GlobalContext } from "../App";
import { useClickOutside } from "../hooks/useClickOutside";
import { SearchInput } from "./SearchInput";
import { SearchList } from "./SearchList";

export const Search = () => {
  const {
    keyword,
    isFocused,
    setIsFocused,
    setSelected,
    setRecommendedKeywords,
  } = useContext(GlobalContext);

  const { ref } = useClickOutside({
    onClickOutside: () => {
      setIsFocused(false);
      setSelected(0);
    },
  });

  useEffect(() => {
    if (keyword === "") {
      const recentKeywords = readRecentKeywords();
      recentKeywords && setRecommendedKeywords(recentKeywords);
    }
  }, [keyword]);

  return (
    <div ref={ref}>
      <SearchInput />
      {isFocused && <SearchList />}
    </div>
  );
};
