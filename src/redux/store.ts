import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import hotelReducer from "./hotel-slice";

export const store = configureStore({
    reducer: {
      user: userReducer,
      hotel: hotelReducer,
    },
    // middleware: [],
})

export type AppDispatch = typeof store.dispatch;

export default store;
