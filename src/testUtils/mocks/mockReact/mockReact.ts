const mockReact = {
  mockUseState: jest.fn(),
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (init: unknown) => [init, mockReact.mockUseState],
}));

export default mockReact;
