import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { fetchObservable } from '../utils/fetchObservable.js';

export const getPostComments = (postId) => {
  return fetchObservable(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).pipe(
    catchError(err => {
      console.error(`Error obteniendo comentarios del post ${postId}:`, err.message);
      return of([]);
    })
  );
};
