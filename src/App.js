import React, { useCallback, useEffect, useState } from 'react';
import Loading from './components/Loading';
import Container from './components/Container';
import Timer from './components/Timer';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [count, setCount] = useState(0);
  const [lyrics] = useState([]);
  // const [corret, setCorret] = useState([]);
  const [view, setView] = useState([]);
  const [change, setChange] = useState(null);
  // '어디론가 날 데려가 줄래 아님 저 바람 부는 대로 그냥 흘러가게 둬 얼마나 온 걸까 여긴 어디쯤일까',
  const [wrongAnswer, setWrongAnser] = useState(0);
  const [rightAnswer, setRightgAnser] = useState(0);
  const [isLoding, setIsLoding] = useState(true);
  useEffect(() => {
    axios.get('../dummy/song_list.json').then(({ data }) => {
      setSongs(data.songList);
      setIsLoding(false);
    });
  }, [isLoding]);

  const inTitle = useCallback(
    (e) => {
      // 카운터 늘리기
      setCount(count + 1);
      if (count === 10) {
        return setCount(10);
      }

      // 타이틀 바꾸기
      setChange(lyrics[count]);

      // 맞는지 틀린지 판단
      if (e.target.textContent === songs[count].title) {
        setRightgAnser(rightAnswer + 1);
      } else {
        setWrongAnser(wrongAnswer + 1);
      }
    },

    [count, lyrics, songs, rightAnswer, wrongAnswer],
  );

  const what = () => {
    const shuffle = [];
    if (view.length === 0) {
      songs.map((v) => view.push(v.title));
      songs.map((v) => lyrics.push(v.lyrics));
    }
    for (let i = 0; i < 10; i++) {
      shuffle.push(view.splice(Math.floor(Math.random() * view.length), 1)[0]);
    }
    console.log(shuffle);
  };

  return (
    <>
      {isLoding ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container>
          <Timer mm={2} ss={0} />
          <div>{count}/10</div>
          <h1>{change && !undefined}</h1>
          <button onClick={inTitle}>{view}</button>
          <button onClick={inTitle}>{view}</button>
          <button onClick={inTitle}>{view}</button>
          {rightAnswer}:{wrongAnswer}
        </Container>
      )}
    </>
  );
}

export default App;
