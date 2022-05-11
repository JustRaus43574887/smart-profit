import { useTranslation } from "react-i18next";
import "../../assets/styles/activation.scoped.css";

function SystemBlock() {
  const { t } = useTranslation();

  return (
    <div className="system_block">

      <div className="system_content">
        <p className="system_title">
          {t("activation:TOP_DESCRIPTION_INSTRUCTIONS")}
        </p>
        <div className="system_buttons_group">
          <p>
            <button
              className="system_button"
              data-bs-toggle="modal"
              data-bs-target="#computer_modal"
            >
              {t("activation:TOP_DESCRIPTION_COMPUTER")}
            </button>
          </p>
          <p>
            <button
              className="system_button"
              data-bs-toggle="modal"
              data-bs-target="#mobile_modal"
            >
              {t("activation:TOP_DESCRIPTION_MOBILE")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SystemBlock;
