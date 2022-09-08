import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface ReverseRouteProtectorProps {
  children: JSX.Element | JSX.Element[];
}

const ReverseRouteProtector = ({
  children,
}: ReverseRouteProtectorProps): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [navigate, isLogged]);
  return <>{!isLogged ? children : <></>}</>;
};

export default ReverseRouteProtector;
