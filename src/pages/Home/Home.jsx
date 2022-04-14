import css from './Home.module.css';
import React, { useEffect, useState } from 'react';
const token = localStorage.getItem('token');

function Home() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    getDataFromFetch();
  }, []);

  async function getDataFromFetch() {
    await fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((cards) => {
        setDataArr(cards);
        console.log(cards);
      });
  }

  // if (dataArr.length === 0) {
  //   return <h1>No post at yet</h1>;
  // }

  return (
    <section className={css.cards}>
      {dataArr.map((obj) => (
        <div className={css.card} key={obj.id}>
          <h1>{obj.title}</h1>
          <p>{obj.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Home;
