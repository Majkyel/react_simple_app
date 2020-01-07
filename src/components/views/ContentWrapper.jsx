import React from 'react';
import styled from 'styled-components';

const  Wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%' };
  padding: ${props => props.padding ? props.padding : '20px' };
  text-align: ${props => props.contentAlign ? props.contentAlign : null };
  background: url(${props => props.backgroundIMG ? props.backgroundIMG : null });
  background-size: ${props => props.backgroundIMG ? 'cover' : null };
  background-position: ${props => props.backgroundPOS ? props.backgroundPOS : null };
  min-height: ${props => props.backgroundIMG ? '400px' : null };
  box-shadow: ${props => props.boxShadow ? props.boxShadow : null };
`;

const ContentWrapper = ({className, children, maxWidth, padding, contentAlign, backgroundIMG, backgroundPOS, boxShadow})=> {
  return (
    <Wrapper
      className={className}
      boxShadow={boxShadow}
      maxWidth={maxWidth}
      padding={padding}
      contentAlign={contentAlign}
      backgroundIMG={backgroundIMG}
      backgroundPOS={backgroundPOS}
    >
      {children}
    </Wrapper>
  )
}

export { ContentWrapper }
