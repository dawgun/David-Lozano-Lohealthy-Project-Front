import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import HomePage from "./HomePage";

let mockSelectorReturn = {
  user: { id: "1" },
  games: [
    {
      title: "Super Mario",
      image: "mario.jpg",
      players: "",
      genre: "",
      release: "",
      synopsis:
        "Un divertido fontanero con bigote y traje rojo, se aventura a salvar a la princesa del reino Champiñon",
      id: "1",
      owner: "2",
    },
  ],
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockSelectorReturn,
}));

describe("Given the HomePage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Home' in a heading", () => {
      const homeHeading = "Home";
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      const homeTitle = screen.getByRole("heading", {
        name: homeHeading,
      });

      expect(homeTitle).toBeInTheDocument();
    });

    test("Then should show 'Super Mario' in a heading", () => {
      const gameHeading = "Super Mario";
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
      const homeTitle = screen.getByRole("heading", {
        name: gameHeading,
      });

      expect(homeTitle).toBeInTheDocument();
    });
  });
});
