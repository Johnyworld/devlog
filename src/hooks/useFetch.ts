import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface Params extends AxiosRequestConfig {}

const useFetch = <T>(params: Params) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      return;
    }
    setLoading(true);

    axios(params)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
};

export default useFetch;
