import { NavLink } from "react-router-dom";
import GameForm from "../../components/GameForm/GameForm";
import CreateGamePageStyled from "../RegisterPage/FormPageStyled";

const CreateGamePage = (): JSX.Element => {
  return (
    <CreateGamePageStyled className="create-game-page">
      <h2 className="create-game-page__title">Crear Juego</h2>
      <GameForm />
      <div className="create-game-page__footer">
        <span className="login-page__register">
          ¿Ya no quieres crear un juego?
        </span>
        <NavLink to={"/mis-juegos"} className="nav-link">
          Volver
        </NavLink>
      </div>
    </CreateGamePageStyled>
  );
};

export default CreateGamePage;
