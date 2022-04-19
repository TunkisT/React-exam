import css from './LoadElement.module.css';
import React from 'react';
import ReactLoading from 'react-loading';

function LoadElement() {
  return (
    <div className={css.load}>
      <ReactLoading
        type={'spinningBubbles'}
        color={'violet'}
        height={'20%'}
        width={'20%'}
      />
    </div>
  );
}

export default LoadElement;
