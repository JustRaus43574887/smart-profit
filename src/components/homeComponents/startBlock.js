import "../../assets/styles/styles.scoped.css";
import decor from "../../assets/images/decorBlue.png";
import edit from "../../assets/images/edit.svg";
import partner from "../../assets/images/partner.svg";
import support from "../../assets/images/support.svg";
import settings from "../../assets/images/settings.svg";
import bonus from "../../assets/images/bonus.svg";
import medal from "../../assets/images/medal.svg";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function StartBlock() {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <section className="start_block">
      <div className="start_content">
        <p className="start_title">{t("landing:TOP_DESCRIPTION_STARTED")}</p>
        <img src={decor} alt="decor" />
        <div className="start_items_block">
          <div className="items_one_row">
            <div className="start_one_item">
              <div className="item_icon">
                <img src={edit} alt="edit" />
              </div>
              <p className="start_item_title">
                {t("landing:TOP_DESCRIPTION_REGISTER")}
              </p>
              <p className="start_item_description">
                {t("landing:TOP_DESCRIPTION_SIGN")}
              </p>
            </div>
            <div className="start_two_item">
              <div className="item_icon">
                <img src={partner} alt="edit" />
              </div>
              <p className="start_item_title">
                {t("landing:TOP_DESCRIPTION_FRIENDS")}
              </p>
              <p className="start_item_description">
                {t("landing:TOP_DESCRIPTION_ABOUT")}
              </p>
            </div>
            <div className="start_three_item">
              <div className="item_icon">
                <img src={support} alt="edit" />
              </div>
              <p className="start_item_title">
                {t("landing:TOP_DESCRIPTION_SUPPORT")}
              </p>
              <p className="start_item_description">
                {t("landing:TOP_DESCRIPTION_HELP")}
              </p>
            </div>
          </div>
          <div className="items_one_row">
            <div className="start_four_item">
              <div className="item_icon">
                <img src={settings} alt="edit" />
              </div>
              <p className="start_item_title">
                {t("landing:TOP_DESCRIPTION_SYSTEM")}
              </p>
              <p className="start_item_description">
                {t("landing:TOP_DESCRIPTION_MAXIMIZE")}
              </p>
            </div>
            <div className="start_five_item">
              <div className="item_icon">
                <img src={bonus} alt="edit" />
              </div>
              <p className="start_item_title">
                {t("landing:TOP_DESCRIPTION_BONUSES")}
              </p>
              <p className="start_item_description">
                {t("landing:TOP_DESCRIPTION_REACH")}
              </p>
            </div>
            <div className="start_six_item">
              <div className="item_icon">
                <img src={medal} alt="edit" />
              </div>
              <p className="start_item_title">
                {t("landing:TOP_DESCRIPTION_WATCH")}
              </p>
              <p className="start_item_description">
                {t("landing:TOP_DESCRIPTION_FORGET")}
              </p>
            </div>
          </div>
        </div>
        <div className="over_block">
          <Link to={`/join/${id ? id : ""}`} className="over_button yellow">
            {t("landing:TOP_DESCRIPTION_PARTICIPATE")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StartBlock;
