import { SyntheticEvent, useState } from "react";
import "@fontsource/roboto";
import FormStyled from "./FormStyled";
import useUser from "../../hooks/useUser/useUser";
import emailValidator from "../../utils/emailValidator/emailValidator";
import { ProtoUser } from "../../store/user/model/user";
import Button from "../Button/Button";

export const RegisterForm = () => {
  const minLenght = 4;

  const initialState: ProtoUser = {
    userName: "",
    email: "",
    password: "",
    repeat_password: "",
  };

  const initialChecker = {
    samePassword: "",
    validEmail: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [checker, setChecker] = useState(initialChecker);
  const { userRegister } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await userRegister(formData);
    setFormData(initialState);
  };

  const passwordChecker = () => {
    if (formData.password !== formData.repeat_password) {
      setChecker({ ...checker, samePassword: "No" });
      return;
    }
    setChecker({ ...checker, samePassword: "Yes" });
  };

  const emailChecker = () => {
    const isValidEmail = emailValidator(formData.email);

    if (!isValidEmail) {
      setChecker({ ...checker, validEmail: "No" });
      return;
    }
    setChecker({ ...checker, validEmail: "Yes" });
  };

  const isFormValid =
    formData.userName.length > minLenght &&
    formData.email !== "" &&
    formData.password.length > minLenght &&
    formData.repeat_password !== "" &&
    checker.samePassword === "Yes" &&
    checker.validEmail === "Yes";

  return (
    <FormStyled className="register-form">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            className="register-form__control"
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
            onBlur={emailChecker}
            value={formData.email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
            autoComplete="off"
            className={`register-form__control${
              checker.validEmail === "No" ? " input-incorrect" : ""
            }`}
            required
          />
        </div>
        <div>
          <input
            className="register-form__control"
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
            className={`register-form__control${
              checker.samePassword === "No" ? " input-incorrect" : ""
            }`}
            type="password"
            onBlur={passwordChecker}
            value={formData.repeat_password}
            name="repeat_password"
            placeholder="Repite contraseña"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>

        <Button
          isDisabled={!isFormValid}
          typeButton="submit"
          text="Crear cuenta"
          buttonClass="large-button"
        />
      </form>
    </FormStyled>
  );
};

export default RegisterForm;
