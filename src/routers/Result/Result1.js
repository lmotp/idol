import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import Hwa from '../../images/Hwa.png';
import '../../Css/Result.css';
import { useUsersState, useUsersDispatch } from '../../Users';

const Result = () => {
  const users = useUsersState();
  const dispatch = useUsersDispatch();
  const gameReset = () => {
    dispatch({ type: 'RESET' });
  };
  const { rightCounter, wrongCounter } = users;
  return (
    <>
      <Container>
        <div className="result">
          <h1 className="resultTop">하수무무</h1>
          <img className="resultImg" src={Hwa} alt="화사이미지" title="화사" />
          <Link to={'/'}>
            <button onClick={gameReset} className="resultBtn">
              다시하기
            </button>
          </Link>
          <h2>맞은갯수 : {rightCounter}</h2>
          <h2>틀린갯수 :{wrongCounter}</h2>
        </div>
      </Container>
    </>
  );
};

export default Result;
