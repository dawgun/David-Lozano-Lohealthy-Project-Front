import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a gif with alternative text 'Zelda dancing'", () => {
      const gifAlternativeText = "Zelda dancing";
      render(<Loading />);

      const image = screen.getByTitle(gifAlternativeText);

      expect(image).toBeInTheDocument();
    });

    test("Then it should show text 'Cargando...'", () => {
      const textLoading = "Cargando...";
      render(<Loading />);

      const text = screen.getByText(textLoading);

      expect(text).toBeInTheDocument();
    });
  });
});
