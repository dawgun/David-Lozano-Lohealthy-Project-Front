import styled from "styled-components";

const ModalStyled = styled.div`
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  height: 100%;
  position: fixed;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.5);

  span {
    box-sizing: border-box;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 0 70px black;
    gap: 2rem;
    align-items: center;
    display: flex;

    &.positive {
      border: 5px solid rgb(74, 172, 14);
      background: white;
    }
    &.negative {
      border: 5px solid rgb(212, 53, 33);
      background: white;
    }
  }

  button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default ModalStyled;
