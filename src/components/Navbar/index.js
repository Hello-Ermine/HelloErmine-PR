import React from 'react';
import PropTypes from 'prop-types';
import { NavbarStyle } from './style';

import Logo from '../../assets/hello-ermine_logo.png';

const Navbar = ({ onClick }) => {
  return (
    <NavbarStyle show={false}>
      <img className='nav-logo' src={Logo} alt='Ermine logo'/>
      <ul>
        <li>
          <a href='#Home' onClick={() => onClick(0)}>HOME</a>
        </li>
        <li>
          <a href='#About' onClick={() => onClick(1)}>ABOUT</a>
        </li>
        <li>
          <a href='#Teams' onClick={() => onClick(2)}>TEAMS</a>
        </li>
        <li>
          <a href='#FAQs' onClick={() => onClick(3)}>FAQS</a>
        </li>
        <li>
          <a href='#Game' onClick={() => onClick(4)}>GAME</a>
        </li>
      </ul>
    </NavbarStyle>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func
};

export default Navbar;
