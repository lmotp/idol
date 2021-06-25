import React, { createContext, useContext, useReducer, useRef } from 'react';
const initializer = {
  songList: [
    {
      id: 1,
      title: 'Where Are We Now',
      artist: '문별',
      lyrics: '어디론가 날 데려가 줄래 아님 저 바람 부는 대로',
    },
    {
      id: 2,
      title: 'HIP',
      artist: '문별',
      lyrics: '날 자극한 여러분 감사 거기서 멈춘 찌질이 반사',
    },
    {
      id: 3,
      title: '데칼코마니',
      artist: '휘인',
      lyrics: '여잔 촉이 정말 빠르지 이미 물은 엎질러졌어 우린 몰래 새벽을 맞네',
    },
    {
      id: 4,
      title: '별이 빛나는 밤',
      artist: '휘인',
      lyrics: '겨울이 지나고 또다시 꽃은 피고 따뜻한 공기 냄새가 날 감싸',
    },
    {
      id: 5,
      title: '딩가딩가',
      artist: '솔라',
      lyrics: '왜 다들 화나 있어 요즘 너무 삭막해 그저 달콤한 휴식이 필요해',
    },
    {
      id: 6,
      title: '음오아예',
      artist: '화사',
      lyrics: '시간 좀 되나요 나 좀 도와줘요 그 쪽 때문에 오감이 제멋대로예요',
    },
    {
      id: 7,
      title: '넌 is 뭔들',
      artist: '솔라',
      lyrics: '센스매너 말투표정 행동 하나까지 섬세한 널 알아보는 나',
    },
    {
      id: 8,
      title: '나로 말할 것 같으면',
      artist: '화사',
      lyrics: '겨울에 민소매 입으면 여름이 되는 거야 I love Ya Introduce My Self',
    },
    {
      id: 9,
      title: '너나 해',
      artist: '휘인, 솔라',
      lyrics: '밤을 새워 버렸어 차갑게 식은 머리도 너의 태도가 이해 안 돼',
    },
    {
      id: 10,
      title: 'AYA',
      artist: '문별',
      lyrics: '님 얼굴에 침을 뱉어 오점 하나 생겨 우린 남이 됐다',
    },
  ],
};

const reduer = (state, action) => {
  switch (action.type) {
    case 'COUNT':
      return console.log('hi');
    default:
      throw new Error(`Unhanled action type$ {action.type}`);
  }
};

const UserStateContext = createContext();
// const UsersDispatchContext = createContext();
const UsersCounterContext = createContext();
export const Users = ({ children }) => {
  const [state, dispatch] = useReducer(reduer, initializer);
  const counter = useRef(0);

  return (
    <UserStateContext.Provider value={state}>
      <UsersCounterContext.Provider value={counter}>{children}</UsersCounterContext.Provider>
      {/* <UsersDispatchContext.Provider value={dispatch}></UsersDispatchContext.Provider> */}
    </UserStateContext.Provider>
  );
};

export const useUsersState = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error('Cannot find Users');
  }
  return context;
};

// export const useUserDispatch = () => {
//   const context = useContext(UsersDispatchContext);
//   if (!context) {
//     throw new Error('Cannot find Users');
//   }
//   return context;
// };

export const useUsersCounter = () => {
  const context = useContext(UsersCounterContext);
  if (!context) {
    throw new Error('Can not find Users');
  }
  return context;
};
