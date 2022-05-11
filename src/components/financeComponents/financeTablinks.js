import { useTranslation } from "react-i18next";
import "../../assets/styles/finance.scoped.css";

import Finance from "../../assets/images/finance.svg";

function FinanceTablinks() {
  const { t } = useTranslation();

  return (
    <div className="general_top_block">
      <div className="general_title_block">
        <img src={Finance} alt="finance" />
        <p className="general_title" style={{ marginBottom: 0 }}>
          {t("finance:TOP_TITLE")}
        </p>
      </div>
    </div>
  );
}
export default FinanceTablinks;
