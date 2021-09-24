import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Container from '../components/Container';
import { Redirect } from 'react-router-dom';
import '../Css/Game.css';
import { useUsersState, useUsersDispatch, useUsersTitle, useUsresLyrics } from '../Users';
import styled from 'styled-components';

const Button = styled.button`
  width: 250px;
  font-size: 18px;
  padding: 20px;
  border-radius: 10px;
  background-color: transparent;
  margin: 10px auto;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4), -3px -3px 1px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: khaki;
    color: whitesmoke;
  }
`;

const Timer = styled.span``;

function Game() {
  const context = useUsersState();
  const dispatch = useUsersDispatch();
  const shuffleTitle = useUsersTitle();
  const lyrics = useUsresLyrics();

  const [isLoding, setIsLoding] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const [animation, setAnimation] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(false);

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
            <span className={timer ? 'wow' : 'wow2'}>{seconds < 10 ? `0${seconds}` : seconds}</span>
            <span>Q{context.counter + 1}/10</span>
          </h2>
          <h1 className="question">{lyrics[context.counter]}</h1>
          <div className="buttonBox">
            <Button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[0]}
            </Button>
            <Button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[1]}
            </Button>
            <Button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[2]}
            </Button>
            <Button
              disabled={disabled}
              className={animation ? 'buttonRightMove' : 'buttonLeftMove'}
              onClick={onClickChangeTitle}
            >
              {shuffleTitle[3]}
            </Button>
          </div>
        </Container>
      )}
    </>
  );
}

export default Game;
