import { SyntheticEvent, useState } from "react";
import "@fontsource/roboto";
import useUser from "../../hooks/useUser/useUser";
import FormStyled from "../RegisterForm/FormStyled";
import Button from "../Button/Button";

export const LoginForm = () => {
  const initialState = {
    userName: "",
    password: "",
  };
  const minLenght = 4;

  const [formData, setFormData] = useState(initialState);
  const { userLogin } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await userLogin(formData);
    setFormData(initialState);
  };

  const isFormValid =
    formData.userName.length > minLenght &&
    formData.password.length > minLenght;

  return (
    <FormStyled className="login-form">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            className="login-form__control"
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
            className="login-form__control"
            type="password"
            value={formData.password}
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <Button
          buttonClass="large-button"
          text="Login"
          isDisabled={!isFormValid}
          typeButton="submit"
        ></Button>
        {/* <button
          className={`login-form__button${
            !isFormValid ? " button-disabled" : ""
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          Login
        </button> */}
      </form>
    </FormStyled>
  );
};

export default LoginForm;
