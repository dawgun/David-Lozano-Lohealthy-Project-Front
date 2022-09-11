import styled from "styled-components";

const AppStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .menu-container {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

export default AppStyled;
