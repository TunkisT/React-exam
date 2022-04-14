import css from './Login.module.css';
import Button from '../../components/UI/Button';

function Login() {
  return (
    <div className={css.div}>
      <section>
        <h1>Please login</h1>
        <form className={css.form}>
          <label htmlFor='email'>Email address</label>
          <br />
          <input type='email' placeholder='Email' />
          <br />
          <label htmlFor='email'>Password</label>
          <br />
          <input type='text' placeholder='Password' />
          <br />
          <Button>Login</Button>
        </form>
      </section>
    </div>
  );
}

export default Login;
