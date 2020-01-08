import React from 'react';
import styled from 'styled-components';
import { FlexContainer, SectionWrapper, ContentWrapper } from '../../components/views/index';
import { FontColors } from '../../_website/layout/colors';
import text from '../../_website/texts/texts.json';

const Text = styled.p`
  color: ${FontColors.LIGHT};
  text-align: justify;
  font-size: 1.3rem;
  font-style: italic;
`

const HomeTextSection = ({className})=> {
  return (
    <SectionWrapper padding="0" className={className}>
      <FlexContainer>
        <ContentWrapper maxWidth="50%" padding="0 20px">
          <Text>
            {text.TEXT_FIRST_SECTION_LEFT}
          </Text>
        </ContentWrapper>
        <ContentWrapper maxWidth="50%" padding="0 20px">
          <Text>
            {text.TEXT_FIRST_SECTION_RIGHT}
          </Text>
        </ContentWrapper>
      </FlexContainer>
      <FlexContainer>
        <ContentWrapper maxWidth="50%" padding="0 20px">
          <Text>
            {text.TEXT_SECOND_SECTION_LEFT}
          </Text>
        </ContentWrapper>
        <ContentWrapper maxWidth="50%" padding="0 20px">
          <Text>
            {text.TEXT_SECOND_SECTION_RIGHT}
          </Text>
        </ContentWrapper>
      </FlexContainer>
    </SectionWrapper>
  )
}

export { HomeTextSection }
