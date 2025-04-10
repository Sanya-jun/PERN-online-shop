import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import DeviseStore from "./store/DeviseStore";
import BasketStore from "./store/BasketStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviseStore(),
      basket: new BasketStore(),
    }}
  >
    <App />
  </Context.Provider>
);
