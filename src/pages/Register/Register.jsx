import css from './Register.module.css';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';

function Register() {
  const [email, setEmail] = useState('mike@mike.com');
  const [password, setPassword] = useState('secret123');

  const registerData = { email, password };

  function sendFetch() {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Success:', data);
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
        <h1>Please register</h1>
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
          <Button>Register</Button>
        </form>
      </section>
    </div>
  );
}

export default Register;
