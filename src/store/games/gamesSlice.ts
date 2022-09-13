import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GameAPI } from "./model/game";

const gameInitialState: GameAPI = {
  isPreviousPage: true,
  isNextPage: true,
  games: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState: gameInitialState,
  reducers: {
    loadGames: (_previousGame: GameAPI, action: PayloadAction<GameAPI>) => ({
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
  },
});

export const gameReducer = gamesSlice.reducer;

export const {
  loadGames: loadGamesActionCreator,
  deleteGame: deleteGameActionCreator,
  createGame: createGameActionCreator,
  loadMyGames: loadMyGamesActionCreator,
} = gamesSlice.actions;
