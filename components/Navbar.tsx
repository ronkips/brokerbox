import { NavLinks, NavLogo, NavbarContainer } from '@/styles/Navbar/Navbar';
import React from 'react';

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavLogo>
            <NavLinks>
                <a href= "/">About Us</a>
                <a href= "/">Why Us</a>
            </NavLinks>
        </NavLogo>
    </NavbarContainer>
  )
}

export default Navbar;