import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import userReducer from "./user-slice";
import hotelReducer from "./hotel-slice";
import themeReducer from "./theme-slice";

export const store = configureStore({
    reducer: {
      user  : userReducer,
      hotel : hotelReducer,
      theme : themeReducer,
    },
    // middleware: [],
})

export default store;

export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
