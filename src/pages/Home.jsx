import React from 'react';
import { Jumbotron, HomeEnergySection, HomeTextSection, HomeCharactersSection } from './views/index';
import styled from 'styled-components';
import JumbotronBackground from '../_website/images/jumbotron.jpg';

const Home = ()=> {
    return (
      <>
        <Jumbotron
          backgroundImage={JumbotronBackground}
          backgroundPosition="center"
          boxShadow="inset 0px 0px 35px 30px #000000"
        />
        <HomeEnergySection />
        <HomeTextSection />
        <HomeCharactersSection />
      </>
    );
};

export { Home };
