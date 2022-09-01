import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled className="register-page">
      <h2 className="register-page__title">Registro</h2>
      <RegisterForm />
      <div className="register-page__footer">
        <span className="register-page__login">¿Ya tienes cuenta?</span>
        <span className="register-page__login-link">Log in</span>
      </div>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
