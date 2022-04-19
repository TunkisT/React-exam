import { createContext } from 'react';

const AuthContext = createContext({
  isLogged: false,
  login() {},
  logout() {},
});

AuthContext.displayName = 'AuthContext';
export default AuthContext;
