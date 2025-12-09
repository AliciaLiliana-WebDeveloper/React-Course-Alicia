import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        width: '200px',
        textAlign: 'center'
      }}
    >
      <img
        src={country.flags.png}
        alt={`Bandera de ${country.name.common}`}
        style={{ width: '100px', height: '60px', objectFit: 'cover' }}
      />
      <h3>{country.name.common}</h3>
      <p>Población: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryCard;
