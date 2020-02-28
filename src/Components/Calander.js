import React from "react";
import styled from "styled-components";
import DayBox from "./DayBox";
import WeekBox from "./WeekBox";

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const MakeDate = (NowM, NowY) => {
  let D = new Array(0);
  for (
    let i = 1 - new Date(`${NowY}-${NowM}-01`).getDay();
    i <= new Date(NowY, NowM, 0).getDate();
    i++
  ) {
    D.push(i);
  }
  return D;
};

const MakeWeek = ["일", "월", "화", "수", "목", "금", "토"].map(day => (
  <WeekBox key={day}>{day}</WeekBox>
));

const Calander = ({ NowMonth, NowYear }) => {
  return (
    <Container>
      {MakeWeek}
      {MakeDate(NowMonth, NowYear).map((date, index) => (
        <DayBox NowD={date} key={index} NowM={NowMonth} NowY={NowYear} />
      ))}
    </Container>
  );
};

export default Calander;
