import styled from "styled-components";

const RegisterPageStyled = styled.section`
  background-color: #292929;
  height: 100vh;
  margin-top: 0;
  padding: 1rem;

  .register-page {
    &__title {
      color: white;
      margin: 0;
      padding: 1rem;
      font-size: 16px;
      font-weight: 900;
      text-transform: uppercase;
      background-color: #d43521;
      width: 100%;
    }

    &__login-link {
      color: #d43521;
      font-weight: 900;
    }

    &__footer {
      display: flex;
      background-color: #eeeeee;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
  }
`;

export default RegisterPageStyled;
