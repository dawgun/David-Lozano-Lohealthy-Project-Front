import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled className="register-page">
      <h2 className="register-page__title">Registro</h2>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
