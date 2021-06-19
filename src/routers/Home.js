import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
const Home = ({ startGame }) => {
  return (
    <>
      <Container>
        <Link to="/game">
          <button onClick={startGame}>게임을 시작한우~+</button>
        </Link>
      </Container>
    </>
  );
};

export default Home;
