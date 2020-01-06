import React from 'react';
import styled from 'styled-components';
import { Container, Button } from '../../components/views/index';
import { FontColors } from '../../_website/layout/colors';

const JumbotronWrapper = styled.div`
  background: url(${props => props.backgroundImage ? props.backgroundImage : null});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.backgroundPosition ? props.backgroundPosition : 'center'};
  height: 100%;
  box-shadow: ${props => props.boxShadow ? props.boxShadow : null};
`;

const JumbotronContainer = styled(Container)`
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  padding: 2px 20px;
  border-left: 2px solid yellow;
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
`

const Jumbotron = ({backgroundImage, backgroundPosition, boxShadow, className})=>{
  return (
    <JumbotronWrapper backgroundImage={backgroundImage} backgroundPosition={backgroundPosition} boxShadow={boxShadow} className={className} >
      <JumbotronContainer>
        <JumbotronTitle>A long time ago</JumbotronTitle>
        <JumbotronText>in a galaxy far, far away....</JumbotronText>
      </JumbotronContainer>
    </JumbotronWrapper>
  )
}

export { Jumbotron }
