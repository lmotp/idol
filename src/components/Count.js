import React, { useCallback, useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const onClickPlusCount = useCallback(() => {
    setCount(count + 1);
    if (count === 10) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      {count}/10
      <button onClick={onClickPlusCount}>다음</button>
    </div>
  );
};

export default Count;
