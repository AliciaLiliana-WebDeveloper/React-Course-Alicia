import { getUsers } from './src/api/users.js';
import { getUserPosts } from './src/api/posts.js';
import { getPostComments } from './src/api/comments.js';
import { switchMap } from 'rxjs/operators';

getUsers()
  .pipe(
    switchMap(users => {
      if (users.length === 0) throw new Error('No se encuentran usuarios');
      const firstUser = users[0];
      console.log('Usuario seleccionado:', firstUser);
      return getUserPosts(firstUser.id);
    }),
    switchMap(posts => {
      if (posts.length === 0) throw new Error('No se encuentran publicaciones');
      const firstPost = posts[0];
      console.log('Primera publicación:', firstPost);
      return getPostComments(firstPost.id);
    })
  )
  .subscribe({
    next: comments => console.log('Comentarios de 1ra publicación:', comments),
    error: err => console.error('Error en la cadena:', err.message),
    complete: () => console.log('Operación completada.')
  });
