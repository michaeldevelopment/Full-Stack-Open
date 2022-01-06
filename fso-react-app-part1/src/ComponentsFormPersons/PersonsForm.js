import React from 'react';

export default function PersonsForm({ props }) {
  const [addPeople, handleNameInput, handleNumberInput] = props;
  
  return (
    <div>
      <form onSubmit={addPeople}>
        <div>
          name: <input onChange={handleNameInput} />
          <br />
          number: <input onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
