import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, gameAPI } from "./model/game";

const gameInitialState: gameAPI = {
  isPreviousPage: true,
  isNextPage: true,
  games: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState: gameInitialState,
  reducers: {
    loadGames: (_previousGame: gameAPI, action: PayloadAction<gameAPI>) => ({
      ...action.payload,
    }),
    deleteGame: (previousGame: gameAPI, action: PayloadAction<string>) => ({
      ...previousGame,
      games: previousGame.games.filter((game) => game.id !== action.payload),
    }),
    createGame: (previousgame: gameAPI, action: PayloadAction<Game>) => ({
      ...previousgame,
      games: [...previousgame.games, action.payload],
    }),
    loadMyGames: (previousGame: gameAPI, action: PayloadAction<Game[]>) => ({
      ...previousGame,
      games: action.payload,
    }),
  },
});

export const gameReducer = gamesSlice.reducer;

export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  createGame: createGameActionCreator,
  loadMyGames: loadMyGamesActionCreator,
} = gamesSlice.actions;
