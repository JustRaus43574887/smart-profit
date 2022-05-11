import "../../assets/styles/styles.scoped.css";
import telegram from "../../assets/images/telegram.svg";
import pdf from "../../assets/images/pdf.svg";
import contract from "../../assets/images/contract.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="social_media">
        <a
          href={
            i18n.language === "ru"
              ? "https://t.me/SMART_PROFIT_RU"
              : "https://t.me/SMART_PROFIT_ENG"
          }
          target="_blank"
          rel="noreferrer"
        >
          <div className="telegram_block">
            <img src={telegram} alt="telegram" />
            <span>Smart-Profit_{i18n.language}</span>
          </div>
        </a>
        <div className="contract_block">
          <img src={contract} alt="contract" />
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://bscscan.com/address/0x4b2442F39666fcb7A44a53f73d14D2cc7B1aB84A",
                "_blank"
              )
            }
          >
            {t("landing:TOP_DESCRIPTION_ADDRESS")}
          </span>
        </div>

        <a href={
          i18n.language === "ru"
            ? "https://drive.google.com/file/d/16uDPhOpKXitQ2I7ikHSnmm9vZBahg7C5/view?usp=sharing"
            : "https://drive.google.com/file/d/1ccDGxu1Rx34og0n2532tvW7UfMM50q8C/view?usp=sharing"
        }
          target="_blank"
          rel="noreferrer"
        >
          <div className="pdf_block">
            <img src={pdf} alt="pdf" />
            <span>{t("landing:TOP_DESCRIPTION_PDF")}</span>
          </div>
        </a>

      </div>
      <hr />
      <div className="copyright_block">
        <p className="copyright_text">
          {t("landing:TOP_DESCRIPTION_RIGHTS")} |
        </p>
        <a
          href="#"
          className="copyright_link"
          data-bs-toggle="modal"
          data-bs-target="#copyright_modal"
        >
          &nbsp;{t("landing:TOP_DESCRIPTION_RULES")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
