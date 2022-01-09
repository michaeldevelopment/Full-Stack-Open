import React, { useState, useEffect } from 'react';

import Persons from './ComponentsFormPersons/Persons';
import PersonsFiltered from './ComponentsFormPersons/PersonsFiltered';
import PersonsForm from './ComponentsFormPersons/PersonsForm';

import PersonsData from './services/persons';

const App2 = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState();
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    PersonsData.getAll().then((response) => setPersons(response.data));
  }, []);

  const addPeople = (e) => {
    e.preventDefault();
    window.alert(
      `${newName} with number ${newNumber} has been added to the PhoneBook`
    );
    const newObject = { name: newName, number: newNumber };
    PersonsData.create(newObject).then((response) => {
      setPersons([...persons, response.data]);
    });
    //  setPersons([...persons, { name: newName, number: newNumber }]);
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

  const deletePerson = (ev, id) => {
    ev.preventDefault();
    if (window.confirm('Do you really want to delete this person?')) {
      PersonsData.deleteData(id).then(() =>
        setPersons(persons.filter((p) => p.id !== id))
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown: <input onChange={handleFilterInput} />
      </p>
      <PersonsForm props={[addPeople, handleNameInput, handleNumberInput]} />
      <Persons props={[persons, deletePerson]} />
      <PersonsFiltered personsFilter={personsFilter} />
    </div>
  );
};

export default App2;
