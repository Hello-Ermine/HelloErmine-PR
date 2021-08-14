import React from 'react';
import { NavbarStyle } from './style';


const Navbar = () => {
  return (
    <NavbarStyle>
      <ul>
        <li>
          <a href='#Home'>HOME</a>
        </li>
        <li>
          <a href='#About'>ABOUT</a>
        </li>
        <li>
          <a href='#Teams'>TEAMS</a>
        </li>
        <li>
          <a href='#FAQs'>FAQS</a>
        </li>
        <li>
          <a href='#Game'>GAME</a>
        </li>
      </ul>
    </NavbarStyle>
  );
};

export default Navbar;
