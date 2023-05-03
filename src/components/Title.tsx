import styled from "styled-components";

type Props = {
  value: string;
};

export const Title = ({ value }: Props) => {
  return <S.Title>{value}</S.Title>;
};

const S = {
  Title: styled.h1`
    text-align: center;
    @media screen and (min-width: 1040px) {
      max-width: 480px;
      margin-bottom: 40px;
      font-size: 2.125rem;
      word-break: keep-all;
    }
  `,
};
