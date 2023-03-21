import parseReadmeToPosts from "../parsers/parseReadmeToPosts";
import apis, { GetPostsResponse } from "../utils/apis";
import useFetch from "./useFetch";

const useGetPosts = () => {
  const { data: dataRaw, ...rest } = useFetch<GetPostsResponse>(
    apis.getPosts()
  );

  if (!dataRaw?.content) {
    return { data: dataRaw, ...rest };
  }

  const data = parseReadmeToPosts(
    decodeURIComponent(escape(atob(dataRaw.content)))
  );

  return { data, ...rest };
};

export default useGetPosts;
