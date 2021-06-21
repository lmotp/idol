import React from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <>
      <Container>
        <h1>중수무무</h1>
        <Link to={'/'}>
          <button>다시하기</button>
        </Link>
      </Container>
    </>
  );
};

export default Result;
