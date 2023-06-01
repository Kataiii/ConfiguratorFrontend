import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routing/Router';
import Store from './store/store';

interface State{
  store: Store
}

const store = new Store();

export const Context = createContext<State>({
  store
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
    store
  }}>
    <RouterProvider router={router} />
  </Context.Provider>
);

