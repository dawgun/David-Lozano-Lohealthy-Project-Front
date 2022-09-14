import styled from "styled-components";

const GameCardDetailsStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  .game-detail {
    &__image {
      border-radius: 1rem;
    }

    &__title {
      font-size: 2rem;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      width: 20rem;
    }

    &__info {
      display: flex;
      flex-direction: column;
      width: 10rem;
    }
  }
`;

export default GameCardDetailsStyled;
