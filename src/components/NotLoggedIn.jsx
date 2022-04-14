import React from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button';

function NotLoggedIn() {
  return (
    <>
      <h2>You are not logged in</h2>
      <p>Please login to see the content!</p>
      <p>Dont have account? Please register</p>
      <Link to={'/login'}>
        <Button>Login</Button>
      </Link>
      <Link to={'/register'}>
        <Button>register</Button>
      </Link>
    </>
  );
}

export default NotLoggedIn;
