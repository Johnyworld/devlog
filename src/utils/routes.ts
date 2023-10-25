export const getRoute = {
  post: () => {
    return `/post`;
  },
  postWithFileName: (fileName: string) => {
    return `/post/${fileName}`;
  },
  work: () => {
    return `/work`;
  },
  cv: () => {
    return `/cv`;
  },
};
