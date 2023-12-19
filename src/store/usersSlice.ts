import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models";

interface UsersState {
  currentUser: UserModel | null;
}

const initialState: UsersState = {
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserModel>) {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = usersSlice.actions;

export default usersSlice;
