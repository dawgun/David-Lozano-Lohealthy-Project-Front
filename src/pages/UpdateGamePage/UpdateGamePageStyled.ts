import styled from "styled-components";

const UpdateGamePageStyled = styled.section`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .update-page {
    &__title {
      padding: 1rem 0;
      color: #858383;
      font-size: 2rem;
    }
    &__container {
      padding: 1rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 1000px) {
        flex-direction: row;
        width: 915px;
        gap: 5rem;
      }
    }
  }
`;

export default UpdateGamePageStyled;
