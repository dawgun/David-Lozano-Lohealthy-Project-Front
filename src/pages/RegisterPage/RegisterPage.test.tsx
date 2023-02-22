import { screen } from "@testing-library/react";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import RegisterPage from "./RegisterPage";

describe("Given the RegisterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Registro' in heading", () => {
      const headingText = "Registro";

      customRender(<RegisterPage />);

      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
