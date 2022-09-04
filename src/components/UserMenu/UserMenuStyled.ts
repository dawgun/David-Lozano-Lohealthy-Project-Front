import styled from "styled-components";

const UserMenuStyled = styled.section`
  background-color: #292929;
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 900;

  .menu-user {
    &__user,
    &__logout {
      text-decoration: none;
      border-bottom: 1px solid #858383;
    }

    &__user {
      display: flex;
      gap: 1rem;
      align-items: center;
      padding: 0.5rem 1rem;
    }

    &__logout {
      padding: 1rem;
    }
  }

  .nav-link {
    color: white;
    padding: 1rem;
    text-decoration: none;
    border-bottom: 1px solid #858383;
  }
`;

export default UserMenuStyled;
