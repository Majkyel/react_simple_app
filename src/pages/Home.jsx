import React from 'react';
import { Jumbotron, HomePowerSection, HomeTextSection, HomeCharactersSection } from './views/index';
import { WebsiteColors } from '../_website/layout/colors';
import JumbotronBackground from '../_website/images/jumbotron.jpg';

const Home = ()=> {
    return (
      <>
        <Jumbotron
          backgroundImage={JumbotronBackground}
          backgroundPosition="center"
          boxShadow={`inset 0px 0px 35px 30px ${WebsiteColors.BLACK}`}
        />
        <HomePowerSection />
        <HomeTextSection />
        <HomeCharactersSection />
      </>
    );
};

export { Home };
