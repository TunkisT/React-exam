import React from 'react';
import { Link } from 'react-router-dom';

function NotLoggedIn() {
  return (
    <>
      <h2>You are not logged in</h2>
      <p>Plese login to se the content</p>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
    </>
  );
}

export default NotLoggedIn;
