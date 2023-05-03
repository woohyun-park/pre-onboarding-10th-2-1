import { useEffect, useRef } from "react";

type Props = {
  onClickOutside: Function;
};

export const useClickOutside = ({ onClickOutside }: Props) => {
  const ref = useRef<any>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) onClickOutside();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { ref };
};
