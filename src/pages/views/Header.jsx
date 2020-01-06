import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Logo, Navbar } from '../../components/views/index';
import { BackgroundColors } from '../../_website/layout/colors';
import logo from '../../_website/images/logo.png'

const HeaderSection = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${ BackgroundColors.DARK };
`

const LogoWrapper = styled.a``

const Header = ()=> {
    return (
      <HeaderSection>
        <FlexContainer>
            <LogoWrapper href="/" >
              <Logo src={logo} />
            </LogoWrapper>
            <Navbar />
        </FlexContainer>
      </HeaderSection>
    )
};

export { Header };
