import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
