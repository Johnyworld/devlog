import { AxiosRequestConfig } from "axios";

export type GetPostsResponse = { content: string };

interface APIs {
  getPosts: () => AxiosRequestConfig;
}

const apis: APIs = {
  getPosts: () => ({
    method: "GET",
    url: "https://api.github.com/repos/johnyworld/dev-archive/readme",
  }),
};

export default apis;
