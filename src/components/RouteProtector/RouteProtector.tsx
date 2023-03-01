import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import pathRoutes from "../../utils/pathRoutes/pathRoutes";
interface RouteProtectorProps {
  children: JSX.Element | JSX.Element[];
}

const RouteProtector = ({ children }: RouteProtectorProps): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { home } = pathRoutes;

  useEffect(() => {
    if (!isLogged) {
      navigate(home);
    }
  }, [navigate, isLogged, home]);
  return <>{isLogged ? children : <></>}</>;
};

export default RouteProtector;
