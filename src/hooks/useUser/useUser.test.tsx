import mockDispatch from "../../testUtils/mocks/mockDispatch/mockDispatch";
import mockReactRouter from "../../testUtils/mocks/mockReactRouter/mockReactRouter";
import { RenderHookResult } from "@testing-library/react";
import { ProtoUser } from "../../store/user/model/user";
import { openModalActionCreator } from "../../store/UI/UISlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/user/userSlice";
import useUser from "./useUser";
import customRenderHook from "../../testUtils/wrappers/customRenderHook/customRenderHook";

const mockuserWithToken = {
  token: "token",
  id: "",
  image: "",
  userName: "",
};

jest.mock("../../utils/auth/auth", () => () => mockuserWithToken);

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
      test("Then should navigate has been called with '/login'", async () => {
        const linkNavigate = "/login";

        const { result } = customRenderHook({
          customHook: useUser,
        }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
        await result.current.userRegister(user);

        expect(mockReactRouter.useNavigate).toHaveBeenCalledWith(linkNavigate);
      });

      test("Then should dispatch has been called with action openModal with succesful message", async () => {
        const payloadModalSuccessfulAction = {
          message: "Cuenta creada satisfactoriamente",
          type: true,
        };

        const { result } = customRenderHook({
          customHook: useUser,
        }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
        await result.current.userRegister(user);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModalSuccessfulAction)
        );
      });
    });

    describe("And called with a invalid user", () => {
      test("Then should dispatch has been called with action openModal with error message", async () => {
        user.userName = "";
        const payloadModalErrorAction = {
          message: "Error al crear cuenta",
          type: false,
        };

        const { result } = customRenderHook({
          customHook: useUser,
        }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
        await result.current.userRegister(user);

        await result.current.userRegister(user);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModalErrorAction)
        );
      });
    });
  });

  describe("When userLogin it's called", () => {
    const userLogin = {
      userName: "Facundo",
      password: "facherito",
    };
    describe("And called with a valid user", () => {
      test("Then should dispatch has been called with action login with an user", async () => {
        const { result } = customRenderHook({
          customHook: useUser,
        }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
        await result.current.userRegister(user);

        await result.current.userLogin(userLogin);

        expect(mockDispatch).toHaveBeenCalledWith(
          loginUserActionCreator(mockuserWithToken)
        );
      });

      test("Then should localStorage with setItem method has been called with 'token' and user token", async () => {
        jest.spyOn(Storage.prototype, "setItem");
        Storage.prototype.setItem = jest.fn();
        const localStorageKey = "token";

        const { result } = customRenderHook({
          customHook: useUser,
        }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
        await result.current.userRegister(user);
        await result.current.userLogin(userLogin);

        expect(localStorage.setItem).toHaveBeenCalledWith(
          localStorageKey,
          mockuserWithToken.token
        );
      });

      test("Then should navigation has been called with '/home'", async () => {
        const pathNavigate = -1;

        const { result } = customRenderHook({
          customHook: useUser,
        }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
        await result.current.userRegister(user);

        await result.current.userLogin(userLogin);

        expect(mockReactRouter.useNavigate).toHaveBeenCalledWith(pathNavigate);
      });
    });

    describe("And called with an inexistent user", () => {
      test("Then dispatch has been called with openModal action with message 'Usuario o contraseña incorrecta'", async () => {
        const payloadModal = {
          message: "Usuario o contraseña incorrecta",
          type: false,
        };
        userLogin.userName = "";

        const { result } = customRenderHook({
          customHook: useUser,
        }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
        await result.current.userRegister(user);

        await result.current.userLogin(userLogin);

        expect(mockDispatch).toHaveBeenCalledWith(
          openModalActionCreator(payloadModal)
        );
      });
    });
  });

  describe("When userLogout it's called", () => {
    test("Then dispatch to have been called with logout action", async () => {
      const { result } = customRenderHook({
        customHook: useUser,
      }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;

      await result.current.userRegister(user);
      await result.current.userLogout();

      expect(mockDispatch).toHaveBeenCalledWith(logoutUserActionCreator());
    });

    test("Then localStorage with removeItem method to have been called with key 'token'", async () => {
      jest.spyOn(Storage.prototype, "removeItem");
      Storage.prototype.removeItem = jest.fn();
      const localStorageKey = "token";

      const { result } = customRenderHook({
        customHook: useUser,
      }) as RenderHookResult<ReturnType<typeof useUser>, unknown>;
      await result.current.userRegister(user);

      await result.current.userLogout();

      expect(localStorage.removeItem).toHaveBeenCalledWith(localStorageKey);
    });
  });
});
