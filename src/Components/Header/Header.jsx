import React from 'react';
import './Header.style.scss';
import logo from '../../images/qoobus-logo.png';
const Header = () => {
    return (
      <div className="header">
        <img src={logo} alt="qoobus logo" />
        <h1 className="header__title">test.</h1>
        <h2 className="header__subtitle">thanks for the opportunity given.</h2>
      </div>
    );
}

export default Header;
