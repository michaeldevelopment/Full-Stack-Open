import React, { useState, useEffect } from 'react';

import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);

  const handleFilterInput = (e) => {
    setNewFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown: <input onChange={handleFilterInput} />
      </p>
      {filter}
    </div>
  );
};

export default App;
