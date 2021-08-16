import React from 'react';
import { NavbarStyle } from './style';


const Navbar = ({ onClick }) => {
  return (
    <NavbarStyle>
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

export default Navbar;
