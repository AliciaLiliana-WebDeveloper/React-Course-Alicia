import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchObservable } from '../utils/fetchObservable.js';

export const getUserPosts = (userId) => {
  return fetchObservable(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).pipe(
    catchError(err => {
      console.error(`Error obteniendo posts del usuario ${userId}:`, err.message);
      return of([]);
    })
  );
};
