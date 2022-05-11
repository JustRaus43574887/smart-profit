import "../../assets/styles/styles.scoped.css";
import { useTranslation } from "react-i18next";

function CopyrightModal() {
  const { t } = useTranslation();

  return (
    <div
      className="modal fade"
      id="copyright_modal"
      tabIndex={-1}
      aria-labelledby="copyright_modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header" >
            <h5 className="modal-title" id="copyright_modalLabel">
              {t("footer:TOP_DESCRIPTION_RULESANDAGREEMENTS")}
            </h5>
            <button
              style={{ margin: 0 }}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="modal_item">
              <p className="modal_text_title">
                {t("footer:TOP_DESCRIPTION_WEBSITEWORKS")}
              </p>
              <p className="modal_text">
                {t("footer:TOP_DESCRIPTION_AGREEMENT1")}
              </p>
            </div>
            <div className="modal_item">
              <p className="modal_text_title">
                {t("footer:TOP_DESCRIPTION_AVAILABILITY")}
              </p>
              <p className="modal_text">
                {t("footer:TOP_DESCRIPTION_AGREEMENT2")}
              </p>
            </div>
            <div className="modal_item">
              <p className="modal_text_title">
                {t("footer:TOP_DESCRIPTION_CHANGES")}
              </p>
              <p className="modal_text">
                {t("footer:TOP_DESCRIPTION_AGREEMENT3")}
              </p>
            </div>
            <div className="modal_item">
              <p className="modal_text_title">
                {t("footer:TOP_DESCRIPTION_RESPONSIBILITY")}
              </p>
              <p className="modal_text">
                {t("footer:TOP_DESCRIPTION_AGREEMENT4_1")}
                <br />
                <br />
                {t("footer:TOP_DESCRIPTION_AGREEMENT4_2")}
                <br />
                <br />
                {t("footer:TOP_DESCRIPTION_AGREEMENT4_3")}
              </p>
            </div>
            <div className="modal_item">
              <p className="modal_text_title">
                {t("footer:TOP_DESCRIPTION_CONDITIONS")}
              </p>
              <p className="modal_text">
                {t("footer:TOP_DESCRIPTION_CONDITIONS2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CopyrightModal;
