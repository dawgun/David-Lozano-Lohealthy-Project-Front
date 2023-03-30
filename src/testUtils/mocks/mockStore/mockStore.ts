import { configureStore, Store } from "@reduxjs/toolkit";
import { gameReducer } from "../../../store/games/gamesSlice";
import { UIReducer } from "../../../store/UI/UISlice";
import { userReducer } from "../../../store/user/userSlice";
import { GameAPI, PaginationAPI } from "../../../store/games/model/game";
import { UIState } from "../../../store/UI/model/UI";
import { UserLoginState } from "../../../store/user/model/user";
import MockStoreProps from "./types/types";

export const initialUiState: UIState = {
  isLoadingShowing: false,
  isModalShowing: false,
  isMenuShowing: false,
  message: "",
  type: true,
};

export const initialUserState: UserLoginState = {
  isLogged: false,
  user: {
    userName: "",
    image: "",
    token: "",
    id: "",
  },
};

export const initialPagination: PaginationAPI = {
  isPreviousPage: true,
  isNextPage: true,
  totalPages: 1,
  currentPage: 1,
};

export const initialGameState: GameAPI = {
  ...initialPagination,
  games: [],
};

export const mockStore = ({
  gamesPreloadState = initialGameState,
  uiPreloadState = initialUiState,
  userPreloadState = initialUserState,
}: MockStoreProps): Store =>
  configureStore({
    reducer: {
      ui: UIReducer,
      user: userReducer,
      games: gameReducer,
    },

    preloadedState: {
      ui: uiPreloadState,
      user: userPreloadState,
      games: gamesPreloadState,
    },
  });
