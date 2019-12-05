import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/memo'>Memo</NavLink>
    <NavLink to='download'>Download</NavLink>
    <NavLink to='contact'>Contact</NavLink>
  </header>
)

export default Header;