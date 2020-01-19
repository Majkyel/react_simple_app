import React, { Component } from 'react';
import { Container } from '../components/views/index';
import { BackgroundColors, WebsiteColors } from '../_website/layout/colors';
import charactersImage from '../_website/images/characters.jpg';
import styled from 'styled-components';

//ContentWrapper!
const CharactersWrapper = styled.section`
  background: url(${charactersImage});
  min-height: calc(100vh - 100px);
  background-color: ${BackgroundColors.DARK};
  box-shadow: inset 0px 0px 35px 30px ${WebsiteColors.BLACK};
  filter: saturate(0.5);
  background-size: cover;
  background-position: center;
`;

class Characters extends Component {
  render() {
    return (
      <CharactersWrapper>
        <Container>
        </Container>
      </CharactersWrapper>
    )
  }
}

export { Characters }
