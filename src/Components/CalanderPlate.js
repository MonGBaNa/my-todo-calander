import React, { useState } from "react";
import styled from "styled-components";
import Calander from "./Calander";

const Container = styled.div`
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-rows: 30px auto 25px;
    padding: 10px 16px;
    background-color: #acacac;
    width: 600px;
    height: 400px;
    position: relative;
    margin: 10% auto;
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: 30px auto 25px;
    padding: 10px 16px;
    background-color: #acacac;
    width: 400px;
    height: 350px;
    position: relative;
    margin: 10% auto;
    border-radius: 4px;
  }
`;

const MonthSection = styled.div`
  @media screen and (min-width: 769px) {
    font-weight: 600;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(0, 0, 0, 0.65);
  }
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

const CalanderSection = styled.div`
  background-color: white;
  padding: 4px 8px;
`;

const ButtonSection = styled.div`
  @media screen and (min-width: 769px) {
    background-color: rgba(100, 100, 100, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    background-color: rgba(100, 100, 100, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Btn = styled.div`
  display: inline-block;
  height: 16px;
  width: 20px;
  background-color: white;
  margin-right: 3px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #cccccc;
    box-shadow: 1px 1px 1px black;
  }
`;

const CalanderPlate = () => {
  const Now = new Date();
  const [month, setMonth] = useState(Now.getMonth() + 1);
  const [year, setYear] = useState(Now.getFullYear());
  const Next = () => {
    setMonth((month % 12) + 1);
    if (month + 1 > 12) setYear(year + 1);
  };
  const Prev = () => {
    if (month - 1 <= 0) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };
  return (
    <Container>
      <MonthSection>
        {year}년 {month < 10 ? `0${month}` : month}월
      </MonthSection>
      <CalanderSection>
        <Calander NowMonth={month < 10 ? `0${month}` : month} NowYear={year} />
      </CalanderSection>
      <ButtonSection>
        <Btn onClick={Prev}> ◀ </Btn>
        <Btn onClick={Next}> ▶ </Btn>
      </ButtonSection>
    </Container>
  );
};

export default CalanderPlate;
