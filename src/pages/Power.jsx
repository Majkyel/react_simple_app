import React, { Component } from 'react';
import powerApi from '../uitils/getPowerApi.js';
import axios from 'axios';
import { FlexContainer, ContentWrapper, Image } from '../components/views/index';
import { WebsiteColors, FontColors } from '../_website/layout/colors';
import { PowerCircle } from '../components/views/index';
import styled from 'styled-components';
import powerImage from '../_website/images/power.jpg';
import lightSword from '../_website/images/lightsword.png';
import falcon from '../_website/images/falconMilenium.png';


const EnergyWrapper = styled(ContentWrapper)`
  min-height: calc(100vh - 100px);
  filter: saturate(0.5);
  background-size: cover;
`;

const PowerCircleContainer = styled(FlexContainer)`
  position: relative;
  height: 85vh;
`;

const TotalEnergy = styled.h2`
  position: absolute;
  color: yellow;
  top: 7vh;
  left: 12%;
  right: 12%;
  text-align: center;
  background: rgba(0,0,0,0.4);
  padding: 10px;
  border-radius: 35px;
`;

const EnergyValue = styled.p`
  color: ${FontColors.YELLOW};
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 20px;
`;

class Power extends Component {
  constructor() {
    super();
    this.state = {
      falconEnergy: 0,
      lightSaberEnergy: 0,
      totalEnergy: 0,
    }
  }

  fetchApiPower = ()=> {
    axios('https://challenge.codetain.com/api/v1/charging_status')
      .then( res => {
        const energyValues = res.data.charging_status;
        this.setState({
          falconEnergy: energyValues.falcon,
          lightSaberEnergy: energyValues.lightsaber,
          totalEnergy: energyValues.falcon + energyValues.lightsaber
        });
      })
      .catch(
        error => console.log(error)
      )
  }

  componentDidMount = ()=> {
    this.fetchApiPower();
    this.Interval = setInterval(this.fetchApiPower, 10000);
  }

  componentWillUnmount = ()=> {
    clearInterval(this.Interval);
  }

  render() {
    const { totalEnergy, falconEnergy, lightSaberEnergy } = this.state;
    return (
      <EnergyWrapper
        backgroundIMG={powerImage}
        boxShadow={`inset 0px 0px 35px 30px ${WebsiteColors.BLACK}`}
        backgroundPOS="center">
        <PowerCircleContainer>
          <TotalEnergy>TOTAL ENERGY: {totalEnergy} KW</TotalEnergy>
          <PowerCircle backgroundColor="rgba(0,0,0,0.8)">
            <Image src={lightSword} alt="lightsword" width="75%" />
            <EnergyValue>{lightSaberEnergy} KW</EnergyValue>
          </PowerCircle>
          <PowerCircle backgroundColor="rgba(0,0,0,0.8)">
            <Image src={falcon} alt="falcon" width="90%" />
            <EnergyValue>{falconEnergy} KW</EnergyValue>
          </PowerCircle>
        </PowerCircleContainer>
      </EnergyWrapper>
    );
  }
};

export { Power };
