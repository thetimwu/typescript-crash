import React, { useState, Fragment } from "react";
import "./App.css";

function App(): JSX.Element {
  const [inputText, setinputText] = useState<string>("");

  interface ITodo {
    text: string;
    complete: boolean;
  }
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setinputText(e.target.value);
    // console.log(inputText);
  };

  // type FormElem = React.FormEvent<HTMLFormElement>;
  type ButtomElem = React.MouseEvent<HTMLButtonElement, MouseEvent>;

  const addHandler = (e: ButtomElem): void => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, complete: false }]);
    setinputText("");
  };

  const toggleHandler = (i: number): void => {
    const newTodos = [...todos];
    newTodos[i].complete = !newTodos[i].complete;
    setTodos(newTodos);
  };

  const deleteHandler = (i: number): void => {
    const newTodos = todos.filter((item, index) => index !== i);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo list App</h1>
      <form action="">
        <input type="text" value={inputText} onChange={inputHandler} />
        <button onClick={addHandler}>Add</button>
      </form>
      <div>
        {todos.map((item, i) => (
          <Fragment key={i}>
            <div
              onClick={() => deleteHandler(i)}
              style={{ textDecoration: item.complete ? "line-through" : "" }}
            >
              {item.text}
            </div>
            <button onClick={() => toggleHandler(i)}>Toggle</button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
