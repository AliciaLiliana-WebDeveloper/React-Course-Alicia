import Gallery from "./components/Gallery";

function App() {
  return (
    <Gallery>
      <Gallery.Album title="Naturaleza">
        <Gallery.Image
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          render={({ src, isFavorite, toggleFavorite }) => (
            <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
              <img
                src={src}
                alt=""
                width={500}
                style={{
                  border: isFavorite
                    ? "4px solid gold"
                    : "2px solid #ccc",
                }}
              />
              <p>{isFavorite ? "⭐ Favorita" : "Marcar favorita"}</p>
            </div>
          )}
        />

        <Gallery.Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          render={({ src, isFavorite, toggleFavorite }) => (
            <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
              <img src={src} alt="" width={500}/>
            </div>
          )}
        />
      </Gallery.Album>

      <Gallery.Album title="Ciudad">
        <Gallery.Image
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          render={({ src, isFavorite, toggleFavorite }) => (
            <div onClick={toggleFavorite} style={{ cursor: "pointer" }}>
              <img
                src={src}
                alt=""
                width={500}
                style={{ opacity: isFavorite ? 0.6 : 1 }}
              />
            </div>
          )}
        />

        <Gallery.Image
          src="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          render={({ src, isFavorite, toggleFavorite }) => (
            <button onClick={toggleFavorite}>
              <img src={src} alt="" width={500} />
              <div>{isFavorite ? "Quitar ❤️" : "Añadir ❤️"}</div>
            </button>
          )}
        />
      </Gallery.Album>
    </Gallery>
  );
}

export default App;
