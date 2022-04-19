import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../store/authContext';
import NotLoggedIn from './NotLoggedIn/NotLoggedIn';

function ProtectedRoute({ children, ...rest }) {
  const authCtx = useContext(AuthContext);

  return (
    <Route {...rest}>{authCtx.isLogged ? children : <NotLoggedIn />}</Route>
  );
}

export default ProtectedRoute;
