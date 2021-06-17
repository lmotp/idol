import React, { useCallback, useEffect, useState } from 'react';
import Container from './components/Container';
import Timer from './components/Timer';
import Data from './components/Data';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [count, setCount] = useState(1);
  const [lyrics, setLyrics] = useState([]);
  const [chnage, setChange] = useState(
    '어디론가 날 데려가 줄래 아님 저 바람 부는 대로 그냥 흘러가게 둬 얼마나 온 걸까 여긴 어디쯤일까',
  );
  useEffect(() => {
    axios
      .get('../dummy/song_list.json')
      .then(({ data }) => {
        console.log(data.songList);
        setSongs(data.songList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const inTitle = useCallback(() => {
    // 카운터 늘리기
    setCount(count + 1);
    if (count === 10) {
      return setCount(10);
    }

    // 타이틀 바꾸기
    if (lyrics.length === 0) {
      songs.map((v) => lyrics.push(v.lyrics));
    }
    setChange(lyrics[count]);

    console.log(songs, count, lyrics);
  }, [count, lyrics, songs]);

  return (
    <>
      <Container>
        <Timer mm={2} ss={0} />
        <div>{count}/10</div>
        <h1>{chnage}</h1>
        {songs.map((song) => {
          return <Data key={song.id} title={song.title} click={inTitle} />;
        })}
      </Container>
    </>
  );
}

export default App;
