import "../../assets/styles/dashboard.scoped.css";
import purpleLogo from "../../assets/images/logo-purple.svg";
import blueLogo from "../../assets/images/logo-blue.svg";
import greenLogo from "../../assets/images/logo-green.svg";
import yellowLogo from "../../assets/images/logo-yellow.svg";
import Russian from "../../assets/images/russian.svg";
import British from "../../assets/images/british.svg";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import turnOffPurple from "../../assets/images/turn-off-purple.svg";
import turnOffBlue from "../../assets/images/turn-off-blue.svg";
import turnOffGreen from "../../assets/images/turn-off-green.svg";
import turnOffYellow from "../../assets/images/turn-off-yellow.svg";

function Header() {
  const { t, i18n } = useTranslation();

  const { setToken, settings } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    history.push("/");
  };

  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img
                src={
                  settings ? (
                    settings.status === "Free" ? purpleLogo :
                      settings.status === "Start Profit" ? blueLogo :
                        settings.status === "Fixed Profit" ? greenLogo :
                          settings.status === "Maxi Profit" ? yellowLogo :
                            purpleLogo
                  ) : (
                    purpleLogo
                  )
                }
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/")}
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
                    <img src={Russian} height={40} alt="russian" />
                    : <img src={British} height={40} alt="british" />
                  }
                </p>
              </button>
              <ul className={"dropdown-menu lang"} style={{ background: "transparent" }} >
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    {t("header:TOP_TITLE")}
                  </Link>
                  <div className="rect_border" />
                </li>
                <li className="nav-item">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="command-dropdown dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("header:TOP_DESCRIPTION_TEAM")}
                    </button>
                    <ul className="dropdown-menu">
                      <li style={{
                        padding: "14px 15px 10px 15px",
                        borderBottom: "1px solid #fff"
                      }}>
                        <Link
                          className="dropdown-item"
                          to="/my-team"
                        >
                          {t("header:TOP_DESCRIPTION_MYTEAM")}
                        </Link>
                      </li>
                      <li style={{
                        padding: "10px 15px 15px 15px"
                      }}>
                        <Link
                          className="dropdown-item"
                          to="/general-team"
                        >
                          {t("header:TOP_DESCRIPTION_GENERALTEAM")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mobile-group-btn">
                    <li >
                      <Link
                        className="dropdown-item"
                        to="/my-team"
                      >
                        {t("header:TOP_DESCRIPTION_MYTEAM")}
                      </Link>
                    </li>
                    <li >
                      <Link
                        className="dropdown-item"
                        to="/general-team"
                      >
                        {t("header:TOP_DESCRIPTION_GENERALTEAM")}
                      </Link>
                    </li>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/finance" className="nav-link">
                    {t("header:TOP_DESCRIPTION_FINANCE")}
                  </Link>
                  <div className="rect_border" />
                </li>
                <li className="nav-item">
                  <Link to="/FAQ" className="nav-link">
                    {t("header:TOP_DESCRIPTION_FAQ")}
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
                    <ul className={"dropdown-menu lang"} style={{ background: "transparent", marginLeft: "-60px" }}>
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
                  <a
                    onClick={logout}
                    className="nav-link s"
                    style={{ margin: "0px 0px 0px 15px", cursor: "pointer" }}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        settings ? (
                          settings.status === "Free" ? turnOffPurple :
                            settings.status === "Start Profit" ? turnOffBlue :
                              settings.status === "Fixed Profit" ? turnOffGreen :
                                settings.status === "Maxi Profit" ? turnOffYellow :
                                  turnOffPurple
                        ) : (
                          turnOffPurple
                        )
                      }
                    // alt="turn-off"
                    />
                    <span>{t("header:TOP_DESCRIPTION_LOGOUT")}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
