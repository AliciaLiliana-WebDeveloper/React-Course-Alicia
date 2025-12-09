import { useState } from 'react';
import { useCountries } from './hooks/useCountries';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';

function App() {
  const { countries, loading, error } = useCountries();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Countries App</h1>
      <CountrySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading && <p>Cargando países...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <CountryList countries={filteredCountries} />}
    </div>
  );
}

export default App;
