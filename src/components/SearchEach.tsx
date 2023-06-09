import styled from "styled-components";
import { IconSearch } from "../assets/icons/IconSearch";
import { COLOR } from "../utils/constant";

type Props = {
  value: string;
  onMouseEnter: () => void;
  onClick: () => void;
  selected?: boolean;
};

export const SearchEach = ({
  value,
  selected,
  onMouseEnter,
  onClick,
}: Props) => {
  return (
    <>
      {selected ? (
        <S.SelectedCont onClick={onClick} onMouseEnter={onMouseEnter}>
          <S.IconSearchCont>
            <IconSearch />
          </S.IconSearchCont>
          <div>{value}</div>
        </S.SelectedCont>
      ) : (
        <S.Cont onClick={onClick} onMouseEnter={onMouseEnter}>
          <S.IconSearchCont>
            <IconSearch />
          </S.IconSearchCont>
          <div>{value}</div>
        </S.Cont>
      )}
    </>
  );
};

const S = {
  Cont: styled.div`
    display: flex;
    align-items: center;
    padding: 0.625rem 2rem;
    &:hover {
      cursor: pointer;
    }
  `,
  SelectedCont: styled.div`
    display: flex;
    align-items: center;
    padding: 0.625rem 2rem;
    background-color: ${COLOR.bgHover};
    &:hover {
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
