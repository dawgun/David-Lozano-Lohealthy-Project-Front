import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { ProtoUser } from "../../models/Users/Users";
import { store } from "../../store/store";
import useUser from "./useUser";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given the useUser custom hook", () => {
  const user: ProtoUser = {
    userName: "prueba",
    email: "prueba@hotmail.com",
    password: "12345",
    repeat_password: "12345",
  };
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
});
