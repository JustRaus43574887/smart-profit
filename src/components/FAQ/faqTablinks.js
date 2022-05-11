import "../../assets/styles/faq.scoped.css";

import general_team from "../../assets/images/general-team.svg";
import question_icon from "../../assets/images/question-icon.svg";
import partner_icon from "../../assets/images/partner-icon.svg";
import finance_icon from "../../assets/images/finance-icon.svg";

import { useTranslation } from "react-i18next";

export default function Tablinks(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="faq_top_block">
        <img src={general_team} />
        <p className="faq_title">FAQ</p>
      </div>
      <div className="tab">
        <button
          className={props.open === "General" ? "tablinks active" : "tablinks"}
          onClick={() => props.setOpen("General")}
        >
          <img src={question_icon} />
          <p>{t("faq:TOP_DESCRIPTION_GENERALISSUES")}</p>
        </button>
        <button
          className={props.open === "Partner" ? "tablinks active" : "tablinks"}
          onClick={() => props.setOpen("Partner")}
        >
          <img src={partner_icon} />
          <p>{t("faq:TOP_DESCRIPTION_FORPARTNERS")}</p>
        </button>
        <button
          className={props.open === "Finance" ? "tablinks active" : "tablinks"}
          onClick={() => props.setOpen("Finance")}
        >
          <img src={finance_icon} />
          <p>{t("faq:TOP_DESCRIPTION_FINANCIALQUESTIONS")}</p>
        </button>
      </div>
    </>
  );
}
