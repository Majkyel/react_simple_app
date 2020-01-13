import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Button, SectionWrapper, ContentWrapper } from '../../components/views/index';
import Falcon from '../../_website/images/firstSFalcon.jpg';
import text from '../../_website/texts/texts.json';
import { Link } from 'react-router-dom';


const Content = styled.div`
  position: relative;
  top: 40%;
  transform: translateY(-50%);
`;

const Text = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: white;
  margin: 3rem 0;
`;

const FirstSectionFlexContainer = styled(FlexContainer)`
  border-top: 1px solid yellow;
  border-bottom: 1px solid yellow;
`;


const HomePowerSection = ({ className })=> {
  return (
    <SectionWrapper className={className}>
      <FirstSectionFlexContainer>
        <ContentWrapper
          maxWidth="50%"
          padding="40px"
          contentAlign="center"
          >
          <Content>
            <Text>{text.ENERGY_SECTION_TEXT}</Text>
            <Link to='/power'>
              <Button position="center" border="2px solid white">POWER</Button>
            </Link>
          </Content>
        </ContentWrapper>
        <ContentWrapper
          maxWidth="50%"
          backgroundIMG={Falcon}
          backgroundPOS="right"
          boxShadow="inset 0px 0px 20px 29px black"
        />
      </FirstSectionFlexContainer>
    </SectionWrapper>
  )
}

export { HomePowerSection }

