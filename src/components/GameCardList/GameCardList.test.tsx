import { screen } from "@testing-library/react";
import { Game } from "../../store/games/model/game";
import {
  initialGameState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import GameCardList from "./GameCardList";

describe("Given the GameCardList component", () => {
  let gameList: Game[] = [
    {
      title: "The Legend of Zelda",
      image: "zelda.jpg",
      players: "",
      genre: "",
      release: "",
      synopsis:
        "El primer juego de zelda donde aparece la princesa secuestrada y todos lo quieren matar.",
      id: "1",
      owner: "24",
      backupImage: "",
    },
    {
      title: "Terranigma",
      image: "terranigma.jpg",
      players: "",
      genre: "",
      release: "",
      synopsis:
        "Un juego donde la fortaleza de mana vuelve a las andadas para detruir el mundo y el arbol sagrado",
      id: "2",
      owner: "24",
      backupImage: "",
    },
  ];
  const customStore = mockStore({
    gamesPreloadState: { ...initialGameState, games: gameList },
  });

  describe("When it's instantiated", () => {
    test("Then should show two game cards with titles of Zelda and Secret of mana", () => {
      const cardListLength = 2;

      customRender(<GameCardList />, { store: customStore });

      const listOfTitles = screen.getAllByRole("heading");

      expect(listOfTitles).toHaveLength(cardListLength);
    });

    test("Then should show titles 'The Legend of Zelda' and 'Terranigma'", () => {
      const firstTitle = "The Legend of Zelda";
      const secondTitle = "Terranigma";

      customRender(<GameCardList />, { store: customStore });

      const zeldaTitle = screen.getByRole("heading", { name: firstTitle });
      const terranigmaTitle = screen.getByRole("heading", {
        name: secondTitle,
      });

      expect(zeldaTitle).toBeInTheDocument();
      expect(terranigmaTitle).toBeInTheDocument();
    });
  });
});
