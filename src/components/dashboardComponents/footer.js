import "../../assets/styles/dashboard.scoped.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import AuthContext from "../../context/auth.context";

function Footer() {
  const { t } = useTranslation();
  const { settings } = useContext(AuthContext);

  return (
    <footer>
      <div className="footer_content">
        <p className="copyright_text">
          {t("login:TOP_DESCRIPTION_RESERVED")} |
        </p>
        <a
          style={{
            color: (() => {
              if (settings) {
                switch (settings.status) {
                  case "Free":
                    return "#728ab3";
                  case "Start Profit":
                    return "#54cdef";
                  case "Fixed Profit":
                    return "#5cd58e";
                  case "Maxi Profit":
                    return "#f2ca6b";
                  default:
                    return "#54cdef";
                }
              }
            })(),
          }}
          href="#"
          className="copyright_link"
          data-bs-toggle="modal"
          data-bs-target="#copyright_modal"
        >
          &nbsp;{t("login:TOP_DESCRIPTION_RULES")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
