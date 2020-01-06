import React from 'react';
import styled from 'styled-components';
import { BackgroundColors } from '../../_website/layout/colors';

const Wrapper = styled.section`
  padding: 50px 0px;
  position: relative;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : BackgroundColors.DARK };
`;

const SectionWrapper = ({children, className, backgroundColor})=> {
  return (
    <Wrapper className={className} backgroundColor={backgroundColor} >
      {children}
    </Wrapper>
  )
}

export { SectionWrapper }
