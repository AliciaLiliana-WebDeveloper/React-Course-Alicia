import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchObservable } from '../utils/fetchObservable.js';

export const getUsers = () => {
  return fetchObservable('https://jsonplaceholder.typicode.com/users').pipe(
    map(users => users.map(u => ({ id: u.id, name: u.name, email: u.email }))),
    catchError(err => {
      console.error('Error obteniendo usuarios:', err.message);
      return of([]);
    })
  );
};