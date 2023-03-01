import styled from "styled-components";

const HomePageStyled = styled.section`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pagination {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    align-items: center;
    justify-content: space-around;
    padding: 1.5rem 0;
    width: 100%;

    .disabled {
      color: #00000033;
    }

    &__next,
    &__previous {
      color: ${({ theme: { colors } }) => colors.secondaryColor};
      font-weight: 900;
      font-size: 1.5rem;
    }

    button {
      background-color: inherit;
      border: 0;
    }
  }

  .homepage {
    &__title {
      padding: 1rem 0;
      color: #858383;
      font-size: 2rem;
    }
  }
`;

export default HomePageStyled;
