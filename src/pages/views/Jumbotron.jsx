import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/views/index';
import { FontColors } from '../../_website/layout/colors';

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

const TextBorder = styled.div`
  border-left: 2px solid yellow;
  padding: 0 20px;
`;

const JumbotronTitle = styled.h1`
  font-size: 2rem;
  color: ${ FontColors.LIGHT };
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const JumbotronText = styled.p`
  font-size: 1rem;
  color: ${ FontColors.LIGHT };
  text-transform: uppercase;
  letter-spacing: 1px;
  font-style: italic;
`;

const Jumbotron = ({backgroundImage, backgroundPosition, boxShadow, className})=>{
  return (
    <JumbotronWrapper backgroundImage={backgroundImage} backgroundPosition={backgroundPosition} boxShadow={boxShadow} className={className} >
      <JumbotronContainer>
      <TextBorder>
          <JumbotronTitle>A long time ago</JumbotronTitle>
          <JumbotronText>in a galaxy far, far away....</JumbotronText>
        </TextBorder>
      </JumbotronContainer>
    </JumbotronWrapper>
  )
}

export { Jumbotron }
