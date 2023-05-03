import { useEffect } from "react";

type Props<T> = {
  value: T;
  action: Function;
  delay: number;
};

function useDebounce<T>({ value, action, delay }: Props<T>) {
  useEffect(() => {
    const handler = setTimeout(() => {
      action();
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);
}

export default useDebounce;
