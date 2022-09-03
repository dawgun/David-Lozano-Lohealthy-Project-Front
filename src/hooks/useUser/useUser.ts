import { ProtoUser } from "../../models/Users/Users";
import { useAppDispatch } from "../../store/hooks";
import { User } from "../../store/user/model/user";
import { loginUserActionCreator } from "../../store/user/userSlice";
import fetchToken from "../../utils/auth/auth";

const useUser = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const userRegister = async (formRegisterData: ProtoUser) => {
    try {
      const response = await fetch(urlAPI + "user/register/", {
        method: "POST",
        body: JSON.stringify(formRegisterData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      return false;
    }
    return true;
  };

  const userLogin = async (formLoginData: User) => {
    const data = await fetch(urlAPI + "user/login/", {
      method: "POST",
      body: JSON.stringify(formLoginData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { userToken } = await data.json();

    const user = fetchToken(userToken);

    dispatch(loginUserActionCreator(user));
    localStorage.setItem("token", user.token);
  };

  return { userRegister, userLogin };
};

export default useUser;
