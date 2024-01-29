import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './routing/Router';
import Store from './store/store';
import ActiveUserStore from './store/activeUserStore';
import CityStore from './store/cityStore';
import Folders from './store/folderStore';


interface State {
  store: Store,
  activeUser: ActiveUserStore
  cityStore: CityStore,
  folderStore: Folders
}

export const store = new Store();
export const activeUser = new ActiveUserStore();
export const cityStore = new CityStore();
export const folderStore = new Folders();

export const Context = createContext<State>({
  store,
  activeUser,
  cityStore,
  folderStore
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{
      store,
      activeUser,
      cityStore,
      folderStore
    }}>
      <RouterProvider router={router} />
    </Context.Provider>
);

