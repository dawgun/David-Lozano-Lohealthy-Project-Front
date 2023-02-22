import { screen } from "@testing-library/react";
import App from "./App";
import { loginUserActionCreator } from "../../store/user/userSlice";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import {
  initialUiState,
  initialUserState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";

const mockDispatch = jest.fn();
const mockUser = { userName: "Pedro", image: "", token: "token", id: "1" };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../utils/auth/auth", () => () => mockUser);

describe("Given App component", () => {
  const store = mockStore({
    uiPreloadState: {
      ...initialUiState,
      isModalShowing: true,
      isLoadingShowing: true,
      isMenuShowing: true,
    },
    userPreloadState: { ...initialUserState, isLogged: true },
  });

  describe("When it's instantiated", () => {
    test("Then should show 'Cargando...' from Loading component", () => {
      const loadingText = "Cargando...";

      customRender(<App />, { store });

      const text = screen.getByText(loadingText);

      expect(text).toBeInTheDocument();
    });

    test("Then should show a button with 'X' from Modal component", () => {
      const textButton = "✕";

      customRender(<App />, { store });

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });

    test("Then should show 'Lohealthygames' in a heading from Header component", () => {
      const titleText = "Lohealthy Games";

      customRender(<App />, { store });

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then should show 'Mis Juegos' in a link from Navigation component", () => {
      const navLinkText = "Mis Juegos";

      customRender(<App />, { store });

      const navLink = screen.getByRole("link", { name: navLinkText });

      expect(navLink).toBeInTheDocument();
    });

    test("Then should show 'Home' in a heading from HomePage", () => {
      const titleHome = "Home";

      customRender(<App />, { store });

      const title = screen.getByRole("heading", { name: titleHome });

      expect(title).toBeInTheDocument();
    });

    test("Then should show a property text Footer component", () => {
      const propertyText = "Lohealthy Games es propiedad de David Lozano.";

      customRender(<App />, { store });

      const text = screen.getByText(propertyText);

      expect(text).toBeInTheDocument();
    });

    describe("And navigator have a token", () => {
      test("Then dispatch has to been called with loginUser action", () => {
        const loginUserAction = loginUserActionCreator(mockUser);

        const mockToken = "mockToken";
        window.localStorage.setItem("token", mockToken);

        customRender(<App />, { store });

        expect(mockDispatch).toHaveBeenCalledWith(loginUserAction);
      });
    });

    describe("And path on navigator is '/error'", () => {
      test("Then should show 'Mazmorra no encontrada' in a heading from NotFoundPage", () => {
        const webPath = "/error";
        const titleHeading = "Mazmorra no encontrada";

        customRender(<App />, { initialEntries: [webPath] });

        const title = screen.getByRole("heading", { name: titleHeading });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/mis-juegos'", () => {
      test("Then should show 'Mis Juegos' in a heading from MyGameListPage", () => {
        const webPath = "/mis-juegos";
        const titleText = "Mis Juegos";

        customRender(<App />, { initialEntries: [webPath], store });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/mis-juegos/create'", () => {
      test("Then should show 'Crear Juego' in a heading from CreateGamePage", () => {
        const webPath = "/mis-juegos/create";
        const titleText = "Crear Juego";

        customRender(<App />, { initialEntries: [webPath], store });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/details/juego'", () => {
      test("Then should show 'Detalles del juego' in a heading MyGameListPage", () => {
        const webPath = "/details/juego";
        const titleText = "Detalles del juego";

        customRender(<App />, { initialEntries: [webPath] });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And user is not logged and path on navigator is '/login'", () => {
      test("Then should show 'Detalles del juego' in a heading MyGameListPage", () => {
        const webPath = "/login";
        const titleText = "Login";

        customRender(<App />, { initialEntries: [webPath] });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And user is not logged and path on navigator is '/register'", () => {
      test("Then should show 'Detalles del juego' in a heading MyGameListPage", () => {
        const webPath = "/register";
        const titleText = "Registro";

        customRender(<App />, { initialEntries: [webPath] });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });
  });
});
