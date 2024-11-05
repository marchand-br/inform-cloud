import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";

export default configureStore({
    reducer: {
      user: userReducer,
      //middleware: usado p/ req. asíncronas
    }
})