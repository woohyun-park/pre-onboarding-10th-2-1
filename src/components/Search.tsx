import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { fetchSearch } from "../apis/api";
import { IconSearch } from "../assets/icons/IconSearch";
import { IconX } from "../assets/icons/IconX";
import useDebounce from "../hooks/useDebounce";
import { COLOR } from "../utils/constant";

type Props = {
  txt: string;
  setTxt: React.Dispatch<React.SetStateAction<string>>;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Search = ({ txt, setTxt, isFocused, setIsFocused }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useDebounce({
    value: txt,
    action: () => txt !== "" && fetchSearch(txt),
    delay: 1000,
  });

  useEffect(() => {}, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    // setIsFocused(false);
  };

  const onInputClick = () => {
    inputRef.current?.focus();
  };

  const onXClick = () => {
    setTxt("");
    inputRef.current?.focus();
  };

  return (
    <S.Cont>
      <S.Input
        value={txt}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
      />
      {!isFocused && (
        <S.PlaceHolder onClick={onInputClick}>
          <S.IconSearchSmCont>
            <IconSearch />
          </S.IconSearchSmCont>
          <div>질환명을 입력해 주세요</div>
        </S.PlaceHolder>
      )}
      {isFocused && (
        <S.IconXCont onClick={onXClick}>
          <IconX />
        </S.IconXCont>
      )}
      <S.IconSearchCont>
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
  PlaceHolder: styled.div`
    position: absolute;
    left: 0;
    color: ${COLOR.txt3};
    display: flex;
    margin: 1.75rem;
    align-items: center;
  `,
  IconSearchSmCont: styled.div`
    width: 1rem;
    height: 1.125rem;
    margin-right: 0.5rem;
  `,
  IconXCont: styled.div`
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    right: 4.25rem;
    border-radius: 2rem;
    background-color: ${COLOR.txt3};
    color: ${COLOR.white};
    &:hover {
      cursor: pointer;
    }
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
