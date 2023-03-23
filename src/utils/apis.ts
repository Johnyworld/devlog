import { AxiosRequestConfig } from "axios";

export type GetPostsResponse = { content: string };
export type GetPostResponse = { content: string };

interface APIs {
  getPosts: () => AxiosRequestConfig;
  getPost: (name: string) => AxiosRequestConfig;
}

const apis: APIs = {
  getPosts: () => ({
    method: "GET",
    url: "https://api.github.com/repos/johnyworld/dev-archive/readme",
  }),
  getPost: (name) => ({
    method: "GET",
    url: `https://api.github.com/repos/johnyworld/dev-archive/contents/archive/${name}.md`,
  }),
};

export default apis;
