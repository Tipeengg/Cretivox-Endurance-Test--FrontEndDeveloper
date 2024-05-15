import React, { useRef, useLayoutEffect } from 'react';
// import React from 'react';
import logo from '../assets/img/compass-_logo.png';
import './navbar.css';
import { gsap, Power2 } from 'gsap'; // Import Power2 from gsap

function Header() {
  const headerRef = useRef(null);
  const menuItemsRef = useRef([]);

  useLayoutEffect(() => {
    // Only run animations if refs are valid
    if (headerRef.current && menuItemsRef.current.length) {
      // Animate header logo and menu items on mount
      gsap.to(headerRef.current, {
        duration: 0.5,
        opacity: 5,
        x: 20,
        ease: 'power1.inOut',
      });

      gsap.to(menuItemsRef.current, {
        duration: 0.5,
        opacity: 5,
        x: 20,
        ease: 'none',
      });
    }
  }, []);

  return (
    <header>
      <div className="header-logo" ref={headerRef}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-header" id="menuHeader">
        <ul>
          <li ref={(el) => (menuItemsRef.current[0] = el)}>
            <a href="">Home</a>
          </li>
          <li ref={(el) => (menuItemsRef.current[1] = el)}>
            <a href="">About Us</a>
          </li>
          <li ref={(el) => (menuItemsRef.current[2] = el)}>
            <a href="">Hobby</a>
          </li>
          <li ref={(el) => (menuItemsRef.current[3] = el)}>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
