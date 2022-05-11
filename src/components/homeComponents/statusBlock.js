import { Link, useParams } from "react-router-dom";
import decor from "../../assets/images/decorBlue.png";
import "../../assets/styles/styles.scoped.css";
import { useTranslation } from "react-i18next";

function StatusBlock() {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <section className="status_block">
      <div className="status_content">
        <p className="status_title">{t("landing:TOP_DESCRIPTION_STATUS")}</p>
        <img src={decor} alt="decor-icon" />
        <div className="cards_group">
          <div className="status_card sp">
            <div className="card_title_blue">Start <span> Profit</span></div>
            <div className="card_description">
              {t("landing:TOP_DESCRIPTION_FROM_STATUS")}
              <span>
                {t("landing:TOP_DESCRIPTION_FROM_SPDAYS")}
              </span>
              {t("landing:TOP_DESCRIPTION_FROM_SPBETWEEN")}
              <span>
                {t("landing:TOP_DESCRIPTION_FROM_SPLEVELS")}
              </span>
              {t("landing:TOP_DESCRIPTION_FROM_SPEND")}
            </div>
            <div style={{ position: "relative" }}>
              <div className="card_price_info">
                <p className="card_price_blue">30$ BNB</p>
              </div>
            </div>
          </div>
          <div className="status_yellow_card">
            <div className="card_title_yellow">Maxi <span> Profit</span></div>
            <div className="card_description">
              {t("landing:TOP_DESCRIPTION_DURING")}
              <span>
                {t("landing:TOP_DESCRIPTION_DURING_MPDAYS")}
              </span>
              {t("landing:TOP_DESCRIPTION_DURING_MPBETWEEN")}
              <span>
                {t("landing:TOP_DESCRIPTION_DURING_MPLEVELS")}
              </span>
              {t("landing:TOP_DESCRIPTION_DURING_MPINFO")}
              <span>
                {t("landing:TOP_DESCRIPTION_DURING_MPSTATUS")}
              </span>
              {t("landing:TOP_DESCRIPTION_DURING_MPBOTTOM")}
              <span>
                {t("landing:TOP_DESCRIPTION_DURING_MPBONUS")}
              </span>
              {t("landing:TOP_DESCRIPTION_DURING_MPTHIS")}
              <span>
                {t("landing:TOP_DESCRIPTION_DURING_MPPART")}
              </span>
            </div>
            <div style={{ position: "relative" }}>
              <div className="card_price_info">
                <p className="card_price_yellow">180$ BNB</p>
              </div>
            </div>
          </div>
          <div className="status_card fp">
            <div className="card_title_green">Fixed <span> Profit</span></div>
            <div className="card_description">
              {t("landing:TOP_DESCRIPTION_ACTIVATE_FPSTATUS")}
              <span>
                {t("landing:TOP_DESCRIPTION_ACTIVATE_FPDAYS")}
              </span>
              {t("landing:TOP_DESCRIPTION_ACTIVATE_FPBETWEEN")}
              <span>
                {t("landing:TOP_DESCRIPTION_ACTIVATE_FPLEVELS")}
              </span>
              {t("landing:TOP_DESCRIPTION_ACTIVATE_FPEND")}
              <span>
                {t("landing:TOP_DESCRIPTION_ACTIVATE_FPNAME")}
              </span>
              {t("landing:TOP_DESCRIPTION_ACTIVATE_FPBOTTOM")}
            </div>
            <div style={{ position: "relative" }}>
              <div className="card_price_info">
                <p className="card_price_green">90$ BNB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="over_block">
          <Link to={`/join/${id ? id : ""}`} className="over_button">
            {t("landing:TOP_DESCRIPTION_JOIN")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StatusBlock;
