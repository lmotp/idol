import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Container from '../components/Container';
import Timer from '../components/Timer';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function App() {
  const [songs, setSongs] = useState([]);
  const [count, setCount] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const [view] = useState([]);
  const [change, setChange] = useState('');
  const [result, setResult] = useState([]);
  const [wrongAnswer, setWrongAnser] = useState(0);
  const [rightAnswer, setRightgAnser] = useState(0);
  const [isLoding, setIsLoding] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // 셔플하기
  const shuffleBox = () => {
    // 타이틀 바꾸기
    setLyrics([]);
    songs.map((v) => lyrics.push(v.lyrics));
    setChange(lyrics[count]);

    // 보기 섞기
    const shuffle = [];
    songs.map((v) => view.push(v.title));
    for (let i = 0; i < 10; i++) {
      shuffle.push(view.splice(Math.floor(Math.random() * view.length), 1)[0]);
    }

    setResult(shuffle.slice(0, 4));
  };

  useEffect(() => {
    axios.get('../dummy/song_list.json').then(({ data }) => {
      setSongs(data.songList);
      setIsLoding(false);
      shuffleBox();
    });
    return shuffleBox;
  }, [isLoding, count]);

  const inTitle = (e) => {
    // 카운터 늘리기
    setCount(count + 1);
    if (count === 10) {
      return setCount(10);
    }
    shuffleBox();
    // 맞는지 틀린지 판단
    if (e.target.textContent === songs[count].title) {
      setRightgAnser(rightAnswer + 1);
    } else {
      setWrongAnser(wrongAnswer + 1);
    }
  };

  // 카운터가 10개 넘으면은 결과창으로
  if (count === 10) {
    setTimeout(() => setShouldRedirect(true), 2000);
    if (shouldRedirect) {
      return <Redirect to="/result" />;
    }
  }

  return (
    <>
      {isLoding ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container>
          <Timer mm={0} ss={30} />
          <h1>{change}</h1>
          <div>{count}/10</div>
          <button onClick={inTitle}>{result[0]}</button>
          <button onClick={inTitle}>{result[1]}</button>
          <button onClick={inTitle}>{result[2]}</button>
          <button onClick={inTitle}>{result[3]}</button>
          {rightAnswer}:{wrongAnswer}
        </Container>
      )}
    </>
  );
}

export default App;
