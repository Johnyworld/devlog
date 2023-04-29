import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "type";

const useGetPosts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios<{ content: string }>({
      method: "GET",
      url: "https://api.github.com/repos/johnyworld/dev-archive/contents/generatedList.json"
    })
      .then((res) => {
        setData(JSON.parse(decodeURIComponent(escape(atob(res.data.content)))));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading };
};

export default useGetPosts;
