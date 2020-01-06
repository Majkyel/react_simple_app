import React from 'react';
import { Jumbotron } from '../../components/views/index';
import styled from 'styled-components';
import JumbotronBackground from '../../_website/images/jumbotron.jpg';

const HomeWrapper = styled.section`
  height: calc(100vh - 100px);
`;

const Home = ()=> {
    return (
      <HomeWrapper>
        <Jumbotron backgroundImage={JumbotronBackground} backgroundPosition="center" boxShadow="inset 0px 0px 35px 30px #000000" />
      </HomeWrapper>
    );
};

export { Home };
