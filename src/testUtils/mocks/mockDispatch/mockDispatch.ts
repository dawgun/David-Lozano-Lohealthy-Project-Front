import reactRedux from "react-redux";

const mockDispatch = jest.fn();

jest.mock("react-redux", (): typeof reactRedux => ({
  ...jest.requireActual("react-redux"),
  useDispatch: (() => mockDispatch) as jest.Mock<any, any>,
}));

export default mockDispatch;
