import React from 'react';

export default function Persons({persons}) {
  return (
    <div>
      <ol>
        {persons.map((i) => (
          <li key={i.name}>
            {i.name} {i.number}
          </li>
        ))}
      </ol>
    </div>
  );
}
