import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../store/store";
import CreateGamePage from "./CreateGamePage";

describe("Given the CreateGamePage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Crear Juego' in a heading", () => {
      const titleHeading = "Crear Juego";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateGamePage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByRole("heading", { name: titleHeading });

      expect(title).toBeInTheDocument();
    });

    test("Then should show a form with 'Título' in a placeholder input", () => {
      const titleInputPlaceholder = "Título";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateGamePage />
          </BrowserRouter>
        </Provider>
      );
      const inputForm = screen.getByPlaceholderText(titleInputPlaceholder);

      expect(inputForm).toBeInTheDocument();
    });

    test("Then should show 'Volver' in a nav-link", () => {
      const textLink = "Volver";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateGamePage />
          </BrowserRouter>
        </Provider>
      );
      const linkPage = screen.getByRole("link", { name: textLink });

      expect(linkPage).toBeInTheDocument();
    });
  });
});
