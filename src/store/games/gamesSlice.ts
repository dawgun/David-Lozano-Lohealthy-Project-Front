import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Game from "./model/game";

const gameInitialState: Game[] = [];

const gamesSlice = createSlice({
  name: "games",
  initialState: gameInitialState,
  reducers: {
    loadGames: (_previousUI: Game[], action: PayloadAction<Game[]>) => [
      ...action.payload,
    ],
  },
});

export const gameReducer = gamesSlice.reducer;

export const { loadGames: loadGamesActionCreator } = gamesSlice.actions;
