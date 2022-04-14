import css from './Register.module.css';
import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import toast from 'react-hot-toast';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        data.changes === 1
          ? toast('User created')
          : toast('Something went wrong, please try again');
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
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
            required
          />
          <br />
          <label htmlFor='email'>Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='text'
            placeholder='Password'
            value={password}
            required
          />
          <br />
          <Button>Register</Button>
        </form>
      </section>
    </div>
  );
}

export default Register;
