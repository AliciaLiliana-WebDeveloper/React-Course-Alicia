// src/features/users/UsersList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomUser, removeUser } from './usersSlice';

const UsersList = () => {
  const { users, status, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(fetchRandomUser())}
        style={{ marginBottom: '20px', padding: '8px 12px' }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Cargando...' : 'Agregar usuario'}
      </button>

      {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {users.map(user => (
          <div
            key={user.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '6px',
            }}
          >
            <img src={user.thumbnail} alt={`${user.firstName} ${user.lastName}`} />
            <span>{user.firstName} {user.lastName}</span>
            <button onClick={() => dispatch(removeUser(user.id))}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
