import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Container from '../components/Container';
import { Redirect } from 'react-router-dom';
import '../Css/Game.css';
import { useUsersState, useUsersDispatch, useUsersTitle, useUsresLyrics } from '../Users';

function Game() {
  const context = useUsersState();
  const dispatch = useUsersDispatch();
  const shuffleTitle = useUsersTitle();
  const lyrics = useUsresLyrics();

  const [isLoding, setIsLoding] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const [animation, setAnimation] = useState(true);
  const [disabled, setDisabled] = useState(false);

  // 로딩화면
  useEffect(() => {
    setIsLoding(false);
  }, [isLoding]);

  //시간초 다시 리셋하면서 애니메이션까지
  const titleMoveConfirm = useCallback(() => {
    setDisabled(true);
    setSeconds(30);
    setAnimation(false);
    setTimeout(() => {
      setAnimation(true);
      setDisabled(false);
    }, 700);
  }, [disabled, seconds, animation]);

  // 보기 클릭했을때
  const onClickChangeTitle = (e) => {
    titleMoveConfirm();

    // 맞는지 틀린지 판단
    if (e.target.textContent === context.songList[context.counter].title) {
      dispatch({ type: 'RIGHT' });
    } else {
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
        dispatch({ type: 'WRONG' });
        titleMoveConfirm();
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds, titleMoveConfirm, dispatch]);

  // 카운터가 10개 넘으면은 결과창으로
  if (context.counter === 10) {
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
            <span>Q{context.counter + 1}/10</span>
          </h2>
          <h1 className="question">{lyrics[context.counter]}</h1>
          <div className="buttonBox">
            <button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[0]}
            </button>
            <button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[1]}
            </button>
            <button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[2]}
            </button>
            <button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[3]}
            </button>
          </div>
        </Container>
      )}
    </>
  );
}

export default Game;
