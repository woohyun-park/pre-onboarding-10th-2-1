import { useContext } from "react";
import { GlobalContext } from "../App";
import { useClickOutside } from "../hooks/useClickOutside";
import { SearchInput } from "./SearchInput";
import { SearchList } from "./SearchList";

export const Search = () => {
  const { isFocused, setIsFocused, setSelected } = useContext(GlobalContext);

  const { ref } = useClickOutside({
    onClickOutside: () => {
      setIsFocused(false);
      setSelected(0);
    },
  });
  return (
    <div ref={ref}>
      <SearchInput />
      {isFocused && <SearchList />}
    </div>
  );
};
