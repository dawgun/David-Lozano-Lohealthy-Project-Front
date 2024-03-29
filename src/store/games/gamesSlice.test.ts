import {
  createGameActionCreator,
  deleteGameActionCreator,
  gameReducer,
  loadGamesActionCreator,
  loadMyGamesActionCreator,
  nextPageActionCreator,
  previousPageActionCreator,
  updateGameActionCreator,
} from "./gamesSlice";
import { GameAPI } from "./model/game";

describe("Given the gamesSlice", () => {
  const previousGameState: GameAPI = {
    isNextPage: true,
    isPreviousPage: true,
    totalPages: 1,
    currentPage: 0,
    games: [
      {
        title: "The Legend of Zelda",
        image: "",
        backupImage: "",
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
        backupImage: "",
        genre: "Adventure",
        id: "2",
        players: "Two players",
        release: "2021-09-04T17:14:58.542Z",
        synopsis: "Great game with moustach",
        owner: "1",
      },
    ],
  };

  describe("When call loadGames reducer with previousGamesState and a list of games", () => {
    test("Then should return a newGamesState same as list of games given", () => {
      const newListGames: GameAPI = {
        isNextPage: true,
        isPreviousPage: true,
        totalPages: 1,
        currentPage: 0,
        games: [
          {
            title: "The Legend of Zelda",
            image: "",
            backupImage: "",
            genre: "Action-RPG",
            id: "",
            players: "One player",
            release: "2022-09-04T17:14:58.542Z",
            synopsis: "Great game",
            owner: "3",
          },
        ],
      };

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
      const expectedNewGameList = {
        isNextPage: true,
        isPreviousPage: true,
        totalPages: 1,
        currentPage: 0,
        games: [
          {
            title: "The Legend of Zelda",
            image: "",
            backupImage: "",
            genre: "Action-RPG",
            id: "1",
            players: "One player",
            release: "2022-09-04T17:14:58.542Z",
            synopsis: "Great game",
            owner: "1",
          },
        ],
      };

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
        backupImage: "backup-fortnite.jpg",
        genre: "Shooter",
        id: "3",
        players: "MMO",
        release: "2019-09-04T17:14:58.542Z",
        synopsis: "Great shooter multiplayer",
        owner: "1",
      };
      const expectedNewGameList = {
        ...previousGameState,
        games: [...previousGameState.games, newGame],
      };

      const newGameList = gameReducer(
        previousGameState,
        createGameActionCreator(newGame)
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });

  describe("When call updateGame reducer with previousGameState and a game", () => {
    test("Then should return a new list of games with game same id updated", () => {
      const updatedGame = {
        title: "Fortnite",
        image: "fortnite.jpg",
        backupImage: "backup-fortnite.jpg",
        genre: "Shooter",
        id: "2",
        players: "MMO",
        release: "2019-09-04T17:14:58.542Z",
        synopsis: "Great shooter multiplayer",
        owner: "1",
      };
      const expectedNewGameList = {
        ...previousGameState,
        games: [previousGameState.games[0], updatedGame],
      };

      const newGameList = gameReducer(
        previousGameState,
        updateGameActionCreator(updatedGame)
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });

  describe("When call loadMyGames reducer with previousGameState and a list of games", () => {
    test("Then should return a new list of games", () => {
      const newGame = [
        {
          title: "Fortnite",
          image: "fortnite.jpg",
          backupImage: "backup-fortnite.jpg",
          genre: "Shooter",
          id: "3",
          players: "MMO",
          release: "2019-09-04T17:14:58.542Z",
          synopsis: "Great shooter multiplayer",
          owner: "1",
        },
      ];
      const expectedNewGameList = {
        ...previousGameState,
        games: newGame,
      };

      const newGameList = gameReducer(
        previousGameState,
        loadMyGamesActionCreator(newGame)
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });

  describe("When call nextPage reducer with previousGameState", () => {
    test("Then should return a new list of games with currentPage incremented 1", () => {
      const nextPage = 1;

      const expectedNewGameList = {
        ...previousGameState,
        currentPage: previousGameState.currentPage + nextPage,
      };

      const newGameList = gameReducer(
        previousGameState,
        nextPageActionCreator()
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });

  describe("When call previousPage reducer with previousGameState", () => {
    test("Then should return a new list of games with currentPage decremented 1", () => {
      const expectedNewGameList = {
        ...previousGameState,
        currentPage: previousGameState.currentPage - 1,
      };

      const newGameList = gameReducer(
        previousGameState,
        previousPageActionCreator()
      );

      expect(newGameList).toStrictEqual(expectedNewGameList);
    });
  });
});
