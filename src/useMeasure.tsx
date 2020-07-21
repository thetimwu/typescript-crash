import { useState, useRef, useLayoutEffect } from "react";

export default function useMeasure(deps: string | null): [{}, any] {
  const [rect, setRect] = useState<{}>({});
  const myRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (myRef.current) {
      setRect(myRef.current.getBoundingClientRect());
      console.log(deps);
    }
  }, [deps]);

  return [rect, myRef];
}
