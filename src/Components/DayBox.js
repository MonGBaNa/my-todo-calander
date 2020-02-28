import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  ${props => {
    if (props.fill) {
      return `
        &:hover {
          cursor: pointer;
          background-color: rgba(100, 100, 100, 0.18);
        }
        `;
    }
  }}
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

const DayBox = ({ NowD, NowM, NowY }) => {
  const NowDate = `${NowY}-${NowM}-${NowD < 10 ? `0${NowD}` : NowD}`;

  const [state, setState] = useState({
    isOpen: false
  });

  const openModal = () => {
    setState({
      isOpen: true
    });
  };

  const closeModal = () => {
    setState({
      isOpen: false
    });
  };
  return NowD <= 0 ? (
    <Container>{"   "}</Container>
  ) : (
    <>
      <Container fill="true" onClick={openModal}>
        {NowD < 10 ? `0${NowD}` : NowD}일
      </Container>
      <Modal selDate={NowDate} isOpen={state.isOpen} close={closeModal} />
    </>
  );
};

export default DayBox;
