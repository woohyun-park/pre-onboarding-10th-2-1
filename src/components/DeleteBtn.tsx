import React from "react";
import styled from "styled-components";
import { IconX } from "../assets/icons/IconX";
import { COLOR } from "../utils/constant";

type Props = {
  isVisible: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const DeleteBtn = ({ isVisible, onClick }: Props) => {
  return (
    <S.IconXCont onClick={onClick} style={{ opacity: !isVisible ? "0" : "1" }}>
      <IconX />
    </S.IconXCont>
  );
};

const S = {
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
};
