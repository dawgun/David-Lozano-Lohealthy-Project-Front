import styled from "styled-components";

const RegisterStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  max-width: 600px;

  .form-container {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__header {
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      background-color: #d43521;
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 1rem;
    }

    &__title {
      color: #fff;
      font-size: 16px;
      font-weight: 900;
      text-transform: uppercase;
    }

    &__button {
      background-color: #d43521;
      font-size: 1rem;
      color: #ffffff;
      border: 0px;
      width: 100%;
      text-transform: uppercase;
      padding: 1rem;
      font-family: "Roboto";
      font-weight: bold;
    }

    &__login {
      padding: 1rem;
      width: 100%;
      text-align: center;
    }

    &__login-link {
      color: #d43521;
    }

    &__footer {
      margin-top: 1rem;
      display: flex;
      background-color: #eeeeee;
      gap: 1rem;
      justify-content: center;
    }
  }
  .button-disabled {
    background-color: #d43521aa;
  }

  .password-incorrect {
    background-color: #d4352133;
  }

  input {
    border-radius: 1px;
    border: 1px solid #858383;
    margin-bottom: 1rem;
    min-width: 100%;
    padding: 1rem;
    font-size: 16px;
    font-weight: bold;
  }
`;

export default RegisterStyled;
