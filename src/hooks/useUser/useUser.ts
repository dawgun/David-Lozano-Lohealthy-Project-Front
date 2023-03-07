import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { openModalActionCreator } from "../../store/UI/UISlice";
import { ProtoUser, UserLogin } from "../../store/user/model/user";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/user/userSlice";
import fetchToken from "../../utils/fetchToken/fetchToken";

const useUser = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      dispatch(
        openModalActionCreator({
          message: "Error al crear cuenta",
          type: false,
        })
      );
      return;
    }
    dispatch(
      openModalActionCreator({
        message: "Cuenta creada satisfactoriamente",
        type: true,
      })
    );
    navigate("/login");
  };

  const userLogin = async (formLoginData: UserLogin) => {
    let response;
    try {
      response = await fetch(urlAPI + "user/login/", {
        method: "POST",
        body: JSON.stringify(formLoginData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }
    } catch (error) {
      dispatch(
        openModalActionCreator({
          message: "Usuario o contraseña incorrecta",
          type: false,
        })
      );
    }
    const { token } = await (response as Response).json();
    const user = fetchToken(token);

    dispatch(loginUserActionCreator(user));
    localStorage.setItem("token", user.token);
    navigate(-1);
  };

  const userLogout = () => {
    dispatch(logoutUserActionCreator());
    localStorage.removeItem("token");
  };

  return { userRegister, userLogin, userLogout };
};

export default useUser;
