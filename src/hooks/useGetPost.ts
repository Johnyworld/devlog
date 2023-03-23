import apis, { GetPostResponse } from "../utils/apis";
import useFetch from "./useFetch";

interface Params {
  postName: string;
}

const useGetPost = ({ postName }: Params) => {
  const { data: dataRaw, ...rest } = useFetch<GetPostResponse>(
    apis.getPost(postName)
  );

  if (!dataRaw?.content) {
    return { data: null, ...rest };
  }

  const data = decodeURIComponent(escape(atob(dataRaw.content)));

  return { data, ...rest };
};

export default useGetPost;
