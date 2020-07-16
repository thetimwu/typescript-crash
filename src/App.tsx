import React, { useState, Fragment, useContext, useEffect } from "react";
import "./App.css";
import { useForm } from "./useForm";
import useFetch from "./useFetch";

interface Num {
  num1: number;
  num2: number;
}

function App(): JSX.Element {
  const [values, setValue] = useForm({ name: "", password: "" });
  const [num, setNum] = useState<number>(1);
  const { data, loading } = useFetch(`http://numbersapi.com/${num}/trivia`);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div>
      <div>{!data ? "Loading..." : data}</div>
      <button onClick={() => setNum(num + 1)}>Add 1</button>
      <form action="">
        <input type="text" name="name" onChange={setValue} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={setValue}
        />
      </form>
      <div>{values.password}</div>
      <div>{values.name}</div>
    </div>
  );
}

export default App;
