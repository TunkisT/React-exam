import css from './Header.module.css';
import logo from '../images/logo2.png';

import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={css.header}>
      <img className={css.logo} src={logo} alt='logo' />
      <h1>Lazy panda</h1>
      <nav className={css.navi}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/add'}>Add</NavLink>
      </nav>
    </header>
  );
}

export default Header;
