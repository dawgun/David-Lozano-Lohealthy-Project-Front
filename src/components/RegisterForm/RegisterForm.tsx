import { SyntheticEvent, useState } from "react";
import "@fontsource/roboto";
import RegisterStyled from "./RegisterFormStyled";
import useUser from "../../hooks/useUser/useUser";
import validateEmail from "../../utils/emailValidator/emailValidator";

export const RegisterForm = () => {
  const initialState = {
    userName: "",
    email: "",
    password: "",
    repeat_password: "",
  };
  const minLenght = 4;

  const [formData, setFormData] = useState(initialState);
  const { userRegister } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await userRegister(formData);
    setFormData(initialState);
  };

  const isSamePassword = formData.password === formData.repeat_password;

  const isEmailValid = validateEmail(formData.email);

  const isFormValid =
    formData.userName.length > minLenght &&
    formData.email !== "" &&
    formData.password.length > minLenght &&
    formData.repeat_password !== "" &&
    isSamePassword &&
    isEmailValid;

  return (
    <RegisterStyled className="register-form">
      <div className="register-form__header"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              value={formData.userName}
              name="userName"
              placeholder="Username"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}
              autoComplete="off"
              className={!isEmailValid ? "input-incorrect" : ""}
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={formData.password}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <input
              className={!isSamePassword ? "input-incorrect" : ""}
              type="password"
              value={formData.repeat_password}
              name="repeat_password"
              placeholder="Repeat password"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <button
            className={`register-form__button${
              !isFormValid ? " button-disabled" : ""
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            Crear cuenta
          </button>
        </form>
        <div className="register-form__footer">
          <span className="register-form__login">
            ¿Ya tienes cuenta?
            <span className="register-form__login-link">Log in</span>
          </span>
        </div>
      </div>
    </RegisterStyled>
  );
};

export default RegisterForm;
