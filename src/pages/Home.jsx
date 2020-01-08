import React from 'react';
<<<<<<< Updated upstream
import { Jumbotron, HomeSectionFirst } from './views/index';
=======
import { Jumbotron, HomePowerSection, HomeTextSection, HomeCharactersSection } from './views/index';
>>>>>>> Stashed changes
import styled from 'styled-components';
import JumbotronBackground from '../_website/images/jumbotron.jpg';

const Home = ()=> {
    return (
      <>
<<<<<<< Updated upstream
        <Jumbotron backgroundImage={JumbotronBackground} backgroundPosition="center" boxShadow="inset 0px 0px 35px 30px #000000" />
        <HomeSectionFirst />
=======
        <Jumbotron
          backgroundImage={JumbotronBackground}
          backgroundPosition="center"
          boxShadow="inset 0px 0px 35px 30px #000000"
        />
        <HomePowerSection />
        <HomeTextSection />
        <HomeCharactersSection />
>>>>>>> Stashed changes
      </>
    );
};

export { Home };
