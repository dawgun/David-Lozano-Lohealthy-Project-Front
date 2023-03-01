import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { closeMenuActionCreator } from "../../store/UI/UISlice";
import pathRoutes from "../../utils/pathRoutes/pathRoutes";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { myGames, home } = pathRoutes;

  const closeMenuHandler = () => {
    dispatch(closeMenuActionCreator());
  };

  return (
    <NavigationStyled className="navigation">
      <NavLink onClick={closeMenuHandler} to={home} className="nav-link">
        <img
          height={18}
          width={18}
          src="/images/home_icon.svg"
          alt="Home icon"
        ></img>
      </NavLink>
      <NavLink onClick={closeMenuHandler} to={myGames} className="nav-link">
        Mis Juegos
      </NavLink>
    </NavigationStyled>
  );
};
export default Navigation;
