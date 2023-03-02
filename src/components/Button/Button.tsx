import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  action?: () => void;
  typeButton?: "button" | "submit";
  isDisabled?: boolean;
  text: string;
  buttonClass?: "large-button";
}

const Button = ({
  action,
  typeButton = "button",
  isDisabled = false,
  text,
  buttonClass,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      type={typeButton}
      className={`button${buttonClass ? ` ${buttonClass}` : ""}`}
      disabled={isDisabled}
      semantic={"button"}
      onClick={action}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
