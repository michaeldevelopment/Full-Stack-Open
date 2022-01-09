import React from 'react';

export default function Persons({ props }) {
  const [persons, deletePerson] = props;
  return (
    <div>
      <ol>
        {persons.map((i) => (
          <li key={i.name} style={{ padding: '2px' }}>
            {i.name} {i.number}{' '}
            <button onClick={(ev) => deletePerson(ev, i.id)}> Delete </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
