import React from 'react';
import styled from 'styled-components';

const FContainer = styled.div`
  max-width: 1300px;
  padding: 20px;
  display: flex;
  justify-content:  space-between;
  margin: auto;
`;

const FlexContainer = ({children})=> {
  return (
    <FContainer>
      {children}
    </FContainer>
  )
}

export { FlexContainer };
