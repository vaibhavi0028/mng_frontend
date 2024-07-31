'use client';

import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
      onClick={toggleMenu}
    >
      <span
        className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
