import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.secondaryColor};
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 0.9rem;
  padding: 1rem;
  gap: 1rem;
  width: 100%;

  .footer {
    &__social {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    &__copyright {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default FooterStyled;
