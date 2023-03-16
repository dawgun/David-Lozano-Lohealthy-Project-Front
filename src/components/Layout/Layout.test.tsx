import "../../testUtils/mocks/mockFetchedTokenUser/mockFetchedTokenUser";
import "../../testUtils/mocks/mockUseGames/mockUseGames";
import "../../testUtils/mocks/mockReact/mockReact";
import { screen } from "@testing-library/react";
import Layout from "./Layout";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import {
  initialUiState,
  initialUserState,
  mockStore,
} from "../../testUtils/mocks/mockStore/mockStore";

describe("Given Layout component", () => {
  const store = mockStore({
    uiPreloadState: {
      ...initialUiState,
      isMenuShowing: true,
    },
    userPreloadState: { ...initialUserState, isLogged: true },
  });

  describe("When it's instantiated", () => {
    test("Then should show 'Lohealthygames' in a heading from Header component", () => {
      const titleText = "Lohealthy Games";

      customRender(<Layout />);

      const title = screen.getByRole("heading", { name: titleText });

      expect(title).toBeInTheDocument();
    });

    test("Then should show 'Mis Juegos' in a link from Navigation component", () => {
      const navLinkText = "Mis Juegos";

      customRender(<Layout />);

      const navLink = screen.getByRole("link", { name: navLinkText });

      expect(navLink).toBeInTheDocument();
    });

    test("Then should show 'Home' in a heading from HomePage", () => {
      const titleHome = "Home";

      customRender(<Layout />);

      const title = screen.getByRole("heading", { name: titleHome });

      expect(title).toBeInTheDocument();
    });

    test("Then should show a property text Footer component", () => {
      const propertyText = "Lohealthy Games es propiedad de David Lozano.";

      customRender(<Layout />);

      const text = screen.getByText(propertyText);

      expect(text).toBeInTheDocument();
    });

    describe("And path on navigator is '/error'", () => {
      test("Then should show 'Mazmorra no encontrada' in a heading from NotFoundPage", () => {
        const webPath = "/error";
        const titleHeading = "Mazmorra no encontrada";

        customRender(<Layout />, { initialEntries: [webPath] });

        const title = screen.getByRole("heading", { name: titleHeading });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/mis-juegos'", () => {
      test("Then should show 'Mis Juegos' in a heading from MyGameListPage", () => {
        const webPath = "/mis-juegos";
        const titleText = "Mis Juegos";

        customRender(<Layout />, { initialEntries: [webPath], store });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/mis-juegos/create'", () => {
      test("Then should show 'Crear Juego' in a heading from CreateGamePage", () => {
        const webPath = "/mis-juegos/create";
        const titleText = "Crear Juego";

        customRender(<Layout />, { initialEntries: [webPath], store });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/details/juego'", () => {
      test("Then should show 'Detalles del juego' in a heading MyGameListPage", () => {
        const webPath = "/details/juego";
        const titleText = "Detalles del juego";

        customRender(<Layout />, { initialEntries: [webPath] });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And user is not logged and path on navigator is '/login'", () => {
      test("Then should show 'Detalles del juego' in a heading MyGameListPage", () => {
        const webPath = "/login";
        const titleText = "Login";

        customRender(<Layout />, {
          initialEntries: [webPath],
        });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And user is not logged and path on navigator is '/register'", () => {
      test("Then should show 'Detalles del juego' in a heading MyGameListPage", () => {
        const webPath = "/register";
        const titleText = "Registro";

        customRender(<Layout />, {
          initialEntries: [webPath],
        });

        const title = screen.getByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });
  });
});
