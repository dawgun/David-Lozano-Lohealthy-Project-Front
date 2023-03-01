import styled from "styled-components";

const NavigationStyled = styled.nav`
  background-color: ${({ theme: { colors } }) => colors.secondaryColor};
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;

  .nav-link {
    color: white;
    font-weight: 900;
    text-decoration: none;
  }

  .navigation {
    &__right-side {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default NavigationStyled;
