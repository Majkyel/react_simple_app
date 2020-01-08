import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1300px;
  padding: ${props => props.padding ? props.padding : '20px'};
  margin: auto;
`;

const Container = ({children, className, padding})=> {
  return (
    <MainContainer className={className} padding={padding}>
      {children}
    </MainContainer>
  )
}

export { Container };
