import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="notfound-page">
      <h2 className="notfound-page__title">Mazmorra no encontrada</h2>
      <img
        src="/images/Notfound.png"
        alt="Character link of Legend of Zelda dead"
        height={125}
        width={295}
        className="notfound-page__image"
      ></img>
      <p>
        La web a la que estas intentando entrar no existe, vuelve por donde has
        venido o busca en otro castillo.
      </p>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
