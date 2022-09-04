import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show Lohealthy Games in heading", () => {
      render(<Header actionOnClick={() => {}} />);
      const title = screen.getByRole("heading", { name: "Lohealthy Games" });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a button", () => {
      render(<Header actionOnClick={() => {}} />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    describe("And users click on button", () => {
      test("Then it should be called the function", async () => {
        const mockFunction = jest.fn();

        render(<Header actionOnClick={mockFunction} />);
        const button = screen.getByRole("button");
        await userEvent.click(button);

        expect(mockFunction).toHaveBeenCalled();
      });
    });
  });
});
