import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";

import "../../assets/styles/login.scoped.css";
import logo from "../../assets/images/logo.svg";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Preloader from "../loaders/Preloader";

function LoginBlock() {
  const { t } = useTranslation();
  const { id } = useParams();

  const { setToken } = useContext(AuthContext);
  const { request, loading, error, clearError } = useFetch();

  const [form, setForm] = useState({ login: "", password: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await request("/user/login", "POST", form);
    if (result) {
      localStorage.setItem("token", result.access_token);
      setToken(result.access_token);
    }
  };

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
  }, [error]);

  return (
    <>
      {loading && <Preloader />}
      <section className="login_block">
        <div className="login_content">
          <div className="login_form_block">
            <form className="login_form" onSubmit={handleLogin}>
              <div className="form_header">
                <p className="form_header_title">{t("login:TOP_TITLE")}</p>
              </div>
              <div className="top_block">
                <img src={logo} className="logo_form" />
              </div>
              <div className="wallet_input_block">
                <p>
                  {t("login:TOP_DESCRIPTION_LOGIN")}
                </p>
                <input
                  name="login"
                  value={form.login}
                  onChange={handleChange}
                  type="text"
                  className="wallet_input"
                  id="wallet_input"
                  placeholder={t("login:TOP_DESCRIPTION_ENTER")}
                />
              </div>
              <div className="password_input_block">
                <p>
                  {t("login:TOP_DESCRIPTION_PASSWORD")}
                </p>
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  className="password_input"
                  id="password_input"
                  placeholder={t("login:TOP_DESCRIPTION_ENTERPASSWORD")}
                />
              </div>
              <div className="form_footer">
                <p>
                  <Link to={`/forgot/${id ? id : ""}`} className="forgot_link">
                    {t("login:TOP_DESCRIPTION_FORGOT")}
                  </Link>
                </p>
                <p className="account_prompt">
                  {t("login:TOP_DESCRIPTION_HAVE")}&nbsp;
                  <Link to={`/join/${id ? id : ""}`} className="create_link">
                    {t("login:TOP_DESCRIPTION_GREATE")}
                  </Link>
                </p>
                <p className="data_block">
                  <button
                    type="submit"
                    className="login_button"
                    disabled={loading}
                  >
                    {t("login:TOP_DESCRIPTION_LOGIN1")}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginBlock;
