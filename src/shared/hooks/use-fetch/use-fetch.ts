import { ResponseTypePromise, UseFetchType } from "./type";
import { useCallback, useEffect, useState } from "react";

export const useFetch: UseFetchType = (fetchFunction, initialOptions) => {
  const [data, setData] = useState<null | ResponseTypePromise<typeof fetchFunction>>(null);
  const [loading, setLoading] = useState(false);

  const fetching = useCallback(
    async (options: typeof initialOptions) => {
      setLoading(true);
      const data = await fetchFunction(...options).then((res) => {
        setLoading(false);
        return res;
      });
      setData(data);
    },
    [fetchFunction]
  );

  useEffect(() => {
    fetching(initialOptions);
  }, []);

  return [data, loading, fetching];
};
