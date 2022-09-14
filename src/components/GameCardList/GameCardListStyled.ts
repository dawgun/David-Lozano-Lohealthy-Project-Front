import styled from "styled-components";

const GameCardListStyled = styled.section`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  flex: 1;
  width: 22rem;

  @media (min-width: 1000px) {
    width: 51rem;
  }
`;

export default GameCardListStyled;
