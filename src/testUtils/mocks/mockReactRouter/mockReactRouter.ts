const mockReactRouter = {
  useNavigate: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockReactRouter.useNavigate,
}));

export default mockReactRouter;
