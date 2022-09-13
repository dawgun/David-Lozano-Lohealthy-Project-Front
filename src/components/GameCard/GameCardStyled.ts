import styled from "styled-components";

const GameCardStyled = styled.article`
  display: flex;
  gap: 1rem;
  width: 23rem;
  position: relative;

  .game {
    &__title {
      word-break: break-all;
    }

    &__image {
      object-fit: cover;
    }

    &__info {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__button {
      background-color: #d43521;
      font-size: 1rem;
      color: #ffffff;
      border: 0px;
      width: 4rem;
      height: 3rem;
      text-transform: uppercase;
      font-family: "Roboto";
      font-weight: bold;
      align-self: flex-end;
    }

    &__delete {
      color: red;
      background-color: inherit;
      border: none;
      position: absolute;
      right: -15px;
      top: -30px;
      cursor: pointer;
      font-size: 3rem;
    }

    &__details {
      display: flex;
      align-items: center;
    }

    &__synopsis {
      word-break: break-all;
    }
  }
`;

export default GameCardStyled;
