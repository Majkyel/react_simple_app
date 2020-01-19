import React from 'react';
import styled from 'styled-components';
import { ButtonColors, FontColors, WebsiteColors } from '../../_website/layout/colors';

const ButtonWrapper = styled.div`
  position: relative;
  display: block;
  text-align: ${props => props.position ? props.position : 'left'};
`;

const ButtonElement = styled.button`
  padding: .8rem 1.5rem;
  color: ${FontColors.LIGHT};
  border: ${props=> props.border? props.border : 'none' };
  outline: none;
  letter-spacing: 1px;
  text-shadow: 0px 0px 2px ${WebsiteColors.BLACK};
  border-radius: 13px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ButtonColors.ENTER};
`;

const Button = ({children, bgColor, position, className, border})=> {
  return (
    <ButtonWrapper position={position}>
      <ButtonElement backgroundColor={bgColor} className={className} border={border} >
        {children}
      </ButtonElement>
    </ButtonWrapper>
  )
}

export { Button }
