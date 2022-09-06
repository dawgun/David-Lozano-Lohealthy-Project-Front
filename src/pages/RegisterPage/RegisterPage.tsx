import { NavLink } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./FormPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled className="register-page">
      <h2 className="register-page__title">Registro</h2>
      <RegisterForm />
      <div className="register-page__footer">
        <span className="register-page__login">¿Ya tienes cuenta?</span>
        <NavLink to={"/login"} className="nav-link">
          Log in
        </NavLink>
      </div>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
