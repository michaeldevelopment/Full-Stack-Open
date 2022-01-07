import React, { useState } from 'react';

import Persons from './ComponentsFormPersons/Persons';
import PersonsFiltered from './ComponentsFormPersons/PersonsFiltered';
import PersonsForm from './ComponentsFormPersons/PersonsForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState();
  const [newFilter, setNewFilter] = useState('');

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
