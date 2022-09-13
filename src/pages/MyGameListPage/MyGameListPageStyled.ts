import styled from "styled-components";

const MyGameListPageStyled = styled.section`
  padding: 1rem;
  flex: 1;

  .my-games {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      color: #858383;
    }

    &__button {
      background-color: #d43521;
      font-size: 1rem;
      color: #ffffff;
      border: 0px;
      width: 20rem;
      text-transform: uppercase;
      padding: 1rem;
      margin: 1rem 0 3rem 0;
      font-family: "Roboto";
      font-weight: bold;
    }
  }
`;

export default MyGameListPageStyled;
