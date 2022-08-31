import { renderHook } from "@testing-library/react";
import { ProtoUser } from "../../models/Users/Users";
import useUser from "./useUser";

describe("Given the useUser custom hook", () => {
  const user: ProtoUser = {
    userName: "prueba",
    email: "prueba@hotmail.com",
    password: "12345",
    repeat_password: "12345",
  };
  describe("When userRegister it's called with a valid user", () => {
    test("Then should return true", async () => {
      const { result } = renderHook(() => useUser());

      const resultUserRegister = await result.current.userRegister(user);

      expect(resultUserRegister).toBe(true);
    });
  });

  describe("When userRegister it's called with a invalid user", () => {
    test("Then should return false", async () => {
      user.userName = "";
      const { result } = renderHook(() => useUser());

      const resultUserRegister = await result.current.userRegister(user);

      expect(resultUserRegister).toBe(false);
    });
  });
});
