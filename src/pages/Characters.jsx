import React, { Component } from 'react';
import { Container, ContentWrapper } from '../components/views/index';
import { WebsiteColors } from '../_website/layout/colors';
import charactersImage from '../_website/images/characters.jpg';
import styled from 'styled-components';


const CharactersWrapper = styled(ContentWrapper)`
  min-height: calc(100vh - 100px);
  filter: saturate(0.5);
  background-size: cover;
`;

class Characters extends Component {
  render() {
    return (
      <CharactersWrapper backgroundIMG={charactersImage} boxShadow={`inset 0px 0px 35px 30px ${WebsiteColors.BLACK}`} backgroundPOS="center">
        <Container>
        </Container>
      </CharactersWrapper>
    )
  }
}

export { Characters }
