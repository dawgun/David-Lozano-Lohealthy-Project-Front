import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./RegisterPage";

describe("Given the RegisterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Registro' in heading", () => {
      const headingText = "Registro";

      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
