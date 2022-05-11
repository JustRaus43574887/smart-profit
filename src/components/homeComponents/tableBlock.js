import "../../assets/styles/styles.scoped.css";
import decor from "../../assets/images/decorBlue.png";
import Close from "../../assets/images/close-table.svg";
import img_block from "../../assets/images/why_first.png";
import img_block2 from "../../assets/images/why_second.png";
import img_block3 from "../../assets/images/why_third.png";
import FirstPercent from "../../assets/images/twentyfive.png";
import SecondPercent from "../../assets/images/sixtyfive.png";
import ThirdPercent from "../../assets/images/ten.png";
import Diagramma from "../../assets/images/diagramma.png";
import tableRU from "../../assets/images/RU.png";
import tableEN from "../../assets/images/EN.png";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

function TableBlock() {
  const { t, i18n } = useTranslation();
  const [showTable, setShowTable] = useState(false);

  const handleClickShowTable = () => {
    setShowTable(true);
  };

  const handleClickCloseTable = () => {
    setShowTable(false);
  };

  return (
    <section className="table_block">
      <div className="table_content">
        <p className="table_title">{t("landing:TOP_DESCRIPTION_TABLE")}</p>
        <img src={decor} alt="decor" />
        {showTable && <img
          src={i18n.language === "ru" ? tableRU : tableEN}
          alt="table-icon"
          className="table_img_block"
        />}
        {showTable && <img src={Close} alt="close"
          className="table_img_close"
          onClick={handleClickCloseTable}
        />}
        <p className="table_text">{t("landing:TOP_DESCRIPTION_WHY")}</p>
        <div className="table_diagramma">
          <div className="table_diagramma-img">
            <img src={Diagramma} alt="diagramma" />
          </div>
          <button
            className="table_diagramma-button"
            onClick={handleClickShowTable}
          >
            {t("landing:TOP_DESCRIPTION_SHOW_TABLE")}
          </button>
          <Fade direction="right" а>
            <div className="fade-item diagramma reverse first">
              <div style={{ position: "relative" }}>
                <img src={img_block2}
                  alt="img_block"
                  style={{
                    width: 200,
                    marginRight: 50
                  }}
                  className="fade-item_image"
                />
                <img src={FirstPercent}
                  style={{
                    width: 60,
                    position: "absolute",
                    right: 45,
                    bottom: 0
                  }}
                  className="fade-item_icon"
                  alt="25%" />
              </div>
              <div className="fade-item-text diagramma">
                <p className="fade-item-desc diagramma">
                  {t("landing:TOP_DESCRIPTION_FIRST")}
                </p>
              </div>
            </div>
          </Fade>
          <Fade direction="left" а>
            <div className="fade-item diagramma second">
              <div style={{ position: "relative" }}>
                <img src={img_block}
                  alt="img_block"
                  style={{
                    width: 200,
                    marginLeft: 50
                  }}
                  className="fade-item_image"
                />
                <img src={SecondPercent}
                  style={{
                    width: 60,
                    position: "absolute",
                    left: 45,
                    bottom: 0
                  }}
                  className="fade-item_icon"
                  alt="65%" />
              </div>
              <div className="fade-item-text diagramma">
                <p className="fade-item-desc diagramma">
                  {t("landing:TOP_DESCRIPTION_SECOND")}
                </p>
              </div>
            </div>
          </Fade>
          <Fade direction="right" а>
            <div className="fade-item diagramma reverse">
              <div style={{ position: "relative" }}>
                <img src={img_block3}
                  alt="img_block"
                  style={{
                    width: 200,
                    marginRight: 50
                  }}
                  className="fade-item_image"
                />
                <img src={ThirdPercent}
                  style={{
                    width: 60,
                    position: "absolute",
                    right: 45,
                    bottom: 0
                  }}
                  className="fade-item_icon"
                  alt="10%" />
              </div>
              <div className="fade-item-text diagramma">
                <p className="fade-item-desc diagramma">
                  {t("landing:TOP_DESCRIPTION_THIRD")}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <p className="table_bottom">{t("landing:TOP_DESCRIPTION_POCKET")} </p>
      </div>
    </section>
  );
}

export default TableBlock;
