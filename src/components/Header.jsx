'use client';

import React from 'react';
import Navbar from './Navbar';
import MobileHeader from './MobileHeader';

const Header = () => {
  return (
    <header className="w-full z-[100]">
      <Navbar />
      <MobileHeader />
    </header>
  );
};

export default Header;
