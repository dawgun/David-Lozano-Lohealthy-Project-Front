import styled from "styled-components";

const GameCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .game {
    &__button {
      background-color: #d43521;
      font-size: 1rem;
      color: #ffffff;
      border: 0px;
      width: 10rem;
      height: 3rem;
      text-transform: uppercase;
      font-family: "Roboto";
      font-weight: bold;
    }

    &__details {
      display: flex;
      align-items: center;
    }

    &__image {
      width: 100%;
    }

    &__synopsis {
      color: #aaaaaa;
    }
  }
`;

export default GameCardStyled;
