import { IFavorite, IPost } from "./type";

const baseUrl = "http://localhost:3000";

export const api = {
  getPosts: async (params?: { q?: string }) => {
    let uri = baseUrl + "/posts";
    if (params?.q) {
      uri = uri + `?q=${params?.q}`;
    }

    const response = await fetch(uri);
    const data: IPost[] = await response.json();
    return data;
  },
  getFavorites: async () => {
    let uri = baseUrl + "/favorites";
    const response = await fetch(uri);
    const data: IFavorite[] = await response.json();
    return data;
  },
  removeFromFavorites: async (id: number) => {
    const uri = baseUrl + "/favorites/" + id;
    return await fetch(uri, { method: "DELETE" });
  },
  addToFavorites: async (postId: number) => {
    const uri = baseUrl + "/favorites/";
    return await fetch(uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId }),
    });
  },
};
