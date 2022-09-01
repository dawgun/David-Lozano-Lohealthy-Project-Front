import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UIState from "./model/UI";

const UIInitialState: UIState = {
  isModalShowing: false,
  message: "",
  type: true,
};

const UISlice = createSlice({
  name: "ui",
  initialState: UIInitialState,
  reducers: {
    openModal: (_previousUI: UIState, action: PayloadAction<UIState>) => ({
      ...action.payload,
    }),
    closeModal: (previousUI: UIState) => ({
      ...previousUI,
      isModalShowing: false,
    }),
  },
});

export const UIReducer = UISlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = UISlice.actions;
