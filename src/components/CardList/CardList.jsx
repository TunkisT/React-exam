import css from './CardList.module.css';
import Card from '../Card/Card';

function CardList(props) {
  return (
    <section className={css.cards}>
      {props.data.map((obj) => (
        <Card key={obj.id} data={obj} />
      ))}
    </section>
  );
}

export default CardList;
