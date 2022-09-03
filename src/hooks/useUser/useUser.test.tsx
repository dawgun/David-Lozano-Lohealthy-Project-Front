import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ProtoUser } from "../../models/Users/Users";
import { store } from "../../store/store";
import { openModalActionCreator } from "../../store/UI/UISlice";
import { loginUserActionCreator } from "../../store/user/userSlice";
import useUser from "./useUser";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
const mockuserWithToken = {
  token: "token",
  id: "",
  image: "",
  userName: "",
};

jest.mock("../../utils/auth/auth", () => () => mockuserWithToken);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

describe("Given the useUser custom hook", () => {
  let user: ProtoUser;

  beforeEach(() => {
    user = {
      userName: "prueba",
      email: "prueba@hotmail.com",
      password: "12345",
      repeat_password: "12345",
    };
  });

  describe("When userRegister it's called", () => {
    describe("And called with a valid user", () => {
      test("Then should return true", async () => {
        const { result } = renderHook(() => useUser(), { wrapper: Wrapper });

        const resultUserRegister = await result.current.userRegister(user);

        expect(resultUserRegister).toBe(true);
      });
    });

    describe("And called with a invalid user", () => {
      test("Then should return false", async () => {
        user.userName = "";
        const { result } = renderHook(() => useUser(), { wrapper: Wrapper });

        const resultUserRegister = await result.current.userRegister(user);

        expect(resultUserRegister).toBe(false);
      });
    });
  });

  describe("When userLogin it's called", () => {
    const userLogin = {
      userName: "Facundo",
      password: "facherito",
    };
    describe("And called with a valid user", () => {
      test("Then should dispatch has been called with", async () => {
        const { result } = renderHook(() => useUser(), {
          wrapper: Wrapper,
        });

        await result.current.userLogin(userLogin);

        expect(mockDispatch).toHaveBeenCalledWith(
          loginUserActionCreator(mockuserWithToken)
        );
      });

      test("Then should navigation has been called with '/home'", async () => {
        const pathNavigate = "/home";
        const { result } = renderHook(() => useUser(), {
          wrapper: Wrapper,
        });

        await result.current.userLogin(userLogin);

        expect(mockNavigate).toHaveBeenCalledWith(pathNavigate);
      });
    });

    describe("And called with an inexistent user", () => {
      test("Then dispatch has been called with openModal action with message 'Usuario o contraseña incorrecta'", async () => {
        const payloadModal = {
          message: "Usuario o contraseña incorrecta",
          type: false,
        };
        userLogin.userName = "";
        const { result } = renderHook(() => useUser(), {
          wrapper: Wrapper,
        });

        await result.current.userLogin(userLogin);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });
    });
  });
});
