import styled from "styled-components";
import { COLOR } from "../utils/constant";
import { SearchEach } from "./SearchEach";

type Props = {
  list: string[];
};

export const SearchList = ({ list }: Props) => {
  return (
    <S.Cont>
      <S.Group>최근 검색어</S.Group>
      {list.map((e) => (
        <SearchEach value={e} />
      ))}
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
  `,
};
