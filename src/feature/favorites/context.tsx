import { FC, ReactNode, createContext, useCallback } from "react";

import { IFavoriteContext } from "./types";
import { api } from "../../shared/service";
import { useFetch } from "../../shared/hooks/use-fetch/use-fetch";

export const FavoritesContext = createContext<IFavoriteContext>({
  data: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  const [favorites, _, refetch] = useFetch(api.getFavorites, [undefined]);

  const addToFavorites = useCallback(
    (postId: number) => {
      api.addToFavorites(postId).then(() => refetch([undefined]));
    },
    [refetch]
  );

  const removeFromFavorites = useCallback(
    (postId: number) => {
      const id = favorites?.find((item) => item.postId === postId)?.id;
      id && api.removeFromFavorites(id).then(() => refetch([undefined]));
    },
    [favorites, refetch]
  );

  return (
    <FavoritesContext.Provider value={{ data: favorites || [], addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
