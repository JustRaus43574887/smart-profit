import { useEffect, useState } from "react";
import "../../assets/styles/styles.scoped.css";
import mainLogo from "../../assets/images/main-logo.svg";
import Plane from "../../assets/images/plane.png";
import { useTranslation } from "react-i18next";
import Particles from "react-tsparticles";

import config from "../../particlesjs-config.json";
import useBonus from "../../hooks/web3/bonus.hook";

import Preloader from "../loaders/Preloader";

function MainPage() {
  const { t } = useTranslation();
  const { loading, getMaxiBonus, maxiBonus } = useBonus();

  const [connection, setConnection] = useState("");

  const text = t("landing:TOP_DESCRIPTION_CONNECTION");
  let connectionLength = text.length;
  let timeOut;
  let character = 0;

  if (document.querySelector(".particle-canvas")) {
    document.querySelector(".particle-canvas").removeAttribute("style")
  }

  useEffect(() => {
    (function typeWriter() {
      timeOut = setTimeout(function () {
        character++;
        let type = text.substring(0, character);
        setConnection(type);
        typeWriter();

        if (character == connectionLength) {
          clearTimeout(timeOut);
        }

      }, 100);
    }());
  }, [t]);

  useEffect(() => {
    getMaxiBonus();
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <section className="main_page" style={{ position: "relative" }}>
        <Particles
          canvasClassName="particle-canvas"
          id="tsparticles"
          params={config} />
        <div className="main_content">
          <div className="top_text">
            <p className="top_title">{t("landing:TOP_TITLE")}</p>
            <p className="top_description">{t("landing:TOP_DESCRIPTION")} </p>
          </div>
          <div className="main_center">
            <img src={mainLogo} alt="main-logo" className="main_logo" />
          </div>
          <div className="bottom_text">
            <p className="bottom_description">
              {t("landing:TOP_DESCRIPTION_MANY")}
            </p>
            <p className="bottom_title">
              {t("landing:TOP_DESCRIPTION_MANY_YEARS")}
            </p>
            <img src={Plane} alt="plane" />
            <p className="connection_is_good">
              {connection}
            </p>
          </div>
          <div className="main_banner">
            <p className="main_banner_title">
              {t("landing:TOP_DESCRIPTION_MAXI")}
            </p>
            <p className="main_banner_description">
              {(maxiBonus / Math.pow(10, 18)).toFixed(4)} BNB
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
