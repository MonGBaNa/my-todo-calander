import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => {
    if (props.children === "일") return "#E1979E";
    else if (props.children === "토") return "#97a0e1";
    else return "#D8D8D8";
  }};
  @media screen and (min-width: 769px) {
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
  }
  @media screen and (max-width: 768px) {
    border: 2px solid black;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
  }
`;

const WeekBox = ({ children }) => {
  return <Container>{children}</Container>;
};

export default WeekBox;
