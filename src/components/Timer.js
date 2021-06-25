import React, { useEffect, useState } from 'react';
import { useUsersCounter } from '../Users';

export const Timer = ({ mm }) => {
  const count = useUsersCounter();
  const [counter, setCounter] = useState(count);
  const [seconds, setSeconds] = useState(mm);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        setCounter(counter + 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds, counter]);
  console.log(count, '이것은 타이머');

  return <h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>;
};
