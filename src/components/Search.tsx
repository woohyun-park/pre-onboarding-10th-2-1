import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { fetchSearch } from "../apis/api";
import { GlobalContext } from "../App";
import { IconSearch } from "../assets/icons/IconSearch";
import { IconX } from "../assets/icons/IconX";
import useDebounce from "../hooks/useDebounce";
import { ISearch } from "../types/types";
import { COLOR } from "../utils/constant";
import { DeleteBtn } from "./DeleteBtn";
import { PlaceHolder } from "./PlaceHolder";

export const Search = () => {
  const {
    keyword,
    recommendedKeywords,
    selected,
    isFocused,

    setKeyword,
    setRecommendedKeywords,
    setSelected,
    setIsFocused,
  } = useContext(GlobalContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useDebounce({
    value: keyword,
    action: async () => {
      if (keyword !== "") {
        const res = await fetchSearch(keyword);
        console.log(res.data);
        const newRecommendedKeywords = res.data
          .map((e: ISearch) => e.name)
          .slice(0, 7);
        setRecommendedKeywords(newRecommendedKeywords);
      } else {
        setRecommendedKeywords([]);
      }
    },
    delay: 1000,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    const cachedRecommendedKeywords = localStorage.getItem(newKeyword);
    if (cachedRecommendedKeywords) {
      setRecommendedKeywords(
        JSON.parse(cachedRecommendedKeywords)
          .data.map((e: ISearch) => e.name)
          .slice(0, 7)
      );
    }
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onInputClick = () => {
    inputRef.current?.focus();
  };

  const onDeleteClick = () => {
    console.log("onDeleteClick");
    setKeyword("");
    inputRef.current?.focus();
  };

  const onSearchClick = (keyword: string) => {
    const recentKeywords = localStorage.getItem("recentKeywords");
    let newRecentKeywords;
    if (recentKeywords) {
      newRecentKeywords = [
        keyword,
        ...JSON.parse(localStorage.getItem("recentKeywords") || ""),
      ];
    } else {
      newRecentKeywords = [keyword];
    }

    localStorage.setItem("recentKeywords", JSON.stringify(newRecentKeywords));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(selected);
    const key = e.key;
    if (key === "ArrowDown") {
      console.log(selected, recommendedKeywords);
      setSelected(selected + 1 > recommendedKeywords.length ? 1 : selected + 1);
    } else if (key === "ArrowUp") {
      setSelected(selected - 1 < 1 ? recommendedKeywords.length : selected - 1);
    } else if (key === "Enter") {
      // onSearchClick(recommendedKeywords);
    }
    console.log(e.key);
  };

  return (
    <S.Cont>
      <form onSubmit={(e) => e.preventDefault()}>
        <S.Input
          value={keyword}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          ref={inputRef}
        />
        {/* <input type="reset" value="X" onClick={onDeleteClick} /> */}
        {/* 
        {isFocused && (
          // <input type="reset" value="X" onClick={onDeleteClick} />
          <DeleteBtn onClick={onDeleteClick} isFocused={isFocused} />
          // <S.IconXCont onClick={onXClick}>
          //   <IconX />
          // </S.IconXCont>
        )} */}
      </form>
      <DeleteBtn isFocused={isFocused} onClick={onDeleteClick} />

      {keyword === "" && !isFocused && (
        <PlaceHolder
          placeHolder="질환명을 입력해 주세요"
          onClick={onInputClick}
        />
      )}

      <S.IconSearchCont onClick={() => onSearchClick(keyword)}>
        <IconSearch />
      </S.IconSearchCont>
    </S.Cont>
  );
};

const S = {
  Cont: styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  Input: styled.input`
    padding: 2.25rem 1.75rem;
    border-radius: 3rem;
    border: 0;
    box-shadow: 0 0.125rem 0.25rem ${COLOR.txt3};
    width: 480px;
    height: 3em;
    font-size: 1.25rem;
    box-sizing: border-box;
  `,
  IconSearchCont: styled.div`
    position: absolute;
    margin: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 2rem;
    padding: 1rem;
    background-color: ${COLOR.primary};
    color: ${COLOR.white};
    &:hover {
      cursor: pointer;
    }
  `,
};
