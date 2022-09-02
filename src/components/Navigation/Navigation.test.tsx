import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a house icon inside nav bar with alternative text 'Home icon'", () => {
      const alternativeTextHome = "Home icon";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navHome = screen.getByRole("link", { name: alternativeTextHome });

      expect(navHome).toBeInTheDocument();
    });

    test("Then it should show 'Juegos' inside nav bar", () => {
      const text = "Juegos";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navHome = screen.getByRole("link", {
        name: text,
      });

      expect(navHome).toBeInTheDocument();
    });
    test("Then it should show 'Mis Juegos' inside nav bar", () => {
      const text = "Mis Juegos";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const navHome = screen.getByRole("link", {
        name: text,
      });

      expect(navHome).toBeInTheDocument();
    });
  });
});
