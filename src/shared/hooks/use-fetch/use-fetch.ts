import { ResponseTypePromise, UseFetchType } from "./type";
import { useCallback, useEffect, useState } from "react";

export const useFetch: UseFetchType = (fetchFunction, options) => {
  const [data, setData] = useState<null | ResponseTypePromise<typeof fetchFunction>>(null);
  const [loading, setLoading] = useState(false);

  const fetching = useCallback(
    async (arg: typeof options) => {
      setLoading(true);
      const data = await fetchFunction(...arg).then((res) => {
        setLoading(false);
        return res;
      });
      setData(data);
    },
    [fetchFunction]
  );

  useEffect(() => {
    fetching(options);
  }, [fetching, ...options]);

  return [data, loading];
};
