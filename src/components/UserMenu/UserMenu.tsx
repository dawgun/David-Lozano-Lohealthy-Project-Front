import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import UserMenuStyled from "./UserMenuStyled";

interface UserMenuProps {
  actionOnClick: () => void;
}

const UserMenu = ({ actionOnClick }: UserMenuProps): JSX.Element => {
  const { isLogged, user } = useAppSelector((state) => state.user);

  if (!isLogged) {
    return (
      <UserMenuStyled className="menu-user">
        <NavLink to={"/login"} className="nav-link" onClick={actionOnClick}>
          Login
        </NavLink>
        <NavLink to={"/register"} className="nav-link" onClick={actionOnClick}>
          Registrar
        </NavLink>
      </UserMenuStyled>
    );
  }
  return (
    <UserMenuStyled className="menu-user">
      <span className="menu-user__user">
        {user.userName}
        <img
          height={35}
          width={35}
          src={user.image}
          alt={"Profile pic representing user"}
        ></img>
      </span>
      <span className="menu-user__logout">Logout</span>
    </UserMenuStyled>
  );
};

export default UserMenu;
