import React, { Component } from 'react';
import { Container } from '../components/views/index';
import { WebsiteColors } from '../_website/layout/colors';
import styled from 'styled-components';
import powerImage from '../_website/images/power.jpg';

// ContentWrapper!
const EnergyWrapper = styled.section`
  background: url(${powerImage});
  min-height: calc(100vh - 100px);
  background-color: ${WebsiteColors.BLACK};
  box-shadow: inset 0px 0px 35px 30px ${WebsiteColors.BLACK};
  filter: saturate(0.5);
  background-size: cover;
  background-position: center;
`;

class Power extends Component {
  render() {
    return (
      <EnergyWrapper>
        <Container>
        </Container>
      </EnergyWrapper>
    );
  }
};

export { Power };
