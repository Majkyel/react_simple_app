import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/views/index';
import { BackgroundColors, FontColors } from '../../_website/layout/colors';

const FooterWrapper = styled.footer`
  background-color: ${ BackgroundColors.DARK };
`;

const FooterText = styled.p`
  color: ${ FontColors.LIGHT };
`;

const Footer = ()=> {
  return (
    <FooterWrapper>
      <Container>
        <FooterText>Example footer!</FooterText>
      </Container>
    </FooterWrapper>
  )
}

export { Footer };
