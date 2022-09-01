import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show Lohealthy Games in heading", () => {
      render(<Header />);
      const title = screen.getByRole("heading", { name: "Lohealthy Games" });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a button", () => {
      render(<Header />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
