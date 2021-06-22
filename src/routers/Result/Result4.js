import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import Sol from '../../images/Sol.png';
import '../../Css/Result.css';

const Result = () => {
  return (
    <>
      <Container>
        <div className="result">
          <h1>완전 고수무무</h1>
          <img className="resultImg" src={Sol} alt="솔라이미지" title="솔라" />
          <Link to={'/'}>
            <button>다시하기</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Result;
