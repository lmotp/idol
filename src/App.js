import React, { useCallback, useEffect, useState } from 'react';
import Container from './components/Container';
import Timer from './components/Timer';
import Data from './components/Data';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [count, setCount] = useState(0);
  const [lyrics] = useState([]);
  const [corret, setCorret] = useState([]);
  const [view, setView] = useState([]);
  const [change, setChange] = useState(
    '어디론가 날 데려가 줄래 아님 저 바람 부는 대로 그냥 흘러가게 둬 얼마나 온 걸까 여긴 어디쯤일까',
  );
  const [wrongAnswer, setWrongAnser] = useState(0);
  const [rightAnswer, setRightgAnser] = useState(0);

  useEffect(() => {
    axios
      .get('../dummy/song_list.json')
      .then(({ data }) => {
        setSongs(data.songList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const inTitle = useCallback(
    (e) => {
      // 카운터 늘리기
      setCount(count + 1);
      if (count === 10) {
        return setCount(10);
      }

      // 타이틀 바꾸기
      if (lyrics.length === 0) {
        songs.map((v) => lyrics.push(v.lyrics));
      }
      setChange(lyrics[count + 1]);

      // 맞는지 틀린지 판단
      if (e.target.textContent === songs[count].title) {
        setRightgAnser(rightAnswer + 1);
      } else {
        setWrongAnser(wrongAnswer + 1);
      }
    },

    [count, lyrics, songs, rightAnswer, wrongAnswer],
  );

  //수정해야할부분
  useEffect(() => {
    songs.map((v) => v.filter());
    if (0 === count) {
      // setCorret(view.slice(count, 1), view);
    }
  }, [count, view, songs]);

  return (
    <>
      <Container>
        <Timer mm={2} ss={0} />
        <div>{count}/10</div>
        <h1>{change}</h1>
        {songs.map((song) => {
          return <Data key={song.id} title={song.title} click={inTitle} />;
        })}
        {rightAnswer}:{wrongAnswer}
      </Container>
    </>
  );
}

export default App;
