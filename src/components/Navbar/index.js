import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import { NavbarStyle } from './style';

import Logo from '../../assets/hello-ermine_logo.png';
import Frozen from '../../assets/navbar/frozen.png';

const useMountEffect = (func) => useEffect(func, []);

const Navbar = ({ onClick, pageIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  useMountEffect(() => {
    const li = document.querySelectorAll('li');
    li.forEach((elem) => {
      let frozenImg = document.createElement('img');
      frozenImg.src = Frozen;
      elem.append(frozenImg);
    });
  });

  useEffect(() => {
    const li = document.querySelectorAll('li');
    li.forEach((elem) => {
      elem.querySelector('img').classList.remove('fade-in');
      elem.querySelector('img').style.opacity = 0;
    });
    li.item(pageIndex).querySelector('img').classList.add('fade-in');
  }, [pageIndex]);

  const hamburgerClick = e => {
    e.preventDefault();
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  
  return (
    <NavbarStyle showLogo={pageIndex !== 0} collapNav={isOpen}>
      <img className='nav-logo' src={Logo} alt='Ermine logo'/>
      <HamburgerMenu
        className='nav-hamburger'
        isOpen={isOpen}
        menuClicked={hamburgerClick}
        width={28}
        height={25}
        strokeWidth={2}
        rotate={0}
        color='white'
        borderRadius={0}
        animationDuration={0.5}
      />
      <ul>
        <li>
          <a onClick={() => onClick(0)}>HOME</a>
        </li>
        <li>
          <a onClick={() => onClick(1)}>ABOUT</a>
        </li>
        <li>
          <a onClick={() => onClick(2)}>TEAMS</a>
        </li>
        <li>
          <a onClick={() => onClick(3)}>FAQS</a>
        </li>
        <li>
          <a onClick={() => onClick(4)}>GAME</a>
        </li>
      </ul>
    </NavbarStyle>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func,
  pageIndex: PropTypes.number
};

export default Navbar;
