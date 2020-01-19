import React from 'react';
import styled from 'styled-components';
import { WebsiteColors } from '../../_website/layout/colors';

const CircleWrapper = styled.div`
  max-width: ${ props => props.maxWidth ? props.maxWidth : '50%'};
  width: 100%;
  padding: 10px;
  left: 0;
  right: 0;
  align-self: center;
`;

const Circle = styled.div`
  position: relative;
  background-color: ${ props => props.backgroundColor ? props.backgroundColor : null};
  border-radius: 50%;
  border: 2px solid ${WebsiteColors.BLACK};
  width: 300px;
  height: 300px;
  margin: auto;
  display: flex;
`;

const PowerCircle = ({className , maxWidth, backgroundColor, children}) => {
  return (
    <CircleWrapper
      className={className}
      maxWidth={maxWidth}
      >
        <Circle backgroundColor={backgroundColor}>
          {children}
        </Circle>
    </CircleWrapper>
  )
}

export { PowerCircle };
