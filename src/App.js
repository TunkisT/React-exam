import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register/Register';
import AuthContext from './store/authContext';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  function login() {
    setIsLogged(true);
  }
  function logout() {
    setIsLogged(false);
    localStorage.removeItem('token');
  }

  const ctxValue = {
    isLogged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={'/register'}>
            <Register />
          </Route>
          <Route path={'/login'}>
            <Login />
          </Route>
          <ProtectedRoute path={'/'} exact>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path={'/add'}>
            <Add />
          </ProtectedRoute>
          <Route path={'*'}>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
