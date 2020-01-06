import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Button, SectionWrapper } from '../../components/views/index';
import Falcon from '../../_website/images/firstSFalcon.jpg';
import { Link } from 'react-router-dom';

const TextLeftSide = styled.div`
  max-width: 50%;
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  position: relative;
  top: 40%;
  transform: translateY(-50%);
`

const Text = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: white;
  margin: 3rem 0;
  font-style: italic;
`;

const BackgroundRightSide = styled.div`
  max-width: 50%;
  background: url(${Falcon});
  width: 100%;
  display: block;
  min-height: 400px;
  background-size: cover;
  background-position: right;
  box-shadow: inset 0px 0px 20px 29px black;
`;

const FirstSectionFlexContainer = styled(FlexContainer)`
  border-top: 1px solid yellow;
  border-bottom: 1px solid yellow;
`

const HomeSectionFirst = ({ className })=> {
  return (
    <SectionWrapper className={className}>
      <FirstSectionFlexContainer>
        <TextLeftSide>
          <ContentContainer>
            <Text>Here you can check the current power level generated for our ships and Jedi light swords.</Text>
            <Link to='/energy'>
              <Button position="center">ENERGY</Button>
            </Link>
          </ContentContainer>
        </TextLeftSide>
        <BackgroundRightSide />
      </FirstSectionFlexContainer>
    </SectionWrapper>
  )
}

export { HomeSectionFirst }
