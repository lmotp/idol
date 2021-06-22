import React, { useContext } from 'react';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import Hwa from '../../images/Hwa.png';
import { UserContext } from '../../components/Users';
import '../../Css/Result.css';

const Result = () => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <>
      <Container>
        <div className="result">
          <h1 className="resultTop">하수무무</h1>
          <img className="resultImg" src={Hwa} alt="화사이미지" title="화사" />
          <Link to={'/'}>
            <button className="resultBtn">다시하기</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Result;
