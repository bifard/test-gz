import { useCallback, useContext } from "react";

import { FavoritesContext } from "./context";

export const useFavoriteForId = (postId: number) => {
  const { data, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const someInFavorites = data.some((item) => item.postId === postId);
  const handleFavorites = useCallback(
    (postId: number) => {
      if (someInFavorites) {
        removeFromFavorites(postId);
      } else {
        addToFavorites(postId);
      }
    },
    [someInFavorites, removeFromFavorites, addToFavorites]
  );
  return [someInFavorites, handleFavorites] as [boolean, typeof handleFavorites];
};
