import React, {
  useState,
  Fragment,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
// import "./App.css";
import { useForm } from "./useForm";
import useFetch from "./useFetch";
import useMeasure from "./useMeasure";

interface Num {
  num1: number;
  num2: number;
}

function App(): JSX.Element {
  const [values, setValue] = useForm({ name: "", password: "" });
  const [num, setNum] = useState<number>(1);
  // const { data, loading } = useFetch(`http://numbersapi.com/${num}/trivia`);
  const inputText = useRef<HTMLInputElement>(null!);
  const inputNum = useRef<number>(0);
  // const [rect, myRef] = useMeasure(data);
  const renders = useRef<number>(0);

  const increase = useCallback(
    (n: number) => {
      console.log("renders: ", renders.current++);
      setNum((c) => c + n);
    },
    [setNum]
  );

  return (
    <div>
      {/* <div ref={myRef}>{!data ? "Loading..." : data}</div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button onClick={() => setNum(num + 1)}>Add 1</button> */}
      <div>{num}</div>
      <div>
        <button
          onClick={() => {
            increase(1);
            console.log("renders: ", renders.current++);
          }}
        >
          Test useCallback
        </button>
      </div>
    </div>
  );
}

export default App;
