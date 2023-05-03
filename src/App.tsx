import React, { useState } from "react";
import styled from "styled-components";
import {
  IllustPersonOne,
  IllustPersonThree,
  IllustPersonTwo,
} from "./assets/illust";
import { Search } from "./components/Search";
import { Title } from "./components/Title";

function App() {
  return (
    <S.ContWrap>
      <S.Cont>
        <Title value="국내 모든 임상시험 검색하고 온라인으로 참여하기" />
        <Search placeHolder="질환명을 입력해 주세요" />
        <S.IllustContOne>
          <IllustPersonOne />
        </S.IllustContOne>
        <S.IllustContTwo>
          <IllustPersonTwo />
        </S.IllustContTwo>
        <S.IllustContThree>
          <IllustPersonThree />
        </S.IllustContThree>
      </S.Cont>
    </S.ContWrap>
  );
}

const S = {
  ContWrap: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: RGB(202, 233, 255);
  `,
  Cont: styled.div`
    width: 360px;
    height: 100vh;
    position: relative;
    padding: 120px 0 290px;
    @media screen and (min-width: 1040px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 1040px;
      padding: 80px 0 160px;
    }
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
  IllustContOne: styled.div`
    width: 88px;
    position: absolute;
    left: 32px;
    top: 334px;
    @media screen and (min-width: 1040px) {
      width: 148px;
      left: 0;
      top: 200px;
    }
  `,
  IllustContTwo: styled.div`
    width: 95px;
    position: absolute;
    right: 99px;
    top: 364px;
    @media screen and (min-width: 1040px) {
      width: 130px;
      right: 124px;
      top: 280px;
    }
  `,
  IllustContThree: styled.div`
    width: 101px;
    position: absolute;
    right: 32px;
    top: 330px;
    @media screen and (min-width: 1040px) {
      width: 116px;
      right: 20px;
      top: 188px;
    }
  `,
};

export default App;
