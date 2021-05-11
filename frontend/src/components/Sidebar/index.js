import React, { useState } from 'react';
import { FiMonitor, FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import { MenuLabel, Wrapper } from './styles';

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <input
        style={{ display: 'none'}} 
        id="menu" 
        type="checkbox"
        onChange={handleMenuClick}
        checked={isMenuOpen}
      />
      <label className="sr-only" htmlFor="menu">Abra o menu</label>
      <MenuLabel htmlFor="menu">
        { isMenuOpen ? <MdClose className="menu" /> : <FiMenu className="menu" />}
      </MenuLabel>
      <Wrapper isMenuOpen={isMenuOpen}>
        <a href="#">
          <FiMonitor className="icon" />
          <span>Dashboard</span>
        </a>
      </Wrapper>
    </>
  );
}