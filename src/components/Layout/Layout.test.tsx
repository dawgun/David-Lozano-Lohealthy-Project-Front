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
import userEvent from "@testing-library/user-event";
import { Store } from "@reduxjs/toolkit";

let loginStore: Store;
let logoutStore: Store;

beforeEach(() => {
  loginStore = mockStore({
    uiPreloadState: {
      ...initialUiState,
      isMenuShowing: true,
    },
    userPreloadState: { ...initialUserState, isLogged: true },
  });

  logoutStore = mockStore({
    uiPreloadState: { ...initialUiState, isMenuShowing: true },
  });
});

describe("Given Layout component", () => {
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

    test("Then should show 'Home' in a heading from HomePage", async () => {
      const titleHome = "Home";

      customRender(<Layout />);

      const title = await screen.findByRole("heading", { name: titleHome });

      expect(title).toBeInTheDocument();
    });

    test("Then should show a property text Footer component", () => {
      const propertyText = "Lohealthy Games es propiedad de David Lozano.";

      customRender(<Layout />);

      const text = screen.getByText(propertyText);

      expect(text).toBeInTheDocument();
    });

    describe("And path on navigator is '/error'", () => {
      test("Then should show 'Mazmorra no encontrada' in a heading from NotFoundPage", async () => {
        const webPath = "/error";
        const titleHeading = "Mazmorra no encontrada";

        customRender(<Layout />, { initialEntries: [webPath] });

        const title = await screen.findByRole("heading", {
          name: titleHeading,
        });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/mis-juegos'", () => {
      test("Then should show 'Mis Juegos' in a heading from MyGameListPage", async () => {
        const webPath = "/mis-juegos";
        const titleText = "Mis Juegos";

        customRender(<Layout />, {
          initialEntries: [webPath],
          store: loginStore,
        });

        const title = await screen.findByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/mis-juegos/create'", () => {
      test("Then should show 'Crear Juego' in a heading from CreateGamePage", async () => {
        const webPath = "/mis-juegos/create";
        const titleText = "Crear Juego";

        customRender(<Layout />, {
          initialEntries: [webPath],
          store: loginStore,
        });

        const title = await screen.findByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/details/juego'", () => {
      test("Then should show 'Detalles del juego' in a heading GameDetailsPage", async () => {
        const webPath = "/details/juego";
        const titleText = "Detalles del juego";

        customRender(<Layout />, { initialEntries: [webPath] });

        const title = await screen.findByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/mis-juegos/update'", () => {
      test("Then should show 'Update' in a heading UpdateGamePage", async () => {
        const webPath = "/mis-juegos/update/juego";
        const titleText = "Update";

        customRender(<Layout />, {
          store: loginStore,
          initialEntries: [webPath],
        });

        const title = await screen.findByRole("heading", {
          name: titleText,
        });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And user is not logged and path on navigator is '/login'", () => {
      test("Then should show 'Login' in a heading LoginPage", async () => {
        const webPath = "/login";
        const titleText = "Login";

        customRender(<Layout />, {
          initialEntries: [webPath],
        });

        const title = await screen.findByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And user is not logged and path on navigator is '/register'", () => {
      test("Then should show 'Registro' in a heading RegisterPage", async () => {
        const webPath = "/register";
        const titleText = "Registro";

        customRender(<Layout />, {
          initialEntries: [webPath],
        });

        const title = await screen.findByRole("heading", { name: titleText });

        expect(title).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/home' and user click on 'Login'", () => {
      test("Then should show 'Login' in a heading", async () => {
        const webPaths = ["/home"];
        const titleHome = "Home";
        const loginText = "Login";

        const { rerender } = customRender(<Layout />, {
          initialEntries: webPaths,
          store: logoutStore,
        });

        const title = await screen.findByRole("heading", {
          name: titleHome,
        });

        expect(title).toBeInTheDocument();

        const loginLink = screen.getByRole("link", { name: loginText });

        await userEvent.click(loginLink);

        rerender(<Layout />);

        const myGamesTitle = await screen.findByRole("heading", {
          name: loginText,
        });

        expect(myGamesTitle).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/home' and user click on 'Registrar'", () => {
      test("Then should show 'Registro' in a heading", async () => {
        const webPaths = ["/home"];
        const titleHome = "Home";
        const linkRegister = "Registrar";
        const titleRegister = "Registro";

        const { rerender } = customRender(<Layout />, {
          initialEntries: webPaths,
          store: logoutStore,
        });

        const title = await screen.findByRole("heading", {
          name: titleHome,
        });

        expect(title).toBeInTheDocument();

        const registerLink = screen.getByRole("link", {
          name: linkRegister,
        });

        await userEvent.click(registerLink);

        rerender(<Layout />);

        const registerTitle = await screen.findByRole("heading", {
          name: titleRegister,
        });

        expect(registerTitle).toBeInTheDocument();
      });
    });

    describe("And path on navigator is '/home' and user click on 'Mis juegos'", () => {
      test("Then should show 'Mis Juegos' in a heading", async () => {
        const webPaths = ["/home"];
        const titleHome = "Home";
        const linkText = "Mis Juegos";

        const { rerender } = customRender(<Layout />, {
          initialEntries: webPaths,
          store: loginStore,
        });

        const title = await screen.findByRole("heading", { name: titleHome });

        expect(title).toBeInTheDocument();

        const myGamesLink = screen.getByRole("link", { name: linkText });

        await userEvent.click(myGamesLink);

        rerender(<Layout />);

        const myGamesTitle = await screen.findByRole("heading", {
          name: "Mis Juegos",
        });

        expect(myGamesTitle).toBeInTheDocument();
      });
    });
  });
});
