import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <video
        src="./images/loading.webm"
        title="Zelda dancing"
        muted
        autoPlay
        loop
      ></video>
      <span>Cargando...</span>
    </LoadingStyled>
  );
};

export default Loading;
