import styled from "styled-components";

const GameCardStyled = styled.li`
  display: flex;
  gap: 1rem;
  width: 22rem;
  position: relative;
  list-style: none;

  .game {
    &__title {
      word-break: break-all;
    }

    &__image {
      object-fit: cover;
      border-radius: 1rem;
    }

    &__info {
      display: flex;
      flex-direction: column;
      width: 15rem;
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
