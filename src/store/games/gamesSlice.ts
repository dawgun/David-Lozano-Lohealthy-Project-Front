import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GameAPI } from "./model/game";

const gameInitialState: GameAPI = {
  isPreviousPage: true,
  isNextPage: true,
  totalPages: 1,
  currentPage: 0,
  games: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState: gameInitialState,
  reducers: {
    loadGames: (previousGame: GameAPI, action: PayloadAction<GameAPI>) => ({
      ...previousGame,
      ...action.payload,
    }),
    deleteGame: (previousGame: GameAPI, action: PayloadAction<string>) => ({
      ...previousGame,
      games: previousGame.games.filter((game) => game.id !== action.payload),
    }),
    createGame: (previousgame: GameAPI, action: PayloadAction<Game>) => ({
      ...previousgame,
      games: [...previousgame.games, action.payload],
    }),
    loadMyGames: (previousGame: GameAPI, action: PayloadAction<Game[]>) => ({
      ...previousGame,
      games: action.payload,
    }),
    nextPage: (previousGame: GameAPI) => ({
      ...previousGame,
      currentPage: previousGame.currentPage + 1,
    }),
    previousPage: (previousGame: GameAPI) => ({
      ...previousGame,
      currentPage: previousGame.currentPage - 1,
    }),
  },
});

export const gameReducer = gamesSlice.reducer;

export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  createGame: createGameActionCreator,
  loadMyGames: loadMyGamesActionCreator,
  nextPage: nextPageActionCreator,
  previousPage: previousPageActionCreator,
} = gamesSlice.actions;
