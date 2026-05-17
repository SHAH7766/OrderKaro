'use client';

import React from 'react';
import Navbar from './Navbar';
import MobileHeader from './MobileHeader';

export default function DriverHeader() {
  return (
    <header className="w-full">
      <Navbar />
      <div className="px-4 pt-4 md:hidden">
        <MobileHeader />
      </div>
    </header>
  );
}
