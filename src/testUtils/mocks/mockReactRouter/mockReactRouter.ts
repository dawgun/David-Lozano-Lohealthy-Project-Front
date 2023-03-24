import reactRouterDom from "react-router-dom";

const mockReactRouter: Partial<typeof reactRouterDom> = {
  useNavigate: jest.fn(),
};

jest.mock("react-router-dom", (): typeof reactRouterDom => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockReactRouter.useNavigate!,
}));

export default mockReactRouter;
