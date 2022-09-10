import {
  createGameActionCreator,
  deleteGameActionCreator,
  gameReducer,
  loadGamesActionCreator,
} from "./gamesSlice";
import { Game } from "./model/game";

describe("Given the gamesSlice", () => {
  const previousGameState: Game[] = [
    {
      title: "The Legend of Zelda",
      image: "",
      genre: "Action-RPG",
      id: "1",
      players: "One player",
      release: "2022-09-04T17:14:58.542Z",
      synopsis: "Great game",
      owner: "1",
    },
    {
      title: "Super Mario",
      image: "",
      genre: "Adventure",
      id: "2",
      players: "Two players",
      release: "2021-09-04T17:14:58.542Z",
      synopsis: "Great game with moustach",
      owner: "1",
    },
  ];

  describe("When call loadGames reducer with previousGamesState and a list of games", () => {
    test("Then should return a newGamesState same as list of games given", () => {
      const newListGames: Game[] = [
        {
          title: "The Legend of Zelda",
          image: "",
          genre: "Action-RPG",
          id: "",
          players: "One player",
          release: "2022-09-04T17:14:58.542Z",
          synopsis: "Great game",
          owner: "3",
        },
      ];

      const newGameState = gameReducer(
        previousGameState,
        loadGamesActionCreator(newListGames)
      );

      expect(newGameState).toStrictEqual(newListGames);
    });
  });

  describe("When call deleteGame reducer with previosGameState and id number", () => {
    test("Then should return same list of games without game with same id", () => {
      const idToDelete = "2";
      const expectedNewGameList = [
        {
          title: "The Legend of Zelda",
          image: "",
          genre: "Action-RPG",
          id: "1",
          players: "One player",
          release: "2022-09-04T17:14:58.542Z",
          synopsis: "Great game",
          owner: "1",
        },
      ];

      const newGameList = gameReducer(
        previousGameState,
        deleteGameActionCreator(idToDelete)
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });

  describe("When call createGame reducer with previousGameState and a game", () => {
    test("Then should return a new list of games same as previous list with new game", () => {
      const newGame = {
        title: "Fortnite",
        image: "fortnite.jpg",
        genre: "Shooter",
        id: "3",
        players: "MMO",
        release: "2019-09-04T17:14:58.542Z",
        synopsis: "Great shooter multiplayer",
        owner: "1",
      };
      const expectedNewGameList = [...previousGameState, newGame];

      const newGameList = gameReducer(
        previousGameState,
        createGameActionCreator(newGame)
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });
});
