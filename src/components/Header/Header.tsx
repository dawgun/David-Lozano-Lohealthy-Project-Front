import { useAppDispatch } from "../../store/hooks";
import { toggleMenuActionCreator } from "../../store/UI/UISlice";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handlerToggleMenu = () => {
    dispatch(toggleMenuActionCreator());
  };

  return (
    <HeaderStyled className="header">
      <h1 className="header-title">
        <span className="header-title__first-part">Lohealthy</span>
        <span className="header-title__second-part">Games</span>
      </h1>
      <button className="header-button" onClick={handlerToggleMenu}>
        <img
          className="header-button__icon"
          alt="Menu icon"
          height="32"
          width="32"
          src="/images/Menu.svg"
        ></img>
      </button>
    </HeaderStyled>
  );
};

export default Header;
