import React, { useState } from "react";
import styled from "styled-components";
import { Background } from "./components/Background";
import { Search } from "./components/Search";
import { Title } from "./components/Title";

type IGlobalContext = {
  keyword: string;
  recommendedKeywords: string[];
  selected: number;
  isFocused: boolean;
  isSearching: boolean;

  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setRecommendedKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
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
          <Search />
          <Background />
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
};

export default App;
