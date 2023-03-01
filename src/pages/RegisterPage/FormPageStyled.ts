import styled from "styled-components";

const FormPageStyled = styled.section`
  background-color: #292929;
  margin-top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .register-page,
  .login-page,
  .create-game-page {
    &__title {
      color: white;
      margin: 0;
      padding: 1rem;
      font-size: 16px;
      font-weight: 900;
      text-transform: uppercase;
      background-color: ${({ theme: { colors } }) => colors.secondaryColor};
      width: 20rem;

      @media (min-width: 768px) {
        width: 30rem;
      }
    }

    &__login-link,
    &__register-link {
      color: ${({ theme: { colors } }) => colors.secondaryColor};
      font-weight: 900;
    }

    &__footer {
      display: flex;
      background-color: #eeeeee;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      width: 20rem;

      @media (min-width: 768px) {
        width: 30rem;
      }
    }
  }

  .nav-link {
    color: ${({ theme: { colors } }) => colors.secondaryColor};
    font-weight: 900;
    text-decoration: none;
  }
`;

export default FormPageStyled;
