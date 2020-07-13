import React, { createContext, useReducer } from "react";

export interface IState {
  episodes: string[];
  favourites: string[];
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export interface IAction {
  type: string;
  payload: any;
}

// type Action =
//   | { type: "FETCH_DATA"; payload: string }
//   | { type: "MOVE_VIDEO"; payload: string };

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    default:
      return state;
  }
}

//Store
export const VideoContext = createContext<IState | any>(initialState);

export const VideoContextProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </VideoContext.Provider>
  );
};
