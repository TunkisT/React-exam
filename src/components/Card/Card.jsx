import css from './Card.module.css';

function Card({ data }) {
  return (
    <div className={css.card} key={data.id}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Card;
