import styled from "styled-components";

const MyGameListPageStyled = styled.section`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .my-games {
    &__title {
      font-size: 2rem;
      color: #858383;
      padding: 1rem 0 0 0;
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

    &__button:hover {
      background-color: white;
      color: #d43521;
      border: 1px solid #d43521;
    }
  }
`;

export default MyGameListPageStyled;
