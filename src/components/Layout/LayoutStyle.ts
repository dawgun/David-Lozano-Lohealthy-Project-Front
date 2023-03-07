import styled from "styled-components";

const LayoutStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .menu-container {
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
  }
`;

export default LayoutStyled;
