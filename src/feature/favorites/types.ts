import { IFavorite } from "../../shared/type";

export interface IFavoriteContext {
  data: IFavorite[];
  addToFavorites: (postId: number) => void;
  removeFromFavorites: (id: number) => void;
}
