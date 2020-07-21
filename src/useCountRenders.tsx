import { useRef } from "react";

export const useCountRenders = (): void => {
  const renders = useRef<number>(0);
  return console.log("renders: ", renders.current++);
};
