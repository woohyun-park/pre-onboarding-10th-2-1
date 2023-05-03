import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchSearch } from "../apis/api";
import { IconSearch } from "../assets/IconSearch";
import useDebounce from "../hooks/useDebounce";

type Props = {
  placeHolder?: string;
};

export const Search = ({ placeHolder }: Props) => {
  const [txt, setTxt] = useState("");

  useDebounce({
    value: txt,
    action: () => txt !== "" && fetchSearch(txt),
    delay: 1000,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <S.Cont>
      <S.Input value={txt} onChange={onChange} placeholder={placeHolder} />
      <S.IconSearch>
        <IconSearch />
      </S.IconSearch>
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
    width: 320px;
    padding: 1rem;
    border-radius: 2rem;
    border: 0;
    box-shadow: 0px 2px 4px rgba(30, 32, 37, 0.1);
    @media screen and (min-width: 1040px) {
      width: 480px;
    }
  `,
  IconSearch: styled.div`
    width: 1rem;
    position: absolute;
    margin: 1rem;
  `,
};
