import React from 'react';
import styled from 'styled-components';
import { Container, ContentWrapper } from '../../components/views/index';
import { FontColors } from '../../_website/layout/colors';
import text from '../../_website/texts/texts.json';

const JumbotronWrapper = styled.section`
  background: url(${props => props.backgroundImage ? props.backgroundImage : null});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.backgroundPosition ? props.backgroundPosition : 'center'};
  height: calc(100vh - 100px);
  box-shadow: ${props => props.boxShadow ? props.boxShadow : null};
`;

const JumbotronContainer = styled(Container)`
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  padding: 2px 20px;
`;

const TextBorderJumbo = styled(ContentWrapper)`
  border-left: 2px solid yellow;
`;

const JumbotronTitle = styled.h1`
  font-size: 2rem;
  color: ${ FontColors.LIGHT };
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const JumbotronText = styled.p`
  font-size: 1rem;
  color: ${ FontColors.LIGHT };
  letter-spacing: 1px;
  font-style: italic;
`;

const Jumbotron = ({backgroundImage, backgroundPosition, boxShadow, className})=>{
  return (
    <JumbotronWrapper backgroundImage={backgroundImage} backgroundPosition={backgroundPosition} boxShadow={boxShadow} className={className} >
      <JumbotronContainer>
        <TextBorderJumbo padding="0 20px" backgroundColor="none" >
          <JumbotronTitle>{text.JUMBO_TITLE}</JumbotronTitle>
          <JumbotronText>{text.JUMBO_SUBTITLE}</JumbotronText>
        </TextBorderJumbo>
      </JumbotronContainer>
    </JumbotronWrapper>
  )
}

export { Jumbotron }
