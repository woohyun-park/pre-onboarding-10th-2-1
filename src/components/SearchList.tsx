import { useContext, useEffect } from "react";
import styled from "styled-components";
import { readRecentKeywords } from "../apis/local";
import { GlobalContext } from "../App";
import { COLOR } from "../utils/constant";
import { SearchEach } from "./SearchEach";

export const SearchList = () => {
  const {
    keyword,
    recommendedKeywords,
    selected,
    isSearching,
    setRecommendedKeywords,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (keyword === "") {
      const recentKeywords = readRecentKeywords();
      recentKeywords && setRecommendedKeywords(recentKeywords);
    }
  }, [keyword]);

  return (
    <S.Cont>
      {isSearching ? (
        <S.Group>검색 중 ...</S.Group>
      ) : (
        <>
          <S.Group>{keyword === "" ? "최근 검색어" : "추천 검색어"}</S.Group>
          {recommendedKeywords.length === 0 && (
            <S.Message>
              {keyword === "" ? "최근" : "추천"} 검색어가 없습니다
            </S.Message>
          )}
          {recommendedKeywords.map((e, i) =>
            selected === i + 1 ? (
              <SearchEach value={e} selected />
            ) : (
              <SearchEach value={e} />
            )
          )}
        </>
      )}
    </S.Cont>
  );
};

const S = {
  Cont: styled.div`
    margin-top: 0.5rem;
    width: 480px;
    background-color: ${COLOR.white};
    border-radius: 2rem;
    padding: 1.625rem 0;
    box-sizing: border-box;
    box-shadow: 0 0.125rem 0.25rem ${COLOR.txt3};
  `,
  Group: styled.div`
    color: ${COLOR.txt2};
    font-size: 0.825rem;
    padding: 0 2rem;
    margin-bottom: 0.625rem;
  `,
  Message: styled.div`
    color: ${COLOR.txt3};
    font-size: 1rem;
    padding: 0.625rem 2rem;
  `,
};
