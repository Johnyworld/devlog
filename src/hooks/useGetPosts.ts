import { useEffect, useState } from "react";
import axios from "axios";
import parseReadmeToPosts, {
  PostsResponse
} from "../parsers/parseReadmeToPosts";

const useGetPosts = () => {
  const [data, setData] = useState<PostsResponse>({
    categories: [],
    posts: []
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios<{ content: string }>({
      method: "GET",
      url: "https://api.github.com/repos/johnyworld/dev-archive/readme"
    })
      .then((res) => {
        if (res.data.content) {
          setData(
            parseReadmeToPosts(
              decodeURIComponent(escape(atob(res.data.content)))
            )
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading };
};

export default useGetPosts;
