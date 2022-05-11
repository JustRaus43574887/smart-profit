import "../../assets/styles/faq.scoped.css";
import { useTranslation } from "react-i18next";

export default function ForPartners() {
  const { t } = useTranslation();

  return (
    <div id="ForPartners" className="tabcontent">
      <div className="accordion" id="accordionExample1">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              {t("faq:TOP_DESCRIPTION_WHATARETHEADVANTAGES")}
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample1"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ8")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              {t("faq:TOP_DESCRIPTION_WHERECANIFINDAN")}
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample1"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ9")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              {t("faq:TOP_DESCRIPTION_WHYDOINEED")}
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample1"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ10")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingЕleven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseЕleven"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {t("faq:TOP_DESCRIPTION_HOWTOTRACKTHE")}
            </button>
          </h2>
          <div
            id="collapseЕleven"
            className="accordion-collapse collapse"
            aria-labelledby="headingЕleven"
            data-bs-parent="#accordionExample1"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ11")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwelve">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              {t("faq:TOP_DESCRIPTION_SPOTOVERFLOW")}
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwelve"
            data-bs-parent="#accordionExample1"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ12")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFourteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFourteen"
              aria-expanded="false"
              aria-controls="collapseFourteen"
            >
              <p>{t("faq:TOP_DESCRIPTION_LOCATIONTRANSFER")}</p>
            </button>
          </h2>
          <div
            id="collapseFourteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingFourteen"
            data-bs-parent="#accordionExample1"
          >
            <div className="accordion-body">
              <p>
                <p>{t("faq:TOP_DESCRIPTION_FAQ13")}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
