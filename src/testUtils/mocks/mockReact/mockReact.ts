import react from "react";

const mockReact = {
  mockUseState: jest.fn(),
};

jest.mock("react", (): typeof react => ({
  ...jest.requireActual("react"),
  useState: ((init: unknown) => [init, mockReact.mockUseState]) as jest.Mock<
    any,
    any
  >,
}));

export default mockReact;
