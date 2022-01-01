import React, { useState } from 'react';

const Text = ({ text }) => <h2> {text} </h2>;

const Display = ({ counter }) => <h2> {counter} </h2>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text} </button>;
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <p> This app is used to show the amount of clicks.</p>;
  }
  return <p>{allClicks.join(' ')}</p>;
};

const App2 = () => {
  const [counter, setCounter] = useState(0);

  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);

  const [allClicks, setClicks] = useState([]);

  // setTimeout(() => {
  //   setCounter(counter + 1);
  // }, 1000);

  // console.log(`rendering .. ${counter}`);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Greetings</h1>
      <Display counter={counter}></Display>
      <Button onClick={increaseCounter} text="Increase me"></Button>
      <Button onClick={resetCounter} text="Reset me"></Button>
      <Button onClick={decreaseCounter} text="Decrease me"></Button>
      <Button
        onClick={() => {
          setClicks(allClicks.concat('R'));
          setRight(right + 1);
        }}
        text="Right"
      ></Button>
      <Button
        onClick={() => {
          setClicks(allClicks.concat('L'));
          setLeft(left - 1);
        }}
        text="Left"
      ></Button>
      <Text text={right} />
      <Text text={left} />
      <History allClicks={allClicks} />

      <button onClick={() => console.log('click the button betch')}>
        {' '}
        betch{' '}
      </button>
    </div>
  );
};

export default App2;
