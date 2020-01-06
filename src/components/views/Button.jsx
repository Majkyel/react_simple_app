import React from 'react';
import styled from 'styled-components';
import { ButtonColors } from '../../_website/layout/colors';

const ButtonWrapper = styled.div`
  position: relative;
  display: block;
  text-align: ${props => props.position ? props.position : 'left'};
`;

const ButtonElement = styled.button`
  padding: .8rem 1.5rem;
  color: white;
  border: none;
  outline: none;
  letter-spacing: 1px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ButtonColors.ENTER};
`;

const Button = ({children, bgColor, position, className})=> {
  return (
    <ButtonWrapper position={position}>
      <ButtonElement backgroundColor={bgColor} className={className} >
        {children}
      </ButtonElement>
    </ButtonWrapper>
  )
}

export { Button }
