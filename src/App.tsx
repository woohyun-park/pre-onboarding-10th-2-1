import React, { useState } from "react";
import styled from "styled-components";
import {
  IllustPersonOne,
  IllustPersonThree,
  IllustPersonTwo,
} from "./assets/illusts";
import { Search } from "./components/Search";
import { SearchList } from "./components/SearchList";
import { Title } from "./components/Title";
import { useClickOutside } from "./hooks/useClickOutside";

type IGlobalContext = {
  keyword: string;
  recommendedKeywords: string[];
  selected: number;
  isFocused: boolean;
  isSearching: boolean;

  setKeyword: Function;
  setRecommendedKeywords: Function;
  setSelected: Function;
  setIsFocused: Function;
  setIsSearching: Function;
};

export const GlobalContext = React.createContext<IGlobalContext>({
  keyword: "",
  recommendedKeywords: [],
  selected: 0,
  isFocused: false,
  isSearching: false,

  setKeyword: () => {},
  setRecommendedKeywords: () => {},
  setSelected: () => {},
  setIsFocused: () => {},
  setIsSearching: () => {},
});

function App() {
  const [keyword, setKeyword] = useState("");
  const [recommendedKeywords, setRecommendedKeywords] = useState<string[]>([]);
  const [selected, setSelected] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const { ref } = useClickOutside({
    onClickOutside: () => {
      setIsFocused(false);
      setSelected(0);
    },
  });

  return (
    <GlobalContext.Provider
      value={{
        keyword,
        recommendedKeywords,
        selected,
        isFocused,
        isSearching,
        setKeyword,
        setRecommendedKeywords,
        setSelected,
        setIsFocused,
        setIsSearching,
      }}
    >
      <S.ContWrap>
        <S.Cont>
          <Title value="국내 모든 임상시험 검색하고 온라인으로 참여하기" />
          <div ref={ref}>
            <Search />
            {isFocused && <SearchList />}
          </div>
          <S.IllustContOne>
            <IllustPersonOne />
          </S.IllustContOne>
          <S.IllustContTwo>
            <IllustPersonTwo />
          </S.IllustContTwo>
          <S.IllustContThree>
            <IllustPersonThree />
          </S.IllustContThree>
        </S.Cont>
      </S.ContWrap>
    </GlobalContext.Provider>
  );
}

const S = {
  ContWrap: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: RGB(202, 233, 255);
  `,
  Cont: styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 1040px;
    padding: 80px 0 160px;
    box-sizing: border-box;
  `,
  IllustContOne: styled.div`
    position: absolute;
    width: 148px;
    left: 0;
    top: 200px;
  `,
  IllustContTwo: styled.div`
    position: absolute;
    width: 130px;
    right: 124px;
    top: 280px;
  `,
  IllustContThree: styled.div`
    position: absolute;
    width: 116px;
    right: 20px;
    top: 188px;
  `,
};

export default App;
