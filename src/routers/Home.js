import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Main from '../images/main.png';
import '../Css/Main.css';
import styled from 'styled-components';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const MainTitle = styled.div``;

const MainImage = styled.img`
  margin: 35px auto;
`;

const Home = () => {
  return (
    <>
      <Container>
        <MainBox>
          <MainTitle>
            <h1>가사 맞추기 게임</h1>
          </MainTitle>
          <MainImage className="mainImg" src={Main} alt="메인사진" title="메인사진"></MainImage>
          <Link to="/game">
            <button className="startButton">게임 시작</button>
          </Link>
        </MainBox>
      </Container>
    </>
  );
};

export default Home;
