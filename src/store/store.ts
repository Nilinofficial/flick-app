import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import tokenReducer from "../slices/tokenSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    token:tokenReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
