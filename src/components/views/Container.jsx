import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1300px;
  padding: 20px;
  margin: auto;
`;

const Container = ({children, className})=> {
  return (
    <MainContainer className={className}>
      {children}
    </MainContainer>
  )
}

export { Container };
