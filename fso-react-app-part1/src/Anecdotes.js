import React, { useState } from 'react';

const Anecdote = ({ anecdotes, selected }) => {
  const [anecVotes, setAnecVotes] = useState(anecdotes[selected]);

  const handleVotes = () => {
    setAnecVotes({ ...anecVotes, votes: anecVotes.votes + 1 });
  };
  return (
    <>
      <h3> {anecdotes[selected].anecdote} </h3>
      <h4> Has xxx votes </h4>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text} </button>;
};

const Anecdotes = () => {
  const anecdotes = [
    { anecdote: 'If it hurts, do it more often', votes: 0 },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: 0,
    },
    {
      anecdote:
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0,
    },
    {
      anecdote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0,
    },
    { anecdote: 'Premature optimization is the root of all evil.', votes: 0 },
    {
      anecdote:
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0,
    },
    {
      anecdote:
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
      votes: 0,
    },
  ];

  const [selected, setSelected] = useState(0);

  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7));
  };

  const handleVote = () => {};

  return (
    <div>
      <Anecdote selected={selected} anecdotes={anecdotes} />
      <Button onClick={handleAnecdote} text="next anecdote" />
      <Button onClick={handleVote} text="vote" />
    </div>
  );
};

export default Anecdotes;
