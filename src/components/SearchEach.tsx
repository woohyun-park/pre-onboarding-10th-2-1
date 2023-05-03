import styled from "styled-components";
import { IconSearch } from "../assets/icons/IconSearch";
import { COLOR } from "../utils/constant";

type Props = {
  value: string;
};

export const SearchEach = ({ value }: Props) => {
  return (
    <S.Cont>
      <S.IconSearchCont>
        <IconSearch />
      </S.IconSearchCont>
      <div>{value}</div>
    </S.Cont>
  );
};

const S = {
  Cont: styled.div`
    display: flex;
    align-items: center;
    padding: 0.625rem 2rem;
    &:hover {
      background-color: ${COLOR.bgHover};
      cursor: pointer;
    }
  `,
  IconSearchCont: styled.div`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    color: ${COLOR.txt3};
  `,
};
