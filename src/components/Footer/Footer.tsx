import FooterStyled from "./FooterStyled";

const Footer = (): JSX.Element => {
  return (
    <FooterStyled className="footer">
      <div className="footer__social">
        <img
          height={40}
          width={40}
          src="/images/instagram_icon.svg"
          alt="Instagram icon"
        ></img>
        <img
          height={40}
          width={40}
          src="/images/youtube_icon.svg"
          alt="Youtube icon"
        ></img>
        <img
          height={40}
          width={40}
          src="/images/twitter_icon.svg"
          alt="Twitter icon"
        ></img>
        <img
          height={40}
          width={40}
          src="/images/facebook_icon.svg"
          alt="Facebook icon"
        ></img>
      </div>
      <div className="footer__copyright">
        <span>Lohealthy Games es propiedad de David Lozano.</span>
        <span>©2022 Todos los derechos reservados.</span>
      </div>
    </FooterStyled>
  );
};

export default Footer;
