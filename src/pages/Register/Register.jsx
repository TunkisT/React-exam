import css from './Register.module.css';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import toast, { Toaster } from 'react-hot-toast';

function Register() {
  const [email, setEmail] = useState('mike@mike.com');
  const [password, setPassword] = useState('123456');

  const registerData = { email, password };

  function sendFetch() {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then((resp) =>
        resp.json(resp.status === 400 ? toast('Incorrect inputs') : '')
      )
      .then((data) => {
        if (data.changes === 1) toast('User created. Please login');
      })
      .catch((error) => {
        toast(error);
      });
  }

  function formHandler(e) {
    e.preventDefault();
    sendFetch();
    setEmail('');
    setPassword('');
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
            // required
          />
          <br />
          <label htmlFor='email'>Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='text'
            placeholder='Password'
            value={password}
            // required
          />
          <br />
          <Button>Register</Button>
          <Toaster />
        </form>
      </section>
    </div>
  );
}

export default Register;
