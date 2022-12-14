import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UIState, Modal } from "./model/UI";

const UIInitialState: UIState = {
  isLoadingShowing: false,
  isModalShowing: false,
  isMenuShowing: false,
  message: "",
  type: true,
};

const UISlice = createSlice({
  name: "ui",
  initialState: UIInitialState,
  reducers: {
    openModal: (previousUI: UIState, action: PayloadAction<Modal>) => ({
      ...previousUI,
      isModalShowing: true,
      ...action.payload,
    }),

    closeModal: (previousUI: UIState) => ({
      ...previousUI,
      isModalShowing: false,
    }),

    showLoader: (previousUI: UIState) => ({
      ...previousUI,
      isLoadingShowing: true,
    }),

    closeLoader: (previousUI: UIState) => ({
      ...previousUI,
      isLoadingShowing: false,
    }),

    toggleMenu: (previousUI: UIState) => ({
      ...previousUI,
      isMenuShowing: !previousUI.isMenuShowing,
    }),

    closeMenu: (previousUI: UIState) => ({
      ...previousUI,
      isMenuShowing: false,
    }),
  },
});

export const UIReducer = UISlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  showLoader: showLoaderActionCreator,
  closeLoader: closeLoaderActionCreator,
  toggleMenu: toggleMenuActionCreator,
  closeMenu: closeMenuActionCreator,
} = UISlice.actions;
