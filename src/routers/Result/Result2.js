import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import Whee from '../../images/Whee.png';
import '../../Css/Result.css';

const Result = () => {
  return (
    <>
      <Container>
        <div className="result">
          <h1>중수무무</h1>
          <img className="resultImg" src={Whee} alt="휘인이미지" title="휘인" />
          <Link to={'/'}>
            <button>다시하기</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Result;
