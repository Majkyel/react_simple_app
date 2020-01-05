import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1300px;
  padding: 20px;
  margin: auto;
`;

const Container = ({children})=> {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export { Container };
