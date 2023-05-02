import { IPost } from "./type";

const baseUrl = "http://localhost:3000";

export const api = {
  getPosts: async (q?: string) => {
    let uri = baseUrl + "/posts";
    if (q) {
      uri = uri + `?q=${q}`;
    }

    const response = await fetch(uri);
    const data: IPost[] = await response.json();
    return data;
  },
};
