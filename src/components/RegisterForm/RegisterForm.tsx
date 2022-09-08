import { SyntheticEvent, useState } from "react";
import "@fontsource/roboto";
import FormStyled from "./FormStyled";
import useUser from "../../hooks/useUser/useUser";
import emailValidator from "../../utils/emailValidator/emailValidator";
import { ProtoUser } from "../../store/user/model/user";

export const RegisterForm = () => {
  const initialState: ProtoUser = {
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

  const isEmailValid = emailValidator(formData.email);

  const isFormValid =
    formData.userName.length > minLenght &&
    formData.email !== "" &&
    formData.password.length > minLenght &&
    formData.repeat_password !== "" &&
    isSamePassword &&
    isEmailValid;

  return (
    <FormStyled className="register-form">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            value={formData.userName}
            name="userName"
            placeholder="Usuario"
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
            placeholder="Contraseña"
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
            placeholder="Repite contraseña"
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
    </FormStyled>
  );
};

export default RegisterForm;
