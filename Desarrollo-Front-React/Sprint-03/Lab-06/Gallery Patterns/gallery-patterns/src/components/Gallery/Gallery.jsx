import { useState } from "react";
import { GalleryContext } from "./GalleryContext";

function Gallery({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (imageUrl) => {
    setFavorites((prev) =>
      prev.includes(imageUrl)
        ? prev.filter((url) => url !== imageUrl)
        : [...prev, imageUrl]
    );
  };

  return (
    <GalleryContext.Provider value={{ favorites, toggleFavorite }}>
      <div style={{ padding: "20px" }}>
        <h1>Galería</h1>

        <section>
          <h2>Favoritos</h2>
          {favorites.length === 0 && <p>No hay favoritos</p>}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {favorites.map((url) => (
              <img key={url} src={url} alt="favorito" width={120} />
            ))}
          </div>
        </section>

        <hr />

        {children}
      </div>
    </GalleryContext.Provider>
  );
}

export default Gallery;
