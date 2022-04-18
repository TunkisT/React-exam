import css from './Button.module.css';

import React from 'react';

function Button(props) {
  return <button className={css.btn}>{props.children}</button>;
}

export default Button;
