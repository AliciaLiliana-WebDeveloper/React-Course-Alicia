import { useContext } from "react";
import { GalleryContext } from "./GalleryContext";

function Image({ src, render }) {
  const { favorites, toggleFavorite } = useContext(GalleryContext);
  const isFavorite = favorites.includes(src);

  return render({
    src,
    isFavorite,
    toggleFavorite: () => toggleFavorite(src),
  });
}

export default Image;
