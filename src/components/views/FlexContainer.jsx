import React from 'react';
import styled from 'styled-components';

const FContainer = styled.div`
  max-width: 1300px;
  padding: ${props => props.padding ? props.padding : '20px'};
  display: flex;
  justify-content:  space-between;
  margin: auto;
`;

const FlexContainer = ({children, className, padding})=> {
  return (
    <FContainer className={className} padding={padding}>
      {children}
    </FContainer>
  )
}

export { FlexContainer };
