import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontColors } from '../../_website/layout/colors';

const Navigation = styled.ul`
  display: flex;
`

const NavElement = styled.li`
  margin-left: 2rem;
  font-size: 1.3rem;
  text-decoration: none;
`

const NavLink = styled(Link)`
  letter-spacing: 2px;
  text-decoration: none;
  color: ${ FontColors.LIGHT };
`

const Navbar = ({className})=> {
  return (
    <Navigation className={className}>
        <NavElement><NavLink to="/">Home</NavLink></NavElement>
        <NavElement><NavLink to="/power">Power</NavLink></NavElement>
        <NavElement><NavLink to="/characters">Characters</NavLink></NavElement>
    </Navigation>
  )
}

export { Navbar }
