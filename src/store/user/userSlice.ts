import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserLoginState } from "./model/user";

const userInitialState: UserLoginState = {
  isLogged: false,
  user: {
    userName: "",
    image: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (_previousUI: UserLoginState, action: PayloadAction<User>) => ({
      isLogged: true,
      user: { ...action.payload },
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
