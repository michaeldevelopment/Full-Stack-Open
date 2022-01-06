import React from 'react';

export default function Parts({ course }) {
  return (
    <div>
      <ol>
        {course.parts.map((item) => {
          return (
            <li key={item.id}>
              {item.name} {item.exercises}
            </li>
          );
        })}
      </ol>
      <h4>
        Total of {course.parts.reduce(function (sum, item) {
          return sum + item.exercises;
        }, 0)} exercises
      </h4>
    </div>
  );
}
