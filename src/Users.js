import React, { createContext, useContext, useReducer, useState } from 'react';
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
  rightCounter: 0,
  wrongCounter: 0,
  counter: 0,
};

const reduer = (state, action) => {
  switch (action.type) {
    case 'RIGHT':
      return { ...state, counter: state.counter + 1, rightCounter: state.rightCounter + 1 };
    case 'WRONG':
      return { ...state, wrongCounter: state.wrongCounter + 1, counter: state.counter + 1 };
    case 'RESET':
      return { ...state, wrongCounter: 0, rightCounter: 0, counter: 0 };
    default:
      throw new Error(`Unhanled action type ${action.type}`);
  }
};

const UserStateContext = createContext();
const UsersDispatchContext = createContext();
const UsersShuffleTitle = createContext();
const UserChangeLyrics = createContext();

export const Users = ({ children }) => {
  const [state, dispatch] = useReducer(reduer, initializer);

  //문제 바꾸기
  const changeLyrics = () => {
    const lyrics = [];
    state.songList.map((v) => lyrics.push(v.lyrics));
    return lyrics;
  };

  // 보기창 바꾸기
  const shuffleBox = () => {
    const view = [];
    const shuffle = [];
    const shuffle2 = [];
    state.songList.map((v) => view.push(v.title));
    const wow = view.splice(state.counter, 1);
    for (let i = 0; i < 9; i++) {
      shuffle.push(view.splice(Math.floor(Math.random() * view.length), 1)[0]);
    }
    shuffle.unshift(wow);
    const noNmae = shuffle.slice(0, 4);
    for (let i = 0; i < 4; i++) {
      shuffle2.push(noNmae.splice(Math.floor(Math.random() * noNmae.length), 1)[0]);
    }
    return shuffle2;
  };

  return (
    console.log(state),
    (
      <UserStateContext.Provider value={state}>
        <UsersDispatchContext.Provider value={dispatch}>
          <UsersShuffleTitle.Provider value={shuffleBox()}>
            <UserChangeLyrics.Provider value={changeLyrics()}>{children}</UserChangeLyrics.Provider>
          </UsersShuffleTitle.Provider>
        </UsersDispatchContext.Provider>
      </UserStateContext.Provider>
    )
  );
};

export function useUsersState() {
  const context = useContext(UserStateContext);
  return context;
}

export function useUsersDispatch() {
  const context = useContext(UsersDispatchContext);
  return context;
}

export function useUsersTitle() {
  const context = useContext(UsersShuffleTitle);
  return context;
}

export function useUsresLyrics() {
  const context = useContext(UserChangeLyrics);
  return context;
}
