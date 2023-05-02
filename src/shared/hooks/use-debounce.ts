import { useEffect, useState } from "react";

export const useDebounce: UseDebounce = (value, deley = 300) => {
  const [debounceValue, setDebounceValue] = useState<typeof value | null>(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, deley);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, deley]);
  return debounceValue;
};

type UseDebounce = <T>(value: T, deley?: number) => T | null;
