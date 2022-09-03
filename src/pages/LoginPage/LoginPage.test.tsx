import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import LoginPage from "./LoginPage";

describe("Given the LoginPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Login' in heading", () => {
      const headingText = "Login";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });

    test("Then should show '¿No tienes cuenta?'", () => {
      const text = "¿No tienes cuenta?";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );
      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then should show 'Registrate' in a navlink", () => {
      const text = "Registrate";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );
      const expectedText = screen.getByRole("link", { name: text });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
