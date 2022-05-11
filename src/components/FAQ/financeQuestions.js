import "../../assets/styles/faq.scoped.css";
import { useTranslation } from "react-i18next";

export default function FinanceQuestions() {
  const { t } = useTranslation();

  return (
    <div id="FinanceQuestions" className="tabcontent">
      <div className="accordion" id="accordionExample2">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFifteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFifteen"
              aria-expanded="false"
              aria-controls="collapseFifteen"
            >
              {t("faq:TOP_DESCRIPTION_CHECKMYBALANCE")}
            </button>
          </h2>
          <div
            id="collapseFifteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingFifteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ14")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSixteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSixteen"
              aria-expanded="false"
              aria-controls="collapseSixteen"
            >
              {t("faq:TOP_DESCRIPTION_ISTHEREACOMMISSION")}
            </button>
          </h2>
          <div
            id="collapseSixteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingSixteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ15")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeventeen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeventeen"
              aria-expanded="false"
              aria-controls="collapseSeventeen"
            >
              {t("faq:TOP_DESCRIPTION_UPMYBNBWALLET")}
            </button>
          </h2>
          <div
            id="collapseSeventeen"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeventeen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>
                {t("faq:TOP_DESCRIPTION_FAQ16_TITLE")}
                <br />
                {t("faq:TOP_DESCRIPTION_FAQ16_1")}{" "}
                <a
                  href={t("faq:TOP_DESCRIPTION_FAQ16_1_SITE")}
                  target="_blank"
                  style={{ color: "#54cdef" }}
                >
                  {t("faq:TOP_DESCRIPTION_FAQ16_1_SITE")}
                </a>{" "}
                {t("faq:TOP_DESCRIPTION_FAQ16_1_DESC")}
                <br />
                {t("faq:TOP_DESCRIPTION_FAQ16_2")}
                <br />
                {t("faq:TOP_DESCRIPTION_FAQ16_3")}
                <br />
                {t("faq:TOP_DESCRIPTION_FAQ16_4")}
                <br />
                {t("faq:TOP_DESCRIPTION_FAQ16_5")}
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEighteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEighteen"
              aria-expanded="false"
              aria-controls="collapseEighteen"
            >
              {t("faq:TOP_DESCRIPTION_TRANSACTIONBEREJECTED")}
            </button>
          </h2>
          <div
            id="collapseEighteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingEighteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ17")}</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNineteen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNineteen"
              aria-expanded="false"
              aria-controls="collapseNineteen"
            >
              {t("faq:TOP_DESCRIPTION_ISTILLHAVEQUESTIONS")}
            </button>
          </h2>
          <div
            id="collapseNineteen"
            className="accordion-collapse collapse"
            aria-labelledby="headingNineteen"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body">
              <p>{t("faq:TOP_DESCRIPTION_FAQ18")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
