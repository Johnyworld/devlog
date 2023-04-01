import { useEffect, useState } from "react";
import axios from "axios";

interface Params {
  postName: string;
}

const useGetPost = ({ postName }: Params) => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios<{ content: string }>({
      method: "GET",
      url: `https://api.github.com/repos/johnyworld/dev-archive/contents/archive/${postName}.md`
    })
      .then((res) => {
        if (res.data.content) {
          setData(decodeURIComponent(escape(atob(res.data.content))));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postName]);

  useEffect(() => {
    setLoading(true);
  }, [postName]);

  return { data, loading };
};

export default useGetPost;
