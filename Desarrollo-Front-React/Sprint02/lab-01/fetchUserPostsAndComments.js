// fetchUserPostsAndComments.js

// Función principal:
async function getUserWithPostsAndComments(userId) {
    try {
      if (!Number.isInteger(userId) || userId <= 0) {
        throw new Error('El ID del User debe ser un num entero');
      }
  
      // ----- A. OBTENGO LOS DATOS DEL USER -----
      const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!userData.ok){
        throw new Error(`Error al querer obtener User-ID ${userId}: ${userData.status}`);
      }
      const user = await userData.json();
  
      // ----- B. OBTENGO LAAS PUBLICACIONES DEL USER -----
      const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!userPosts.ok){
        throw new Error(`Error al querer obtener posts del Usuario ${userId}: ${userPosts.status}`);
      }
      const posts = await userPosts.json();
  
      // ----- C. OBTENGO LOS COMENTARIOS DEL USER -----
      const postsWithComments = await Promise.all(posts.map(async (post) => {
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        if (!commentsResponse.ok){
          throw new Error(`Error al querer obtener comentarios del post ${post.id}: ${commentsResponse.status}`);
        }

        const comments = await commentsResponse.json();
        return { ...post, comments };
      }));
  
      // ----- FINALMENTE. OBTENGO EL FINAL OBJECT -----
      return {
        user,
        posts: postsWithComments
      };
  
    } catch (error) {
         // ----- EXTRA. COLOCO MIS ERRORES -----
      console.error('Error en getUserWithPostsAndComments:', error.message);
      throw error;
    }
  }
  
  // Ejemplo de uso:
  async function main() {
    try {
      const result = await getUserWithPostsAndComments(1);
      console.log(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  main();