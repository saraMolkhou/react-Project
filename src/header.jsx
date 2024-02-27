import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://dr-schwartz.org/wp-content/uploads/2022/08/schwartz-logo-01.png" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item"><a href="#about">אודות</a></li>
          <li className="nav-item"><a href="#services">שירותים</a></li>
          <li className="nav-item"><a href="#contact">צור קשר</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;