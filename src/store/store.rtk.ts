import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { authAPI } from "./servisesRTK/AuthService";
import { cityAPI } from "./servisesRTK/CitiesService";
import authReducer from "./sliceRTK/AuthSlice";

const rootReducer = combineReducers({
    [cityAPI.reducerPath]: cityAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    authState: authReducer
});

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            cityAPI.middleware,
            authAPI.middleware
        )
    });
}

export const storeRTK = setupStore();
export const useAppDispath = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];