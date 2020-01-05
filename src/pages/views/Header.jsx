import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Logo, Navbar } from '../../components/views/index';
import { BackgroundColors } from '../../_website/layout/colors';

const HeaderSection = styled.header`
  width: 100%;
  background-color: ${ BackgroundColors.DARK };
`

const LogoWrapper = styled.a``

const Header = ()=> {
    return (
      <HeaderSection>
        <FlexContainer>
            <LogoWrapper href="/" >
              <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/634px-Star_Wars_Yellow_Logo.png" />
            </LogoWrapper>
            <Navbar />
        </FlexContainer>
      </HeaderSection>
    )
};

export { Header };
