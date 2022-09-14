import styled from "styled-components";

const GameCardListStyled = styled.ul`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  flex: 1;
  width: 22rem;
  padding: 0;
  margin: 0;
  align-content: flex-start;

  @media (min-width: 1000px) {
    width: 51rem;
  }
`;

export default GameCardListStyled;
