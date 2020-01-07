import React, {memo} from 'react';
import styled from 'styled-components';
import { BackgroundColors } from '../../_website/layout/colors';

const Wrapper = styled.section`
  padding: ${props => props.padding ? props.padding : "50px 0px" };
  position: relative;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : BackgroundColors.DARK };
`;

const SectionWrapper = ({children, className, backgroundColor, padding})=> {
  return (
    <Wrapper className={className} backgroundColor={backgroundColor} padding={padding} >
      {children}
    </Wrapper>
  )
}

export { SectionWrapper }
