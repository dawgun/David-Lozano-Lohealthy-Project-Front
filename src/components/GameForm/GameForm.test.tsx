import mockUseGames from "../../testUtils/mocks/mockUseGames/mockUseGames";
import { render, screen } from "@testing-library/react";
import GameForm from "./GameForm";
import userEvent from "@testing-library/user-event";

describe("Given the GameForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a form with two inputs", () => {
      const expectedLength = 2;

      render(<GameForm />);
      const inputsText = screen.getAllByRole("textbox");

      expect(inputsText).toHaveLength(expectedLength);
    });

    test("Then it should show a form with date input", () => {
      const datePlaceholder = "Fecha";

      render(<GameForm />);
      const inputsDate = screen.getByPlaceholderText(datePlaceholder);

      expect(inputsDate).toBeInTheDocument();
    });

    test("Then it should show a form with a text area input", () => {
      const placeholderSynopsis = "Descripción del juego";

      render(<GameForm />);
      const textArea = screen.getByPlaceholderText(placeholderSynopsis);

      expect(textArea).toBeInTheDocument();
    });

    test("Then it should show a form with two selects", () => {
      const expectedLength = 2;

      render(<GameForm />);
      const inputOptions = screen.getAllByRole("combobox");

      expect(inputOptions).toHaveLength(expectedLength);
    });

    test("Then it should show a form with 20 options input", () => {
      const expectedLength = 20;

      render(<GameForm />);
      const inputOptions = screen.getAllByRole("option");

      expect(inputOptions).toHaveLength(expectedLength);
    });

    test("And it should show a form with a button with text 'Crear'", () => {
      const textButton = "Crear";

      render(<GameForm />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });

    describe("And users don't type nothing", () => {
      test("Then gameCreate don't be called", async () => {
        const textButton = "Crear";

        render(<GameForm />);
        const button = screen.getByRole("button", { name: textButton });
        await userEvent.click(button);

        expect(mockUseGames.createGame).not.toHaveBeenCalled();
      });
    });

    describe("And users type in all inputs", () => {
      test("Then gameCreate be called", async () => {
        const titleText = "Sonic";
        const genreText = "Estrategia";
        const playersText = "2 jugadores";
        const dateText = "2022-09-09";
        const synopsisText =
          "Erase una vez un juego que molaba mucho y todos querian jugar porque era el mejor";
        const fakeImage = new File(["hello"], "hello.png", {
          type: "image/png",
        });
        const textButton = "Crear";

        render(<GameForm />);

        const title = screen.getByPlaceholderText("Título");
        const genre = screen.getByPlaceholderText("Género");
        const players = screen.getByPlaceholderText("Jugadores");
        const date = screen.getByPlaceholderText("Fecha");
        const synopsis = screen.getByPlaceholderText("Descripción del juego");
        const fileImage = screen.getByPlaceholderText("Imagen");
        const button = screen.getByRole("button", { name: textButton });

        await userEvent.type(title, titleText);
        await userEvent.selectOptions(genre, genreText);
        await userEvent.selectOptions(players, playersText);
        await userEvent.type(date, dateText);
        await userEvent.type(synopsis, synopsisText);
        await userEvent.upload(fileImage, fakeImage);
        await userEvent.click(button);

        expect(title).toBeInTheDocument();
        expect(genre).toBeInTheDocument();
        expect(players).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(synopsis).toBeInTheDocument();
        expect(fileImage).toBeInTheDocument();

        expect(mockUseGames.createGame).toHaveBeenCalled();
      });
    });
  });
});
