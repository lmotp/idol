import React, { useEffect, useState } from 'react';
import Container from './components/Container';
import Timer from './components/Timer';
import Count from './components/Count';
import Data from './components/Data';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  useEffect(() => {
    axios
      .get('dummy/song_list.json')
      .then(({ data }) => {
        setData(data.songList[2].lyrics);
        setTitle(data.songList[2].title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container>
        <Timer mm={2} ss={0} />
        <Count />
        <Data ly={data} title={title} />
      </Container>
    </>
  );
}

export default App;
