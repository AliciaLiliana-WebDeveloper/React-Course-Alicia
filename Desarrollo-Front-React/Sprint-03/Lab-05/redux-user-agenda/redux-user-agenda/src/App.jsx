// src/App.jsx
import React from 'react';
import UsersList from './features/users/UsersList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Agenda de Usuarios</h1>
      <UsersList />
    </div>
  );
}

export default App;
