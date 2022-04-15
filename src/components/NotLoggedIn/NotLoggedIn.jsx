import css from './NotLoggedIn.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

function NotLoggedIn() {
  return (
    <div className={css.div}>
      <h2>You are not logged in</h2>
      <p>Please login to see the content!</p>
      <p>Dont have account? Please register</p>
      <Link className={css.btn}  to={'/login'}>
        <Button>Login</Button>
      </Link>
      <Link className={css.btn} to={'/register'}>
        <Button>register</Button>
      </Link>
    </div>
  );
}

export default NotLoggedIn;
