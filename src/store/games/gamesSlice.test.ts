import {
  deleteGameActionCreator,
  gameReducer,
  loadGamesActionCreator,
} from "./gamesSlice";
import Game from "./model/game";

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
    },
    {
      title: "Super Mario",
      image: "",
      genre: "Adventure",
      id: "2",
      players: "Two players",
      release: "2021-09-04T17:14:58.542Z",
      synopsis: "Great game with moustach",
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
        },
      ];

      const newGameList = gameReducer(
        previousGameState,
        deleteGameActionCreator(idToDelete)
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });
});
