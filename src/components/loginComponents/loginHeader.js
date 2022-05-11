import "../../assets/styles/login.scoped.css";
import logo from "../../assets/images/logo.svg";
import newTurn from "../../assets/images/new-turn.svg";
import Russian from "../../assets/images/russian.svg";
import British from "../../assets/images/british.svg";
import { useHistory, Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function LoginHeader() {
  const { i18n, t } = useTranslation();
  const history = useHistory();
  const { id } = useParams();

  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => history.push(`/${id ? id : ""}`)}
            />
          </a>
          <div className="lang-group-btn">
            <button
              type="button"
              className="lang_button dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p className="lang_text">
                {currentLang === "ru" ?
                  <img src={Russian} height={20} alt="russian" />
                  : <img src={British} height={20} alt="british" />
                }
              </p>
            </button>
            <ul
              className="dropdown-menu"
              style={{ backgroundColor: "transparent" }}
            >
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() =>
                    setCurrentLang(currentLang === "ru" ? "en" : "ru")
                  }
                >
                  {currentLang === "en" ?
                    <img src={Russian} height={20} alt="russian" />
                    : <img src={British} height={20} alt="british" />
                  }
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/FAQ/${id ? id : ""}`} className="nav-link">
                  FAQ
                </Link>
                <div className="rect_border" />
              </li>
              <li className="nav-item">
                <div className="btn-group">
                  <button
                    type="button"
                    className="lang_button dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p className="lang_text">
                      {currentLang === "ru" ?
                        <img src={Russian} height={20} alt="russian" />
                        : <img src={British} height={20} alt="british" />
                      }
                    </p>
                  </button>
                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() =>
                          setCurrentLang(currentLang === "ru" ? "en" : "ru")
                        }
                      >
                        {currentLang === "en" ?
                          <img src={Russian} height={20} alt="russian" />
                          : <img src={British} height={20} alt="british" />
                        }
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  {t("header:TOP_DESCRIPTION_LOGOUT")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default LoginHeader;
