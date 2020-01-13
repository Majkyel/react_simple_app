import React, { Component } from 'react';
import { Container } from '../components/views/index';
import styled from 'styled-components';

const EnergyWrapper = styled.section``

class Power extends Component {
  render() {
    return (
      <EnergyWrapper>
        <Container>
          <h2>POWER</h2>
        </Container>
      </EnergyWrapper>
    );
  }
};

export { Power };
