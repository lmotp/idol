import React from 'react';
import styled from 'styled-components';
const ContainerBox = styled.div`
  width: 650px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  padding: 20px;
  overflow: hidden;
`;

const BodyBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

const Container = ({ children }) => {
  return (
    <BodyBox>
      <ContainerBox>{children}</ContainerBox>
    </BodyBox>
  );
};

export default Container;
