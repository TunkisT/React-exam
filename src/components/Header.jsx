import css from './Header.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={css.header}>
      <h1>My page</h1>
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
