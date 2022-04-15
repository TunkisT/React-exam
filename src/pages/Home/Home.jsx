import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
const token = localStorage.getItem('token');

function Home() {
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('token ===', token);

  useEffect(() => {
    getDataFromFetch();
  }, []);

  function getDataFromFetch() {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((cards) => {
        console.log(cards);

        if (cards.err === 'Invalid Token') {
          return;
        }
        setDataArr(cards);
        setLoading(false);
        console.log(cards);
      });
  }

  if (loading === true) {
    return <h1>Loading...</h1>;
  }
  if (dataArr.length === 0) {
    return <h1>No active posts</h1>;
  }

  return <CardList data={dataArr} />;
}

export default Home;
