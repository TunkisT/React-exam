import css from './Login.module.css';
import Button from '../../components/UI/Button';
import { useContext, useState } from 'react';
import AuthContext from '../../store/authContext';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('mike@mike.com');
  const [password, setPassword] = useState('secret123');
  const history = useHistory();

  const loginData = { email, password };
  const authCtx = useContext(AuthContext);

  function formHandler(e) {
    e.preventDefault();
    sendFetch();
  }

  function successfulLogin(resp) {
    authCtx.login();
    history.push('/');
  }

  function sendFetch() {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((resp) =>
        resp.json(
          resp.status === 200
            ? successfulLogin()
            : toast('Incorrect email or password')
        )
      )
      .then((data) => {
        console.log('Success:', data);
        localStorage.setItem('token', data.token);
      })
      .catch((error) => {
        toast(error);
      });
  }

  return (
    <div className={css.div}>
      <section>
        <h1>Please login</h1>
        <form onSubmit={formHandler} className={css.form}>
          <label htmlFor='email'>Email address</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            value={email}
          />
          <br />
          <label htmlFor='email'>Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='text'
            placeholder='Password'
            value={password}
          />
          <br />
          <Button>login</Button>
          <Toaster />
        </form>
      </section>
    </div>
  );
}

export default Login;
