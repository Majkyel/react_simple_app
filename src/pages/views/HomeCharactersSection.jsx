import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer, SectionWrapper, ContentWrapper, Button } from '../../components/views/index';
import { WebsiteColors, FontColors} from '../../_website/layout/colors';
import homeCharacters from '../../_website/images/homeCharacters.jpg';
import Text from '../../_website/texts/texts.json';

const SecondSectionFlexContainer = styled(FlexContainer)`
  border-top: 1px solid ${WebsiteColors.YELLOW};
  border-bottom: 1px solid ${WebsiteColors.YELLOW};
`;

const CharactersHeader = styled.h3`
  font-size: 1.5rem;
  color: ${FontColors.YELLOW};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TextCharacters = styled.p`
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: ${FontColors.YELLOW};
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
            backgroundIMG={homeCharacters}
            boxShadow="inset 0px 0px 20px 29px black"
          />
            <ContentWrapper
              padding="40px"
              maxWidth="50%"
              contentAlign="center"
            >
            <Content>
              <CharactersHeader>Power Side</CharactersHeader>
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
