import { render, screen } from "@testing-library/react";
import GameCard from "./GameCard";

describe("Given the GameCard component", () => {
  const game = {
    title: "The Legend of Zelda",
    image: "zelda.jpg",
    players: "",
    genre: "",
    release: "",
    synopsis:
      "El primer juego de zelda donde aparece la princesa secuestrada y todos lo quieren matar.",
    id: "",
  };

  describe("When it's instantiated", () => {
    test("Then should show an image with alternative text of game", () => {
      const alternativeText = game.title + " game";

      render(<GameCard game={game} />);
      const gameImage = screen.getByRole("img", { name: alternativeText });

      expect(gameImage).toBeInTheDocument();
    });

    test("Then should show the title 'The Legend of Zelda' in a heading", () => {
      const title = "The Legend of Zelda";

      render(<GameCard game={game} />);
      const gameTitle = screen.getByRole("heading", { name: title });

      expect(gameTitle).toBeInTheDocument();
    });

    test("Then should show the synopsys cutted", () => {
      const title = `${game.synopsis.slice(0, 100)}...`;

      render(<GameCard game={game} />);
      const gameSynopsis = screen.getByText(title);

      expect(gameSynopsis).toBeInTheDocument();
    });

    test("Then should show a button with text 'Info'", () => {
      const textButton = "Info";

      render(<GameCard game={game} />);
      const gameButton = screen.getByRole("button", { name: textButton });

      expect(gameButton).toBeInTheDocument();
    });
  });
});
