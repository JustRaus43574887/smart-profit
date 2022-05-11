import { useTranslation } from "react-i18next";
import "../../assets/styles/dashboard.scoped.css";

function Modals() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="modal fade"
        id="computer_modal"
        tabIndex={-1}
        aria-labelledby="computer_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="computer_modalLabel">
                {t("activation:TOP_DESCRIPTION_COMPUTER")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body instruction-desktop">
              <div className="instruction-desktop__block">
                <p>
                  1) {t("activation:TOP_DESCRIPTION_DOWNLOAD_DESK")} <a href="https://metamask.io/download">{t("activation:TOP_DESCRIPTION_DOWNLOAD")}</a>
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/I88FKqH-jXM"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="instruction-desktop__block">
                <p>
                  2) {t("activation:TOP_DESCRIPTION_BINANCE_ADD")}
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/e3CVaNIzdhY"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="instruction-desktop__block">
                <p>
                  3) {t("activation:TOP_DESCRIPTION_TOP_UP_BALANCE")} <a href="https://www.bestchange.ru/">{t("activation:TOP_DESCRIPTION_CHANGE")}</a>
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/28kfdgzPOfs"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="instruction-desktop__block">
                <p>
                  4)  {t("activation:TOP_DESCRIPTION_ACTIVATE_PACK")}
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/Z0nVOzGrll8"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="mobile_modal"
        tabIndex={-1}
        aria-labelledby="mobile_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="mobile_modalLabel">
                {t("activation:TOP_DESCRIPTION_MOBILE")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body instruction-desktop">
              <div className="instruction-desktop__block">
                <p>
                  1)  {t("activation:TOP_DESCRIPTION_DOWNLOAD_MOBILE")} <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp">{t("activation:TOP_DESCRIPTION_DOWNLOAD")}</a>
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/hELcW82QyEA"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="instruction-desktop__block">
                <p>
                  2)  {t("activation:TOP_DESCRIPTION_INSTALL_METAMASK")}  <a href="https://play.google.com/store/apps/details?id=io.metamask">Установить</a>
                  &nbsp;для <a href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202">IOS</a>
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/XFjjzaz-ZiU"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="instruction-desktop__block">
                <p>
                  3)  {t("activation:TOP_DESCRIPTION_TOP_UP_BALANCE_TRUST_WALLET")}<a href="https://www.bestchange.ru/"> {t("activation:TOP_DESCRIPTION_CHANGE")}</a>
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/28kfdgzPOfs"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="instruction-desktop__block">
                <p>
                  4) {t("activation:TOP_DESCRIPTION_ACTIVATE_TRUST_WALLET")}
                </p>
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/f9N5mn76xj0"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="partner_modal"
        tabIndex={-1}
        aria-labelledby="partner_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="partner_modalLabel">
                {t("activation:TOP_DESCRIPTION_PARTNER")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body instruction-desktop">
              <div className="instruction-desktop__block">
                <iframe
                  style={{ width: "100%", height: 590, marginTop: 10, marginBottom: 10 }}
                  src={
                    "https://www.youtube.com/embed/zu2390IKtU8"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="hand_modal"
        tabIndex={-1}
        aria-labelledby="hand_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal_header">
              <h5 className="modal-title" id="hand_modalLabel">
                {t("activation:TOP_DESCRIPTION_CONTRACT")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
              <img src="assets/images/main.jpg" className="modal_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;
