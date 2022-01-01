import React, { useState } from 'react';

const VotesExercise = () => {
  const arr = [0, 0, 0, 0, 0, 0, 0];
  const copy = [...arr];
  const [arry, setArry] = useState(copy);
  // const random = Math.floor(Math.random() * 7);

  const handleClick = () => {
    setArry(...arry, (arry[5] += 1));
    console.log(arry);
  };

  return (
    <div>
      <p> {arry} </p>
      <button onClick={handleClick}> jeje </button>
    </div>
  );
};

export default VotesExercise;
