import { useState } from 'react';
import Button from '../../components/UI/Button';
import css from './Add.module.css';
const token = localStorage.getItem('token');

function Add() {
  const [title, setTitle] = useState('Mike post');
  const [description, setDescription] = useState('Mike post description');

  const postData = { title, description };

  function sendFetch() {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
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
        <h1>Add post</h1>
        <form onSubmit={formHandler} className={css.form}>
          <label htmlFor='title'>Title</label>
          <br />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Title'
            value={title}
          />
          <br />
          <label htmlFor='description'>Description</label>
          <br />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type='text'
            placeholder='Description'
            value={description}
          />
          <br />
          <Button>Add</Button>
        </form>
      </section>
    </div>
  );
}

export default Add;
