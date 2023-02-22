import { screen } from "@testing-library/react";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import CreateGamePage from "./CreateGamePage";

describe("Given the CreateGamePage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Crear Juego' in a heading", () => {
      const titleHeading = "Crear Juego";

      customRender(<CreateGamePage />);

      const title = screen.getByRole("heading", { name: titleHeading });

      expect(title).toBeInTheDocument();
    });

    test("Then should show a form with 'Título' in a placeholder input", () => {
      const titleInputPlaceholder = "Título";

      customRender(<CreateGamePage />);

      const inputForm = screen.getByPlaceholderText(titleInputPlaceholder);

      expect(inputForm).toBeInTheDocument();
    });

    test("Then should show 'Volver' in a nav-link", () => {
      const textLink = "Volver";

      customRender(<CreateGamePage />);

      const linkPage = screen.getByRole("link", { name: textLink });

      expect(linkPage).toBeInTheDocument();
    });
  });
});
