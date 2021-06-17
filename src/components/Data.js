import React from 'react';

const Data = ({ title, click }) => {
  return (
    <>
      <button onClick={click}>{title}</button>
    </>
  );
};

export default Data;
