import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Main from '../images/main.png';
import '../Css/Main.css';
const Home = ({ startGame }) => {
  return (
    <>
      <Container>
        <div className="main">
          <div className="mainTitle">
            <h1>무무를 위한</h1>
            <h2>가사 맞추기 게임</h2>
          </div>
          <img className="mainImg" src={Main} alt="메인사진" title="메인사진"></img>
          <Link to="/game">
            <button className="startButton" onClick={startGame}>
              게임을 시작한우~+
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Home;
