import React from 'react';
import { Jumbotron, HomePowerSection, HomeTextSection, HomeCharactersSection } from './views/index';
import JumbotronBackground from '../_website/images/jumbotron.jpg';

const Home = ()=> {
    return (
      <>
        <Jumbotron
          backgroundImage={JumbotronBackground}
          backgroundPosition="center"
          boxShadow="inset 0px 0px 35px 30px #000"
        />
        <HomePowerSection />
        <HomeTextSection />
        <HomeCharactersSection />
      </>
    );
};

export { Home };
