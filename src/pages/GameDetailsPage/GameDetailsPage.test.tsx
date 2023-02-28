import mockUseGames from "../../testUtils/mocks/mockUseGames/mockUseGames";
import { render, screen } from "@testing-library/react";
import GameDetailsPage from "./GameDetailsPage";
import customRender from "../../testUtils/wrappers/customRender/customRender";

describe("Given the GameDetailsPage page", () => {
  describe("When it's instantiated", () => {
    test("Then getGameById has to been called with 'juegazo1234'", () => {
      const paramPath = "juegazo1234";
      customRender(<GameDetailsPage />, {
        initialEntries: [`/details/${paramPath}`],
        path: "details/:idGame",
      });

      expect(mockUseGames.getGameById).toHaveBeenCalledWith(paramPath);
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
