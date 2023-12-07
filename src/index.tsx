import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routing/Router';
import Store from './store/store';
import ActiveUserStore from './store/activeUserStore';
import { Provider } from 'react-redux';
import { storeRTK } from './store/store.rtk';

interface State {
  store: Store,
  activeUser: ActiveUserStore
}

const store = new Store();
const activeUser = new ActiveUserStore();

export const Context = createContext<State>({
  store,
  activeUser
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={storeRTK}>
    <Context.Provider value={{
      store,
      activeUser
    }}>
      <RouterProvider router={router} />
    </Context.Provider>
  </Provider>
);

