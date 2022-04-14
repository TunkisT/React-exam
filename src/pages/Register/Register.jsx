import css from './Register.module.css';
import React from 'react';
import Button from '../../components/UI/Button';

function Register() {
  return (
    <div className={css.div}>
      <section>
        <h1>Please register</h1>
        <form className={css.form}>
          <input type='email' placeholder='Email' />
          <br />
          <input type='text' placeholder='Password' />
          <br />
          <Button>Register</Button>
        </form>
      </section>
    </div>
  );
}

export default Register;
