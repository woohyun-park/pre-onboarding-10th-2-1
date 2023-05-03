import React, { useState } from "react";
import styled from "styled-components";
import {
  IllustPersonOne,
  IllustPersonThree,
  IllustPersonTwo,
} from "./assets/illusts";
import { Search } from "./components/Search";
import { SearchList } from "./components/SearchList";
import { Title } from "./components/Title";

function App() {
  const [txt, setTxt] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.ContWrap>
      <S.Cont>
        <Title value="국내 모든 임상시험 검색하고 온라인으로 참여하기" />
        <Search
          txt={txt}
          isFocused={isFocused}
          setTxt={setTxt}
          setIsFocused={setIsFocused}
        />
        {isFocused && <SearchList list={["테스트", "중입니다"]} />}
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
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 1040px;
    padding: 80px 0 160px;
  `,
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

export default App;
