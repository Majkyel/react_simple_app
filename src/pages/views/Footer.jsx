import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/views/index';
import { BackgroundColors, FontColors } from '../../_website/layout/colors';
import Text from '../../_website/texts/texts.json';

const FooterWrapper = styled.footer`
  background-color: ${ BackgroundColors.DARK };
  padding: 10px 0;
`;

const FooterText = styled.p`
  color: ${ FontColors.LIGHT };
  font-size: .6rem;
`;

const FooterContainer = styled(Container)`
  border-top: 1px solid yellow;
  border-bottom: 1px solid yellow;
  text-align: center;
`;

const Footer = ()=> {
  return (
    <FooterWrapper>
      <FooterContainer padding="2px">
        <FooterText>{Text.FOOTER_TEXT}</FooterText>
      </FooterContainer>
    </FooterWrapper>
  )
}

export { Footer };
