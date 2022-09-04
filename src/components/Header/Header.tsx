import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  actionOnClick: () => void;
}

const Header = ({ actionOnClick }: HeaderProps): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h1 className="header-title">
        <span className="header-title__first-part">Lohealthy</span>
        <span className="header-title__second-part">Games</span>
      </h1>
      <button className="header-button" onClick={actionOnClick}>
        <img
          className="header-button__icon"
          alt="Menu icon"
          height="24"
          width="22"
          src="/images/Menu.png"
        ></img>
      </button>
    </HeaderStyled>
  );
};

export default Header;
