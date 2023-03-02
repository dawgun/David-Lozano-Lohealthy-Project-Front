import styled, { css } from "styled-components";

interface ButtonStyledProps {
  semantic: "button";
}

const buttonStyle = css`
  background-color: ${({ theme: { colors } }) => colors.secondaryColor};
  font-size: 1rem;
  color: #ffffff;
  border: 0px;
  width: 4rem;
  height: 3rem;
  text-transform: uppercase;
  font-family: "Roboto";
  font-weight: bold;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${({ theme: { colors } }) => colors.secondaryColor};
    border: 1px solid ${({ theme: { colors } }) => colors.secondaryColor};
  }

  &:disabled {
    background-color: #d43521aa;
  }

  &:disabled:hover {
    background-color: #d43521aa;
    color: white;
  }

  &.large-button {
    width: 100%;
  }
`;

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${(props) => props.semantic === "button" && buttonStyle};
`;

export default ButtonStyled;
