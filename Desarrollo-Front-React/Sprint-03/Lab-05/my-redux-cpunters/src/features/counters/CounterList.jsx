// src/features/counters/CounterList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCounter, removeCounter, increment, decrement } from './countersSlice';

const CounterList = () => {
  const counters = useSelector((state) => state.counters); // Obtiene todos los contadores
  const dispatch = useDispatch();

  return (
    <div style={{ 
      marginTop: '20px', 
      display: 'flex', 
      flexDirection: 'column',
      gap: '10px'
    }}>
      <button 
        onClick={() => dispatch(addCounter())} 
        style={{ marginBottom: '20px', padding: '8px 12px' }}
      >
        Agregar nuevo contador
      </button>

      {counters.map((counter) => (
        <div 
          key={counter.id} 
          style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px',  gap: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '6px' }}
        >
          <span>Valor: {counter.value}</span>
          <button onClick={() => dispatch(increment(counter.id))}>+</button>
          <button onClick={() => dispatch(decrement(counter.id))}>-</button>
          <button onClick={() => dispatch(removeCounter(counter.id))}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default CounterList;
