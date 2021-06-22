import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import Moon from '../../images/Moon.png';
import '../../Css/Result.css';

const Result = () => {
  return (
    <>
      <Container>
        <div className="result">
          <h1>고수무무</h1>
          <img className="resultImg" src={Moon} alt="문별이미지" title="문별" />
          <Link to={'/'}>
            <button>다시하기</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Result;
