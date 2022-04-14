import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path={'/register'}>
          <Register />
        </Route>
        <Route path={'/login'}>
          <Login />
        </Route>
        <Route path={'/'} exact>
          <Home />
        </Route>
        <Route path={'/add'}>
          <Add />
        </Route>
        <Route path={'*'}>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
