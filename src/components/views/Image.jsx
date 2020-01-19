import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: ${ props => props.width ? props.width : null};
  margin: auto;
`;

const Image = ({className, width, src, alt})=> {
  return(
    <Img className={className} width={width} src={src} alt={alt} />
  )
}

export { Image };
