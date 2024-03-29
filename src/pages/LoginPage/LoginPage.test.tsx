import { screen } from "@testing-library/react";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import LoginPage from "./LoginPage";

describe("Given the LoginPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Login' in heading", () => {
      const headingText = "Login";

      customRender(<LoginPage />);

      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });

    test("Then should show '¿No tienes cuenta?'", () => {
      const text = "¿No tienes cuenta?";

      customRender(<LoginPage />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then should show 'Registrate' in a navlink", () => {
      const text = "Registrate";

      customRender(<LoginPage />);

      const expectedText = screen.getByRole("link", { name: text });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
