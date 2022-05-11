import { useTranslation } from "react-i18next";
import "../../assets/styles/my-team.scoped.css";

function Tablinks(props) {
  const { t } = useTranslation();

  return (
    <div className="tab">
      <button
        className={props.tab === "New" ? "tablinks active" : "tablinks"}
        onClick={() => props.setTab("New")}
      >
        {t("myteam:TOP_DESCRIPTION_NEWREGISTRATION")}
      </button>
      <button
        className={props.tab === "Expired" ? "tablinks active" : "tablinks"}
        onClick={() => props.setTab("Expired")}
      >
        {t("myteam:TOP_DESCRIPTION_EXPIREDPARTNERS")}
      </button>
      <button
        className={props.tab === "Paid" ? "tablinks active" : "tablinks"}
        onClick={() => props.setTab("Paid")}
      >
        {t("myteam:TOP_DESCRIPTION_PAIDPARTNERS")}
      </button>
    </div>
  );
}

export default Tablinks;
