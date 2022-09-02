import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { UIReducer } from "./UI/UISlice";
import { userReducer } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    ui: UIReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
