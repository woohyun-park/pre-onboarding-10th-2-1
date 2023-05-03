import styled from "styled-components";
import { IconSearch } from "../assets/icons/IconSearch";
import { COLOR } from "../utils/constant";

type Props = {
  placeHolder: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const SearchPlaceHolder = ({ placeHolder, onClick }: Props) => {
  return (
    <S.Cont onClick={onClick}>
      <S.IconCont>
        <IconSearch />
      </S.IconCont>
      <S.PlaceHolderCont>{placeHolder}</S.PlaceHolderCont>
    </S.Cont>
  );
};

const S = {
  Cont: styled.div`
    position: absolute;
    left: 0;
    color: ${COLOR.txt3};
    display: flex;
    margin: 1.75rem;
    align-items: center;
  `,
  IconCont: styled.div`
    width: 1rem;
    height: 1.125rem;
    margin-right: 0.5rem;
  `,
  PlaceHolderCont: styled.div``,
};
