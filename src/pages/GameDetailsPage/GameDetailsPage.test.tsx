import { render, screen } from "@testing-library/react";
import GameDetailsPage from "./GameDetailsPage";

const gameDetail = {
  title: "",
  image: "",
  backupImage: "",
  players: "",
  genre: "",
  release: "",
  synopsis: "",
  owner: { userName: "", id: "" },
  id: "",
};

const mockgetGameById = jest.fn().mockResolvedValue(gameDetail);

jest.mock("../../hooks/useGames/useGames", () => () => ({
  getGameById: mockgetGameById,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ idGame: "juegazo1234" }),
}));

describe("Given the GameDetailsPage page", () => {
  describe("When it's instantiated", () => {
    test("Then getGameById has to been called with 'juegazo1234'", () => {
      const paramPath = "juegazo1234";
      render(<GameDetailsPage />);

      expect(mockgetGameById).toHaveBeenCalledWith(paramPath);
    });

    test("Then should show 'Detalles del juego' in a heading", () => {
      const titleText = "Detalles del juego";

      render(<GameDetailsPage />);
      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then should show 'Autor' in a heading", () => {
      const titleAuth = "Autor";

      render(<GameDetailsPage />);
      const title = screen.getByRole("heading", { name: titleAuth });

      expect(title).toBeInTheDocument();
    });
  });
});
