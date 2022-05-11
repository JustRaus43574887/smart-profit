import decor2 from "../../assets/images/decor2.svg";
import img_block from "../../assets/images/img_block.png";
import img_block2 from "../../assets/images/img_block2.png";
import img_block3 from "../../assets/images/img_block3.png";
import img_block4 from "../../assets/images/img_block4.png";
import "../../assets/styles/styles.scoped.css";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

function TiredBlock() {
  const { t } = useTranslation();

  return (
    <section className="tired_block">
      <div className="tired_content">
        <p className="tired_title">{t("landing:TOP_DESCRIPTION_TIRED")}</p>
        <Fade direction="left" а>
          <div className="fade-item">
            <img src={img_block} alt="img_block" />
            <div className="fade-item-text">
              <p className="fade-item-title">
                {t("landing:TOP_DESCRIPTION_MATRICES")}
              </p>
              <img
                src={decor2}
                alt="white-decor"
                className="white_item_decor"
              />
              <p className="fade-item-desc">
                {t("landing:TOP_DESCRIPTION_SELL")}
              </p>
            </div>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="fade-item reverse">
            <img src={img_block2} alt="img_block" />
            <div className="fade-item-text" style={{ textAlign: "end" }}>
              <p className="fade-item-title">
                {t("landing:TOP_DESCRIPTION_LOSING")}
              </p>
              <img
                src={decor2}
                alt="white-decor"
                className="white_item_decor"
              />
              <p className="fade-item-desc">
                {t("landing:TOP_DESCRIPTION_FROM")}
              </p>
            </div>
          </div>
        </Fade>
        <Fade direction="left">
          <div className="fade-item">
            <img src={img_block3} alt="img_block" />
            <div className="fade-item-text">
              <p className="fade-item-title">
                {t("landing:TOP_DESCRIPTION_INVEST")}
              </p>
              <img
                src={decor2}
                alt="white-decor"
                className="white_item_decor"
              />
              <p className="fade-item-desc">
                {t("landing:TOP_DESCRIPTION_BRING")}
              </p>
            </div>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="fade-item reverse">
            <img src={img_block4} alt="img_block" />
            <div className="fade-item-text" style={{ textAlign: "end" }}>
              <p className="fade-item-title">
                {t("landing:TOP_DESCRIPTION_PRODUCTS")}
              </p>
              <img
                src={decor2}
                alt="white-decor"
                className="white_item_decor"
              />
              <p className="fade-item-desc">
                {t("landing:TOP_DESCRIPTION_IMPOSE")}
              </p>
            </div>
          </div>
        </Fade>
        <div className="tired_bottom_block">
          <p className="bottom_tired_title">
            {t("landing:TOP_DESCRIPTION_RECOGNIZED_TITLE")}
            <br />
            {t("landing:TOP_DESCRIPTION_RECOGNIZED_DESC")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TiredBlock;
