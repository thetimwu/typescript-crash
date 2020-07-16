import { useState, useEffect } from "react";

interface Props {
  data: string | null;
  loading: boolean;
}

const useFetch = (url: string) => {
  const [state, setstate] = useState<Props>({ data: null, loading: true });

  useEffect(() => {
    setstate({ ...state, loading: true });
    const fetchData = async () => {
      const data = await (await fetch(url)).text();
      setstate({ data, loading: false });
    };
    fetchData();
    return (): void => {
      console.log("clean up");
    };
  }, [url]);

  return state;
};

export default useFetch;
