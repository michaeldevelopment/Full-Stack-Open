import React from 'react';

export default function Persons({ persons }) {
  return (
    <div>
      <ol>
        {persons.map((i) => (
          <li key={i.name} style={{ padding: '2px' }}>
            {i.name} {i.number}{' '}
          </li>
        ))}
      </ol>
    </div>
  );
}
