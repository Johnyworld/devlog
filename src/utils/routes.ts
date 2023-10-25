export const getRoute = {
  root: () => {
    return `/`;
  },
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
