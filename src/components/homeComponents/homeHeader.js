import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import Russian from "../../assets/images/russian.svg";
import British from "../../assets/images/british.svg";
import "../../assets/styles/styles.scoped.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function HomeHeader() {
  const { t, i18n } = useTranslation();

  const history = useHistory();
  const { id } = useParams();

  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    if (window.location.href.includes("ru")) {
      setCurrentLang("ru");
    }
    if (window.location.href.includes("en")) {
      setCurrentLang("en");
    }
  }, [window.location.pathname]);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => history.push(`/${id ? id : ""}`)}
          />
        </a>
        <ul className="menu_list">
          <li className="nav-item">
            <Link className="nav-link" to={`/faq/${id ? id : ""}`}>
              FAQ
            </Link>
          </li>
          <li className="nav-item-one">
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
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href={`#${currentLang}`}
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
          <li className="nav-item-two">
            <div className="btn-group">
              <button
                type="button"
                className="lang_button dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <p className="lang_text">{currentLang === "en" ?
                  <img src={British} height={20} alt="british" />
                  : <img src={Russian} height={20} alt="russian" />
                }</p>
              </button>
              <ul className="dropdown-menu">
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
            <Link to={`/login/${id ? id : ""}`}>
              <div className="login_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={18}
                  viewBox="0 0 22 18"
                >
                  <path
                    id="Объединение_15"
                    data-name="Объединение 15"
                    d="M4815.618-5704.39a8.936,8.936,0,0,1-3.159-3.609l1.358-.7a7.153,7.153,0,0,0,6.458,4.132,7.332,7.332,0,0,0,7.208-7.435,7.332,7.332,0,0,0-7.208-7.436,7.153,7.153,0,0,0-6.458,4.132l-1.358-.7a8.936,8.936,0,0,1,3.159-3.609,8.5,8.5,0,0,1,4.658-1.39,8.875,8.875,0,0,1,8.725,9,8.875,8.875,0,0,1-8.725,9A8.5,8.5,0,0,1,4815.618-5704.39Zm3.221-5.034,1.794-1.793H4807v-1.565h13.633l-1.794-1.795,1.107-1.107,3.684,3.684-3.684,3.683Z"
                    transform="translate(-4807 5721)"
                    className="login_icon"
                    fill="#fff"
                  />
                </svg>
                <p className="login_text">
                  {t("landing:TOP_DESCRIPTION_LOGIN")}
                </p>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/join/${id ? id : ""}`}>
              <div className="register_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.999"
                  height={18}
                  viewBox="0 0 17.999 18"
                >
                  <path
                    id="Объединение_16"
                    data-name="Объединение 16"
                    d="M4621-5712a9.01,9.01,0,0,1,9-9,9.01,9.01,0,0,1,9,9,9.01,9.01,0,0,1-9,9A9.01,9.01,0,0,1,4621-5712Zm1.394,0a7.615,7.615,0,0,0,7.605,7.605,7.615,7.615,0,0,0,7.606-7.605,7.616,7.616,0,0,0-7.606-7.606A7.616,7.616,0,0,0,4622.395-5712Zm6.909,3.423v-2.79h-2.789a.7.7,0,0,1-.7-.7.7.7,0,0,1,.7-.7h2.789v-2.788a.7.7,0,0,1,.7-.7.7.7,0,0,1,.7.7v2.788h2.788a.7.7,0,0,1,.7.7.7.7,0,0,1-.7.7H4630.7v2.79a.7.7,0,0,1-.7.7A.7.7,0,0,1,4629.3-5708.576Z"
                    transform="translate(-4621 5721)"
                    fill="#f2ca6b"
                    className="register_icon"
                  />
                </svg>
                <p className="register_text">
                  {t("landing:TOP_DESCRIPTION_JOIN")}
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
