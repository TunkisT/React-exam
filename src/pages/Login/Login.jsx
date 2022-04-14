import css from './Login.module.css';
import Button from '../../components/UI/Button';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('mike@mike.com');
  const [password, setPassword] = useState('secret123');

  const loginData = { email, password };

  function sendFetch() {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Success:', data);
        localStorage.setItem('token', data.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  function formHandler(e) {
    e.preventDefault();
    sendFetch();
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
        </form>
      </section>
    </div>
  );
}

export default Login;
