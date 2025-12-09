import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,cca3');
        setCountries(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los países');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
