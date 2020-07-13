import React, { useState, Fragment, useContext, useEffect } from "react";
import "./App.css";
import { VideoContext, IAction } from "./contexts/VideoContext";

function App(): JSX.Element {
  const { state, dispatch } = useContext(VideoContext);

  useEffect(() => {
    state.episodes.length === 0 && fetchData();
  });

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = await fetch(url);
    const dataJson = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJson,
    });
  };

  const addFavorite = (post: Post): IAction =>
    dispatch({
      type: "ADD_FAVORITE",
      payload: post,
    });

  return (
    <section>
      {state.episodes.map((item: Post) => (
        <section key={item.id}>
          <div>{item.title}</div>
          <p>{item.body}</p>
          <button onClick={() => addFavorite(item)}>Add Favorite</button>
        </section>
      ))}
      {console.log(state.favourites)}
    </section>
  );
}

export default App;
