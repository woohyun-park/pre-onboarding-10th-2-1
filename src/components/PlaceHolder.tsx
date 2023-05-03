import styled from "styled-components";
import { IconSearch } from "../assets/icons/IconSearch";
import { COLOR } from "../utils/constant";

type Props = {
  placeHolder: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const PlaceHolder = ({ placeHolder, onClick }: Props) => {
  return (
    <S.PlaceHolder onClick={onClick}>
      <S.IconSearchSmCont>
        <IconSearch />
      </S.IconSearchSmCont>
      <div>{placeHolder}</div>
    </S.PlaceHolder>
  );
};

const S = {
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
};
