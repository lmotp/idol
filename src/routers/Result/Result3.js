import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import Moon from '../../images/Moon.png';
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
          <h1>고수무무</h1>
          <img className="resultImg" src={Moon} alt="문별이미지" title="문별" />
          <Link to={'/'}>
            <button onClick={gameReset} className="resultBtn">
              다시하기
            </button>
          </Link>
          <h1>
            {rightCounter},{wrongCounter}
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Result;
