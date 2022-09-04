import { gameReducer, loadGamesActionCreator } from "./gamesSlice";
import Game from "./model/game";

describe("Given the gamesSlice", () => {
  describe("When call loadGames reducer with previousGamesState and a list of games", () => {
    test("Then should return a newGamesState same as list of games given", () => {
      const previousGameState: Game[] = [];
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
});
