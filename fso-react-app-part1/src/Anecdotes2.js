import React, { useState } from 'react';

const Anecdote = ({ anecdotes, selected, anecVotes }) => {
  return (
    <>
      <h3> {anecdotes[selected]} </h3>
      <h4> Has {anecVotes} votes </h4>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text} </button>;
};

const Anecdotes2 = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [anecVotes, setAnecVotes] = useState(new Array(7).fill(0));

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7));
  };

  // const handleVote = () => {
  //   setAnecVotes(
  //     anecVotes.fill((anecVotes[selected] += 1), selected, selected)
  //   );
  //   console.log(anecVotes[selected]);
  //   console.log(anecVotes);
  // };

  const handleVote = () => {
    const copy = [...anecVotes];
    copy[selected] += 1;
    // copy.fill((copy[selected] += 1), selected, selected);
    setAnecVotes(copy);
  };

  return (
    <div>
      <Anecdote
        selected={selected}
        anecdotes={anecdotes}
        anecVotes={anecVotes[selected]}
      />
      <Button onClick={handleAnecdote} text="next anecdote" />
      <Button onClick={handleVote} text="vote" />
      <h1> Anecdote with most votes </h1>
      <p> {anecdotes[anecVotes.indexOf(Math.max(...anecVotes))]} </p>
    </div>
  );
};

export default Anecdotes2;
