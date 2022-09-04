import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #292929;
  display: flex;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;

  .header {
    &-button {
      background: inherit;
      border: 0;
      padding: 0;
      cursor: pointer;
    }
    &-title {
      margin: 0;
    }
  }

  .header-title {
    &__first-part {
      color: white;
    }
    &__second-part {
      color: #d43521;
    }
  }
`;

export default HeaderStyled;
