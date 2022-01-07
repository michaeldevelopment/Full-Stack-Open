import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Persons from './ComponentsFormPersons/Persons';
import PersonsFiltered from './ComponentsFormPersons/PersonsFiltered';
import PersonsForm from './ComponentsFormPersons/PersonsForm';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState();
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data));
  }, []);

  console.log(persons);

  const addPeople = (e) => {
    e.preventDefault();
    window.alert(
      `${newName} with number ${newNumber} has been added to the PhoneBook`
    );
    setPersons([...persons, { name: newName, number: newNumber }]);
  };

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterInput = (e) => {
    setNewFilter(e.target.value);
  };

  const personsFilter = persons.filter((p) => p.name === newFilter);

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown: <input onChange={handleFilterInput} />
      </p>
      <PersonsForm props={[addPeople, handleNameInput, handleNumberInput]} />
      <Persons persons={persons} />
      <PersonsFiltered personsFilter={personsFilter} />
    </div>
  );
};

export default App;
