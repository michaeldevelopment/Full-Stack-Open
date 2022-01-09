import React from 'react';

export default function PersonsFiltered({personsFilter}) {
  return (
    <div>
      {personsFilter.map((i) => (
        <li key={i.name}>
          {i.name} {i.number}
        </li>
      ))}
    </div>
  );
}
