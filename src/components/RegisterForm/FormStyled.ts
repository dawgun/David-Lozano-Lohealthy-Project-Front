import styled from "styled-components";

const FormStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 20rem;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 30rem;
  }

  form {
    width: 100%;
  }

  .register-form,
  .login-form,
  .game-form {
    &__button {
      background-color: ${({ theme: { colors } }) => colors.secondaryColor};
      font-size: 1rem;
      color: #ffffff;
      border: 0px;
      width: 100%;
      text-transform: uppercase;
      padding: 1rem;
      font-family: "Roboto";
      font-weight: bold;
      cursor: pointer;
    }

    &__button:hover {
      background-color: white;
      color: ${({ theme: { colors } }) => colors.secondaryColor};
      border: 1px solid ${({ theme: { colors } }) => colors.secondaryColor};
    }

    &__control {
      border-radius: 1px;
      border: 1px solid #858383;
      margin-bottom: 2rem;
      padding: 1rem;
      font-size: 16px;
      font-weight: bold;
      width: 100%;
      background-color: white;
    }
  }

  .button-disabled {
    background-color: #d43521aa;
  }

  .input-incorrect {
    border: 2px solid ${({ theme: { colors } }) => colors.secondaryColor};
  }

  textarea {
    max-width: 100%;
  }
`;

export default FormStyled;
