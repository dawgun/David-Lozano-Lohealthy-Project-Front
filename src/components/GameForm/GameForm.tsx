import { SyntheticEvent, useState } from "react";
import FormStyled from "../RegisterForm/FormStyled";
import { ProtoGame } from "../../store/games/model/game";
import useGames from "../../hooks/useGames/useGames";
import "@fontsource/roboto";
import Button from "../Button/Button";
interface GameFormProps {
  gameId?: string;
  textButton: "Crear" | "Editar";
}

export const GameForm = ({ gameId, textButton }: GameFormProps) => {
  const initialFormGame = {} as ProtoGame;
  const initialFormData = new FormData();
  const minLength = 50;

  const [newGame, setnewGame] = useState(initialFormGame);
  const [newFormData, setnewFormData] = useState(initialFormData);
  const { createGame, updateGame } = useGames();

  const handleChange = (event: SyntheticEvent) => {
    setnewGame({
      ...newGame,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (gameId) {
      newFormData.append("id", gameId);
    }

    Object.entries(newGame).forEach(([property, value]) => {
      if (property !== "image") {
        newFormData.append(property, value);
      }
    });

    gameId ? updateGame(newFormData) : createGame(newFormData);

    setnewGame(() => initialFormGame);
    setnewFormData(initialFormData);
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    newFormData.append("image", event.target.files![0]);
    setnewGame({ ...newGame, image: event.target.value });
  };

  const isFormCreateValid =
    newGame.title !== "" &&
    newGame.genre !== "" &&
    newGame.players !== "" &&
    newGame.release !== "" &&
    newFormData.get("image") &&
    newGame.synopsis?.length > minLength;

  const isFormEditValid =
    (!!newGame.title ||
      !!newGame.genre ||
      !!newGame.players ||
      !!newGame.release ||
      !!newGame.image ||
      newGame.synopsis?.length > minLength) &&
    (!newGame.synopsis || newGame.synopsis?.length > minLength);

  return (
    <FormStyled className="game-form">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            className="game-form__control"
            value={newGame.title ?? ""}
            name="title"
            placeholder="Título"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <select
            placeholder="Género"
            className="game-form__control"
            value={newGame.genre ?? ""}
            onChange={handleChange}
            name="genre"
            required
          >
            <option>Selecciona una género</option>
            <option>Acción</option>
            <option>Arcade</option>
            <option>Aventura gráfica</option>
            <option>Carreras</option>
            <option>Deportes</option>
            <option>Disparos</option>
            <option>Estrategia</option>
            <option>Peleas</option>
            <option>Plataformas</option>
            <option>Puzzle</option>
            <option>Rol</option>
            <option>Simulación</option>
          </select>
        </div>
        <div>
          <select
            placeholder="Jugadores"
            className="game-form__control"
            value={newGame.players ?? ""}
            onChange={handleChange}
            name="players"
            required
          >
            <option>Número de jugadores</option>
            <option>1 jugador</option>
            <option>2 jugadores</option>
            <option>3 jugadores</option>
            <option>4 jugadores</option>
            <option>4+ jugadores</option>
            <option>MMO</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Fecha"
            className="game-form__control"
            type="date"
            value={newGame.release ?? ""}
            name="release"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <textarea
            className="game-form__control"
            value={newGame.synopsis ?? ""}
            name="synopsis"
            placeholder="Descripción del juego"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input
            placeholder="Imagen"
            className="game-form__control"
            type="file"
            value={newGame.image ?? ""}
            name="image"
            onChange={handleChangeFile}
            autoComplete="off"
            required
          />
        </div>
        <Button
          text={textButton}
          buttonClass="large-button"
          typeButton="submit"
          isDisabled={gameId ? !isFormEditValid : !isFormCreateValid}
        />
      </form>
    </FormStyled>
  );
};

export default GameForm;
