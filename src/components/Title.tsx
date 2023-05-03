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
    max-width: 480px;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    word-break: keep-all;
  `,
};
