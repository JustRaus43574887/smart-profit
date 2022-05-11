import help_icon from "../../assets/images/help-icon.svg";
import people_icon from "../../assets/images/people-icon.svg";
import structure_icon from "../../assets/images/structure-icon.svg";
import money_icon from "../../assets/images/money-icon.svg";
import security_icon from "../../assets/images/security-icon.svg";
import "../../assets/styles/styles.scoped.css";
import { useTranslation } from "react-i18next";

const ValuesBlock = () => {
  const { t } = useTranslation();

  return (
    <section className="values_block">
      <div className="values_content">
        <p className="values_title">{t("landing:TOP_DESCRIPTION_VALUES")}</p>
        <div className="form_content">
          <div className="one_row">
            <div className="value_item">
              <img src={help_icon} alt="help-icon" className="help-icon" />
              <p className="value_title">
                {t("landing:TOP_DESCRIPTION_OVERFLOW")}
              </p>
              <p
                className="value_description"
                style={{ paddingLeft: 10, paddingRight: 10 }}
              >
                {t("landing:TOP_DESCRIPTION_HELP_DOT")}
              </p>
            </div>
          </div>
          <div className="two_row">
            <div className="value_item">
              <img src={people_icon} alt="people-icon" className="help-icon" />
              <p className="value_title">
                {t("landing:TOP_DESCRIPTION_AVAILABLE")}
              </p>
              <p
                className="value_description"
                style={{ paddingLeft: 10, paddingRight: 10 }}
              >
                {t("landing:TOP_DESCRIPTION_GET")}
              </p>
            </div>
            <div className="form_logo_block" />
            <div className="value_item">
              <img
                src={structure_icon}
                alt="structure-icon"
                className="help-icon"
              />
              <p className="value_title">
                {t("landing:TOP_DESCRIPTION_GLOBAL")}
              </p>
              <p
                className="value_description"
                style={{ paddingLeft: 15, paddingRight: 15 }}
              >
                {t("landing:TOP_DESCRIPTION_OCCUPY")}
              </p>
            </div>
          </div>
          <div className="three_row">
            <div className="value_item">
              <img src={money_icon} alt="help-icon" className="net-icon" />
              <p className="value_title">
                {t("landing:TOP_DESCRIPTION_ONLINE")}
              </p>
              <p
                className="value_description"
                style={{ paddingLeft: 10, paddingRight: 10 }}
              >
                {t("landing:TOP_DESCRIPTION_MONEY")}
              </p>
            </div>
            <div className="value_item">
              <img src={security_icon} alt="help-icon" className="net-icon" />
              <p className="value_title">
                {t("landing:TOP_DESCRIPTION_SAFETY")}
              </p>
              <p
                className="value_description"
                style={{ paddingLeft: 10, paddingRight: 10 }}
              >
                {t("landing:TOP_DESCRIPTION_CONTRACT")}
              </p>
            </div>
          </div>
          <div className="values_bottom_block">
            <p className="bottom_block_title">
              {t("landing:TOP_DESCRIPTION_EXACTLY")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesBlock;
