import { SyntheticEvent, useState } from "react";
import FormStyled from "../RegisterForm/FormStyled";
import { ProtoGame } from "../../store/games/model/game";
import useGames from "../../hooks/useGames/useGames";
import "@fontsource/roboto";

export const GameForm = () => {
  const initialFormData = new FormData();
  const minLength = 50;

  const initialState: ProtoGame = {
    title: "",
    genre: "",
    players: "",
    release: "",
    synopsis: "",
    image: "",
  };

  const [formGameData, setFormGameData] = useState(initialState);
  const [gameData, setGameData] = useState(initialFormData);
  const { createGame } = useGames();

  const handleChange = (event: SyntheticEvent) => {
    setFormGameData({
      ...formGameData,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    gameData.append("title", formGameData.title);
    gameData.append("genre", formGameData.genre);
    gameData.append("players", formGameData.players);
    gameData.append("release", formGameData.release);
    gameData.append("synopsis", formGameData.synopsis);

    await createGame(gameData);
    setFormGameData(initialState);
    setGameData(new FormData());
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    gameData.append("image", event.target.files![0]);
    setFormGameData({ ...formGameData, image: event.target.value });
  };

  const isFormValid =
    formGameData.title !== "" &&
    formGameData.genre !== "" &&
    formGameData.players !== "" &&
    formGameData.release !== "" &&
    formGameData.image !== "" &&
    formGameData.synopsis.length > minLength;

  return (
    <FormStyled className="game-form">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            className="game-form__control"
            value={formGameData.title}
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
            value={formGameData.genre}
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
            value={formGameData.players}
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
            value={formGameData.release}
            name="release"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <textarea
            className="game-form__control"
            value={formGameData.synopsis}
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
            value={formGameData.image}
            name="image"
            onChange={handleChangeFile}
            autoComplete="off"
            required
          />
        </div>
        <button
          className={`game-form__button${
            !isFormValid ? " button-disabled" : ""
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          Crear
        </button>
      </form>
    </FormStyled>
  );
};

export default GameForm;
