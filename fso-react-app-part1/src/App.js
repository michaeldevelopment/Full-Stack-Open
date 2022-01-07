import React, { useState, useEffect } from 'react';

import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);

  console.log(countries[0]);

  const handleFilterInput = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Find Countries! </h2>
      <p>
        Find Countries: <input onChange={handleFilterInput} />
      </p>
    </div>
  );
};

export default App;
