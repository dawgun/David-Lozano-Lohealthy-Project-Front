import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage page", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a 'Link' image with alternative text 'Character link of Legend of Zelda dead'", () => {
      const alternativeTextImage = "Character link of Legend of Zelda dead";

      render(<NotFoundPage />);
      const image = screen.getByRole("img", { name: alternativeTextImage });

      expect(image).toBeInTheDocument();
    });

    test("Then it should show a heading with 'Mazmorra no encontrada'", () => {
      const titleText = "Mazmorra no encontrada";
      render(<NotFoundPage />);
      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show text explaining the error page not found", () => {
      const text =
        "La web a la que estas intentando entrar no existe, vuelve por donde has venido o busca en otro castillo.";

      render(<NotFoundPage />);
      const textParagraph = screen.getByText(text);

      expect(textParagraph).toBeInTheDocument();
    });
  });
});
