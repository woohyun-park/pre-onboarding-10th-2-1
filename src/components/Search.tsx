import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { fetchSearch } from "../apis/api";
import { readCachedKeywords, readRecentKeywords } from "../apis/local";
import { GlobalContext } from "../App";
import { IconSearch } from "../assets/icons/IconSearch";
import useDebounce from "../hooks/useDebounce";
import { COLOR } from "../utils/constant";
import { formatRecommendedKeywords } from "../utils/format";
import { wrapPromise } from "../utils/promise";
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
    setIsSearching,
  } = useContext(GlobalContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useDebounce({
    value: keyword,
    action: async () => {
      if (keyword !== "") {
        if (!readCachedKeywords(keyword)) {
          await wrapPromise(() => setIsSearching(true), 0);
          const res = await fetchSearch(keyword);
          await wrapPromise(() => setIsSearching(false), 0);
          setRecommendedKeywords(formatRecommendedKeywords(res.data));
        }
      } else {
        setRecommendedKeywords(readRecentKeywords);
      }
    },
    delay: 5000,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    const cachedKeywords = readCachedKeywords(newKeyword);
    if (cachedKeywords) {
      setRecommendedKeywords(cachedKeywords);
    }
  };

  const onFocus = () => {
    setIsFocused(true);
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
      onSearchClick(recommendedKeywords[selected - 1]);
    }
    console.log(e.key);
  };

  return (
    <S.Cont>
      <S.Input
        value={keyword}
        onChange={onChange}
        onFocus={onFocus}
        // onBlur={onBlur}
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
      {keyword === "" && !isFocused && (
        <PlaceHolder
          placeHolder="질환명을 입력해 주세요"
          onClick={onInputClick}
        />
      )}
      {isFocused && <DeleteBtn onClick={onDeleteClick} />}
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
