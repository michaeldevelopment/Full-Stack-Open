import React from 'react';
import Header from './Header';
import Parts from './Content/Parts';

const Course = ({ courses }) => {
  return (
    <div>
      <h1> Web Development curriculum </h1>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Parts course={course} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
