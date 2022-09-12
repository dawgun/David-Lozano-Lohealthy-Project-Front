import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import MyGameListPage from "./MyGameListPage";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();
const mockGetGamesByUser = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../hooks/useGames/useGames", () => () => ({
  getGamesByUser: mockGetGamesByUser,
}));

describe("Given MyGameListPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Mis Juegos' in a heading", () => {
      const titleHeading = "Mis Juegos";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <MyGameListPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByRole("heading", { name: titleHeading });

      expect(title).toBeInTheDocument();
    });

    test("Then should getGamesByUser be called", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <MyGameListPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockGetGamesByUser).toHaveBeenCalled();
    });

    test("Then should show 'Crear Juego' in a button", () => {
      const textButton = "Crear Juego";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <MyGameListPage />
          </BrowserRouter>
        </Provider>
      );
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });

    describe("And user clicks on button 'Crear Juego'", () => {
      test("Then navigate should be called", async () => {
        const textButton = "Crear Juego";
        const pathNavigate = "/mis-juegos/create";

        render(
          <Provider store={store}>
            <BrowserRouter>
              <MyGameListPage />
            </BrowserRouter>
          </Provider>
        );
        const button = screen.getByRole("button", { name: textButton });
        await userEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith(pathNavigate);
      });
    });
  });
});
