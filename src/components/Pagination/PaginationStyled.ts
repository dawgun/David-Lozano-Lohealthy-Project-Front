import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem 0;
  width: 100%;

  .pagination {
    &__next,
    &__previous {
      color: ${({ theme: { colors } }) => colors.secondaryColor};
      font-weight: 900;
      font-size: 1.5rem;
    }
  }

  .disabled {
    color: #00000033;
  }

  button {
    background-color: inherit;
    border: 0;
    cursor: pointer;
  }
`;

export default PaginationStyled;
