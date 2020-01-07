import React from 'react';
import styled from 'styled-components';
import { FlexContainer, SectionWrapper, ContentWrapper } from '../../components/views/index';
import text from '../../_website/texts/texts.json';

const HomeTextSection = ({className})=> {
  return (
    <SectionWrapper padding="0" className={className}>
      <FlexContainer>
        <ContentWrapper maxWidth="50%" padding="0 20px"><p style={{color:"white", textAlign: "justify", fontSize: "1.2rem"}}>{text.TEXT_FIRST_SECTION_LEFT}</p></ContentWrapper>
        <ContentWrapper maxWidth="50%" padding="0 20px"><p style={{color:"white", textAlign: "justify", fontSize: "1.2rem"}}>{text.TEXT_FIRST_SECTION_RIGHT}</p></ContentWrapper>
      </FlexContainer>
      <FlexContainer>
        <ContentWrapper maxWidth="50%" padding="0 20px"><p style={{color:"white", textAlign: "justify", fontSize: "1.2rem"}}>{text.TEXT_SECOND_SECTION_LEFT}</p></ContentWrapper>
        <ContentWrapper maxWidth="50%" padding="0 20px"><p style={{color:"white", textAlign: "justify", fontSize: "1.2rem"}}>{text.TEXT_SECOND_SECTION_RIGHT}</p></ContentWrapper>
      </FlexContainer>
    </SectionWrapper>
  )
}

export { HomeTextSection }
