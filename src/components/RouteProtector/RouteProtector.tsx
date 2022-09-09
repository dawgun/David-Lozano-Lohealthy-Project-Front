import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface RouteProtectorProps {
  children: JSX.Element | JSX.Element[];
}

const RouteProtector = ({ children }: RouteProtectorProps): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/home");
    }
  }, [navigate, isLogged]);
  return <>{isLogged ? children : <></>}</>;
};

export default RouteProtector;
