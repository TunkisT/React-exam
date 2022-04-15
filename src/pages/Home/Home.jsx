import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import LoadElement from '../../components/LoadElement/LoadElement';

function Home() {
  const token = localStorage.getItem('token');
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getDataFromFetch();
    }
  }, []);

  function getDataFromFetch() {
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/content/skills`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((cards) => {
        if (cards.err === 'Invalid Token') {
          return;
        }
        setDataArr(cards);
        setLoading(false);
        console.log(cards);
      });
  }

  if (loading === true) {
    return <LoadElement />;
  }
  if (dataArr.length === 0) {
    return <h1>No active posts</h1>;
  }

  return <CardList data={dataArr} />;
}

export default Home;
