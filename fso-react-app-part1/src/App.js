import React, { useState } from 'react';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);

const Statistics = ({ src }) => {
  const [good, neutral, bad] = src;

  const average = (g, n, b) => {
    return (g * 1 + n * 0 + b * -1) / (g + n + b);
  };

  const positive = (g, total) => {
    return g * (100 / total);
  };

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good} </td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All secore:</td>
            <td>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{average(good, neutral, bad)}</td>
          </tr>
          <tr>
            <td>Positive:</td>
            <td>{positive(good, good + neutral + bad)}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return <h3> No feedback given </h3>;
};

// const StatisticLine = ({ text, value }) => {
//   const [good, neutral, bad] = value;

//   const average = (g, n, b) => {
//     return (g * 1 + n * 0 + b * -1) / (g + n + b);
//   };

//   const positive = (g, total) => {
//     return g * (100 / total);
//   };

//   if (good > 0 || neutral > 0 || bad > 0) {
//     switch (text) {
//       case 'good':
//         return (
//           <p>
//             {text}: {good}
//           </p>
//         );
//       case 'neutral':
//         return (
//           <p>
//             {text}: {neutral}
//           </p>
//         );
//       case 'bad':
//         return (
//           <p>
//             {text}: {bad}
//           </p>
//         );
//       case 'total':
//         return (
//           <p>
//             {text}: {good + neutral + bad}
//           </p>
//         );
//       case 'average':
//         return (
//           <p>
//             {text}: {average(good, neutral, bad)}
//           </p>
//         );
//       case 'positive':
//         return (
//           <p>
//             {text}: {positive(good, good + neutral + bad)}
//           </p>
//         );
//       default:
//         <p> Nothing</p>;
//     }
//   } else {
//     return <h3> No feedback given </h3>;
//   }
// };

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2> Good Feedback </h2>
      <Button onClick={goodClick} text="Click me for good" />
      <Button onClick={neutralClick} text="Click me for neutral" />
      <Button onClick={badClick} text="Click me for bad" />
      <h3> Statistics </h3>
      <Statistics src={[good, neutral, bad]} />

      {/* <StatisticLine text="good" value={[good, neutral, bad]} />
      <StatisticLine text="neutral" value={[good, neutral, bad]} />
      <StatisticLine text="bad" value={[good, neutral, bad]} />
      <StatisticLine text="total" value={[good, neutral, bad]} />
      <StatisticLine text="average" value={[good, neutral, bad]} />
      <StatisticLine text="positive" value={[good, neutral, bad]} /> */}
    </div>
  );
};

export default App;
