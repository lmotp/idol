import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import Whee from '../../images/Whee.png';
import '../../Css/Result.css';
import { useUsersDispatch, useUsersState } from '../../Users';

const Result = () => {
  const users = useUsersState();
  const { rightCounter, wrongCounter } = users;
  const dispatch = useUsersDispatch();
  const gameReset = () => {
    dispatch({ type: 'RESET' });
  };
  return (
    <>
      <Container>
        <div className="result">
          <h1>중수무무</h1>
          <img className="resultImg" src={Whee} alt="휘인이미지" title="휘인" />
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
