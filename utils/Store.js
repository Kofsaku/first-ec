import React, { createContext, useReducer } from "react";


export const Store = createContext();
const initialState = {
  darkMode: true,
};

export function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return {
        ...state,
        darkMode: true,
      };
    case "DARK_MODE_OFF":
      return {
        ...state,
        darkMode: false
      }
    default:
      return state;
  }
}

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>{props.children}</Store.Provider>
  );
}

// 下記の書き換えも可能
// import React, { createContext, useReducer } from "react";


// export const Store = createContext();
// const initialState = {
//   darkMode: true,
// };

// export function reducer(state, action) {
//   switch (action.type) {
//     case "DARK_MODE_ON":
//       return {
//         ...state,
//         darkMode: !state.darkMode,
//       };
//     default:
//       return state;
//   }
// }

// export default function StoreProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
//   );
// }