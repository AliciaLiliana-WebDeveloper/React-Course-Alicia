// src/App.jsx
import React from 'react';
import CounterList from './features/counters/CounterList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Aplicación de Contadores</h1>
      <CounterList />
    </div>
  );
}

export default App;
