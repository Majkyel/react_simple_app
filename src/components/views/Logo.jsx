import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  height: 100%;
  max-width: 140px;
  align-self: center;
`;

const LogoImage = styled.img`
  width: 100%;
  display: block;
`;

const Logo = ({src, className})=> {
  return (
    <LogoWrapper className={className} >
      <LogoImage src={src} alt="logo" />
    </LogoWrapper>
  )
}

export { Logo }
