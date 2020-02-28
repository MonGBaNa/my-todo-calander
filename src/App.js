import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CalanderPlate from './Components/CalanderPlate';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
    
  body,html {
    width: 100%;
    height: 100%;
    background-color:#E9DFF2;
  }
`;

const Container = styled.div``;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <CalanderPlate/>
    </Container>
  );
}

export default App;
