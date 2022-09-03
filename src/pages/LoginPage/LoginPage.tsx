import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "../RegisterPage/RegisterPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled className="login-page">
      <h2 className="login-page__title">Login</h2>
      <LoginForm />
      <div className="login-page__footer">
        <span className="login-page__register">¿No tienes cuenta?</span>
        <NavLink to={"/register"} className="nav-link">
          Registrate
        </NavLink>
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
