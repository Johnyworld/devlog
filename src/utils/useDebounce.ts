import { useState, useEffect } from 'react';

export const useDebounce = <T>(value: T, delay: number, callback?: () => void): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      callback?.();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
