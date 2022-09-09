import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Game from "./model/game";

const gameInitialState: Game[] = [];

const gamesSlice = createSlice({
  name: "games",
  initialState: gameInitialState,
  reducers: {
    loadGames: (_previousGame: Game[], action: PayloadAction<Game[]>) => [
      ...action.payload,
    ],
    deleteGame: (previousGame: Game[], action: PayloadAction<string>) =>
      previousGame.filter((game) => game.id !== action.payload),
    createGame: (previousgame: Game[], action: PayloadAction<Game>) => [
      ...previousgame,
      action.payload,
    ],
  },
});

export const gameReducer = gamesSlice.reducer;

export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
} = gamesSlice.actions;
