import css from './Header.module.css';
import logo from '../images/logo3.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/authContext';

function Header() {
  const authCtx = useContext(AuthContext);

  return (
    <header className={css.header}>
      <img className={css.logo} src={logo} alt='logo' />
      <h2>Lazy panda skills club</h2>
      <nav className={css.navi}>
        {authCtx.isLogged && <NavLink to={'/'}>Home</NavLink>}
        {authCtx.isLogged && <NavLink to={'/add'}>Add</NavLink>}
        {!authCtx.isLogged && <NavLink to={'/register'}>Register</NavLink>}
        {!authCtx.isLogged && <NavLink to={'/login'}>Login</NavLink>}
        {authCtx.isLogged && (
          <NavLink onClick={authCtx.logout} to={'/login'}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
