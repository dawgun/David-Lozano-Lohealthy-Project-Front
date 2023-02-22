import { screen } from "@testing-library/react";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import GameCardDetails from "./GameCardDetails";

describe("Given the GameCard component", () => {
  describe("When it's instantiated", () => {
    const game = {
      title: "The Legend of Zelda",
      image: "zelda.jpg",
      backupImage: "backup-zelda.jpg",
      players: "Un jugador",
      genre: "RPG",
      release: "2022-09-16T00:00:00.000Z",
      synopsis:
        "El primer juego de zelda donde aparece la princesa secuestrada y todos lo quieren matar.",
      id: "1",
      owner: {
        userName: "dawgun",
        id: "2",
      },
    };

    describe("And user not owner of game", () => {
      test("Then should show six headings in page", () => {
        const numberOfHeadings = 6;

        customRender(<GameCardDetails game={game} />);

        const listOfHeadings = screen.getAllByRole("heading");

        expect(listOfHeadings).toHaveLength(numberOfHeadings);
      });

      test("Then should show an image with alternative text of game", () => {
        const alternativeText = game.title + " game";

        customRender(<GameCardDetails game={game} />);

        const gameImage = screen.getByRole("img", { name: alternativeText });

        expect(gameImage).toBeInTheDocument();
      });

      test("Then should show the title 'The Legend of Zelda' in a heading", () => {
        const title = "The Legend of Zelda";

        customRender(<GameCardDetails game={game} />);

        const gameTitle = screen.getByRole("heading", { name: title });

        expect(gameTitle).toBeInTheDocument();
      });

      test("Then should show author of game 'dawgun'", () => {
        const authorName = "dawgun";

        customRender(<GameCardDetails game={game} />);

        const authorText = screen.getByText(authorName);

        expect(authorText).toBeInTheDocument();
      });

      test("Then should show genre of game 'RPG'", () => {
        const genreGame = "RPG";

        customRender(<GameCardDetails game={game} />);

        const genreText = screen.getByText(genreGame);

        expect(genreText).toBeInTheDocument();
      });

      test("Then should show release '2022-09-16'", () => {
        const releaseDate = "2022-09-16";

        customRender(<GameCardDetails game={game} />);

        const release = screen.getByText(releaseDate);

        expect(release).toBeInTheDocument();
      });

      test("Then should show players 'Un jugador'", () => {
        const numberOfPlayers = "Un jugador";

        customRender(<GameCardDetails game={game} />);

        const players = screen.getByText(numberOfPlayers);

        expect(players).toBeInTheDocument();
      });

      test("Then should show the synopsys", () => {
        const title = `${game.synopsis}`;

        customRender(<GameCardDetails game={game} />);

        const gameSynopsis = screen.getByText(title);

        expect(gameSynopsis).toBeInTheDocument();
      });
    });
  });
});
