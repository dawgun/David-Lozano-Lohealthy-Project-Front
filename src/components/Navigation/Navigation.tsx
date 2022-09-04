import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled className="navigation">
      <NavLink to={"/home"} className="nav-link">
        <img src="/images/home_icon.svg" alt="Home icon"></img>
      </NavLink>
      <div className="navigation__right-side">
        <NavLink to={"/juegos"} className="nav-link">
          Juegos
        </NavLink>
        <NavLink to={"/mis-juegos"} className="nav-link">
          Mis Juegos
        </NavLink>
      </div>
    </NavigationStyled>
  );
};
export default Navigation;
