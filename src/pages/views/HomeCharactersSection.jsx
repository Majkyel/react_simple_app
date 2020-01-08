import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, SectionWrapper, ContentWrapper, Button } from '../../components/views/index';
import Characters from '../../_website/images/characters.jpg';
import Text from '../../_website/texts/texts.json';

const SecondSectionFlexContainer = styled(FlexContainer)`
  border-top: 1px solid yellow;
  border-bottom: 1px solid yellow;
`;

const TextCharacters = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: white;
  margin: 3rem 0;
`;

const Content = styled.div`
  position: relative;
  top: 40%;
  transform: translateY(-50%);
`;

const HomeCharactersSection = ({className})=> {
  return (
    <SectionWrapper className={className}>
      <SecondSectionFlexContainer>
          <ContentWrapper
            maxWidth="50%"
            backgroundIMG={Characters}
            boxShadow="inset 0px 0px 20px 29px black"
          />
            <ContentWrapper
              padding="40px"
              maxWidth="50%"
              contentAlign="center"
            >
            <Content>
              <TextCharacters>{Text.CHARACTERS_SECTION_TEXT}</TextCharacters>
                <Link to="/characters">
                  <Button position="center" border="2px solid white">CHARACTERS</Button>
                </Link>
            </Content>
          </ContentWrapper>
      </SecondSectionFlexContainer>
    </SectionWrapper>
  )
}

export { HomeCharactersSection }
