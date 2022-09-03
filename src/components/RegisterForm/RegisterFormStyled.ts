import styled from "styled-components";

const RegisterStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  background-color: white;
  width: 100%;
  padding: 1rem;

  .register-form,
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
  }

  .button-disabled {
    background-color: #d43521aa;
  }

  .input-incorrect {
    border: 2px solid #d43521;
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
