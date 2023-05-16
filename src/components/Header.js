import React from 'react';
import headerLogo from '../images/logo.svg';

function Header() {
  return (
    <header class="header">
    <img
      class="header__logo"
      src={ headerLogo }
      alt="Логотип"
    />
  </header>
  );
}

export default Header;