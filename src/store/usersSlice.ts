import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models";

interface UsersState {
  currentUser: UserModel | null;
  isLoading: boolean;
}

const initialState: UsersState = {
  currentUser: null,
  isLoading: true,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserModel>) {
      const currentTime = new Date().getTime();
      const userWithTimestamp = {
        ...action.payload,
        loginTime: currentTime,
      };
      localStorage.setItem("user", JSON.stringify(userWithTimestamp));
      state.currentUser = userWithTimestamp;
    },
    logout(state) {
      localStorage.removeItem("user");
      state.currentUser = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    initializeState(state) {
      const userString = localStorage.getItem("user");
      if (userString) {
        const userWithTimestamp = JSON.parse(userString);
        const currentTime = new Date().getTime();
        if (currentTime - userWithTimestamp.loginTime < 7200000) {
          state.currentUser = userWithTimestamp;
        } else {
          localStorage.removeItem("user");
          state.currentUser = null;
        }
      }
      state.isLoading = false;
    },
  },
});

export const { login, logout, setLoading, initializeState } =
  usersSlice.actions;

export default usersSlice;
