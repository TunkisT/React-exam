import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../../components/UI/Button';
import css from './Add.module.css';

function Add() {
  const token = localStorage.getItem('token');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
      .then((resp) =>
        resp.json(
          resp.status === 200
            ? toast('Added new skill to account')
            : toast('Incorrect inputs')
        )
      )
      .catch((error) => {
        toast(error);
      });
  }

  function formHandler(e) {
    e.preventDefault();
    sendFetch();
    setTitle('')
    setDescription('')
  }

  return (
    <div className={css.div}>
      <section>
        <h1>Add new skill</h1>
        <form onSubmit={formHandler} className={css.form}>
          <label htmlFor='title'>Title</label>
          <br />
          <input
            className={css.title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Title'
            value={title}
          />
          <br />
          <label htmlFor='description'>Description</label>
          <br />
          <textarea
            className={css.textarea}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
            value={description}
            name='description'
            cols='30'
            rows='10'
          ></textarea>
          <br />
          <Button >Add</Button>
          <Toaster />
        </form>
      </section>
    </div>
  );
}

export default Add;
