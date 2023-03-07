import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  typeButton?: "button" | "submit";
  isDisabled?: boolean;
  text: string;
  buttonClass?: "large-button";
}

const Button = ({
  typeButton = "button",
  isDisabled = false,
  text,
  buttonClass,
  ...props
}: ButtonProps): JSX.Element => {
  const classButton = `button${buttonClass ? ` ${buttonClass}` : ""}`;

  return (
    <ButtonStyled
      type={typeButton}
      className={classButton}
      disabled={isDisabled}
      semantic={"button"}
      {...props}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
