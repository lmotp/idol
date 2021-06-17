import React from 'react';

const Data = ({ title, click }) => {
  return (
    <div>
      <button onClick={click}>{title}</button>
    </div>
  );
};

export default Data;
