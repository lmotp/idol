import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Container from '../components/Container';
import { Redirect } from 'react-router-dom';
import '../Css/Game.css';
import { useUsersState, useUsersDispatch } from '../Users';

function Game() {
  const context = useUsersState();
  const dispatch = useUsersDispatch();
  const [songs, setSongs] = useState([]);
  const [count, setCount] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const [view] = useState([]);
  const [change, setChange] = useState('');
  const [result, setResult] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const [plusCount, setPlusCount] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  // 셔플하기
  const shuffleBox = () => {
    // 타이틀 바꾸기
    setLyrics([]);
    songs.map((v) => lyrics.push(v.lyrics));
    setChange(lyrics[count]);

    // 보기 섞기
    const shuffle = [];
    const shuffle2 = [];
    songs.map((v) => view.push(v.title));
    const wow = view.splice(count, 1);
    for (let i = 0; i < 9; i++) {
      shuffle.push(view.splice(Math.floor(Math.random() * view.length), 1)[0]);
    }
    shuffle.unshift(wow);
    const noNmae = shuffle.slice(0, 4);
    for (let i = 0; i < 4; i++) {
      shuffle2.push(noNmae.splice(Math.floor(Math.random() * noNmae.length), 1)[0]);
    }
    setResult(shuffle2);
  };

  const move = useCallback(() => {
    setDisabled(true);
    setSeconds(30);
    setPlusCount(false);
    setTimeout(() => {
      setPlusCount(true);
      setDisabled(false);
    }, 700);
  }, [disabled, seconds, plusCount]);

  // 첫 시작값
  useEffect(() => {
    setSongs(context.songList);
    setIsLoding(false);
    shuffleBox();
    return shuffleBox();
  }, [isLoding, count]);

  const inTitle = (e) => {
    // 카운터 늘리기
    setCount(count + 1);
    if (count === 10) {
      return setCount(10);
    }
    move();
    shuffleBox();
    // 맞는지 틀린지 판단
    if (e.target.textContent === songs[count].title) {
      setRight(right + 1);
      dispatch({ type: 'RIGHT' });
    } else {
      setWrong(wrong + 1);
      dispatch({ type: 'WRONG' });
    }
  };

  // 타이머
  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        setCount(count + 1);
        dispatch({ type: 'WRONG' });
        move();
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds, count, move]);

  // 카운터가 10개 넘으면은 결과창으로
  if (count === 10) {
    if (context.rightCounter <= 2) {
      return <Redirect to="/result1" />;
    } else if (context.rightCounter <= 5) {
      return <Redirect to="/result2" />;
    } else if (context.rightCounter <= 8) {
      return <Redirect to="/result3" />;
    } else {
      return <Redirect to="/result4" />;
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
          <h2 className="topBar">
            {seconds < 10 ? `0${seconds}` : seconds}
            <span>Q{count + 1}/10</span>
          </h2>
          <h1 className="question">{change}</h1>
          <div className="buttonBox">
            <button disabled={disabled} className={plusCount ? 'buttonRightMove' : 'buttonLeftMove'} onClick={inTitle}>
              {result[0]}
            </button>
            <button disabled={disabled} className={plusCount ? 'buttonRightMove' : 'buttonLeftMove'} onClick={inTitle}>
              {result[1]}
            </button>
            <button disabled={disabled} className={plusCount ? 'buttonRightMove' : 'buttonLeftMove'} onClick={inTitle}>
              {result[2]}
            </button>
            <button disabled={disabled} className={plusCount ? 'buttonRightMove' : 'buttonLeftMove'} onClick={inTitle}>
              {result[3]}
            </button>
          </div>
        </Container>
      )}
    </>
  );
}

export default Game;
