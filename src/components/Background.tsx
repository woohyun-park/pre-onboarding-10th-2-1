import styled from "styled-components";
import {
  IllustPersonOne,
  IllustPersonThree,
  IllustPersonTwo,
} from "../assets/illusts";

export const Background = () => {
  return (
    <>
      <S.IllustContOne>
        <IllustPersonOne />
      </S.IllustContOne>
      <S.IllustContTwo>
        <IllustPersonTwo />
      </S.IllustContTwo>
      <S.IllustContThree>
        <IllustPersonThree />
      </S.IllustContThree>
    </>
  );
};

const S = {
  IllustContOne: styled.div`
    position: absolute;
    width: 148px;
    left: 0;
    top: 200px;
  `,
  IllustContTwo: styled.div`
    position: absolute;
    width: 130px;
    right: 124px;
    top: 280px;
  `,
  IllustContThree: styled.div`
    position: absolute;
    width: 116px;
    right: 20px;
    top: 188px;
  `,
};
