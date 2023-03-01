import { screen } from "@testing-library/react";
import customRender from "../../testUtils/wrappers/customRender/customRender";
import Footer from "./Footer";

describe("Given the Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show social images of instagram, twitter, facebook and youtube", () => {
      const alternativeTextInstagram = "Instagram icon";
      const alternativeTextTwitter = "Twitter icon";
      const alternativeTextFacebook = "Facebook icon";
      const alternativeTextYoutube = "Youtube icon";

      customRender(<Footer />);

      const instagramImage = screen.getByRole("img", {
        name: alternativeTextInstagram,
      });
      const twitterImage = screen.getByRole("img", {
        name: alternativeTextTwitter,
      });
      const facebookImage = screen.getByRole("img", {
        name: alternativeTextFacebook,
      });
      const youtubeImage = screen.getByRole("img", {
        name: alternativeTextYoutube,
      });

      expect(instagramImage).toBeInTheDocument();
      expect(twitterImage).toBeInTheDocument();
      expect(facebookImage).toBeInTheDocument();
      expect(youtubeImage).toBeInTheDocument();
    });

    test("Then it should a the property of app and copyright text", () => {
      const propertyText = "Lohealthy Games es propiedad de David Lozano.";
      const copyrightText = "©2022 Todos los derechos reservados.";

      customRender(<Footer />);

      const property = screen.getByText(propertyText);
      const copyright = screen.getByText(copyrightText);

      expect(property).toBeInTheDocument();
      expect(copyright).toBeInTheDocument();
    });
  });
});
