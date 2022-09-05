import { render, screen } from "@testing-library/react";
import Game from "../../store/games/model/game";
import GameCardList from "./GameCardList";

let mockSelectorReturn: Game[] = [
  {
    title: "The Legend of Zelda",
    image: "zelda.jpg",
    players: "",
    genre: "",
    release: "",
    synopsis:
      "El primer juego de zelda donde aparece la princesa secuestrada y todos lo quieren matar.",
    id: "1",
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
  },
];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelectorReturn,
}));

describe("Given the GameCardList component", () => {
  describe("When it's instantiated", () => {
    test("Then should show two game cards with titles of Zelda and Secret of mana", () => {
      const cardListLength = 2;

      render(<GameCardList />);
      const listOfTitles = screen.getAllByRole("heading");

      expect(listOfTitles).toHaveLength(cardListLength);
    });

    test("Then should show titles 'The Legend of Zelda' and 'Terranigma'", () => {
      const firstTitle = "The Legend of Zelda";
      const secondTitle = "Terranigma";

      render(<GameCardList />);
      const zeldaTitle = screen.getByRole("heading", { name: firstTitle });
      const terranigmaTitle = screen.getByRole("heading", {
        name: secondTitle,
      });

      expect(zeldaTitle).toBeInTheDocument();
      expect(terranigmaTitle).toBeInTheDocument();
    });
  });
});
