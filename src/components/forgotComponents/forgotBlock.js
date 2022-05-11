import "../../assets/styles/forgot.scoped.css";
import logo from "../../assets/images/logo.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.hook";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Forgot() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const { request, loading, error, clearError } = useFetch();

  const [login, setLogin] = useState("");
  const handleChange = (e) => setLogin(e.target.value);

  const handleSend = async (e) => {
    e.preventDefault();
    const result = await request("/forgot-password", "POST", {
      login,
      lang: i18n.language,
    });
    if (result) toast(t("forgot:TOP_DESCRIPTION_SUCCESS"), { type: "success" });
  };

  useEffect(() => {
    if (error) {
      if (error.message === "User doesn't exist") {
        toast(t("forgot:TOP_DESCRIPTION_NOT_FOUND"), { type: "error" });
      } else {
        toast(error.message, { type: "error" });
      }
      clearError();
    }
  }, [error]);

  return (
    <>
      <section className="forgot_block">
        <div className="forgot_content">
          <div className="forgot_form_block">
            <form className="forgot_form" onSubmit={handleSend}>
              <div className="form_header">
                <p className="form_header_title">{t("forgot:TOP_TITLE")}</p>
              </div>
              <div className="top_block">
                <img src={logo} className="logo_form" />
              </div>
              <div className="email_input_block">
                <p>
                  {t("forgot:TOP_DESCRIPTION_EMAIL")}
                </p>
                <input
                  value={login}
                  onChange={handleChange}
                  type="text"
                  className="email_input"
                  id="email_input"
                  placeholder={t("forgot:TOP_DESCRIPTION_DATA")}
                  required
                />
              </div>
              <div className="forgot_footer">
                <p className="forgot_footer_title">
                  {t("forgot:TOP_DESCRIPTION_ACCOUNT")}&nbsp;
                  <Link
                    to={`/login/${id ? id : ""}`}
                    className="forgot_footer_link"
                  >
                    {t("forgot:TOP_DESCRIPTION_SIGNIN")}
                  </Link>
                </p>
              </div>
              <div className="form_footer">
                <p className="data_block">
                  <button
                    disabled={loading}
                    type="submit"
                    className="forgot_button"
                  >
                    {t("forgot:TOP_DESCRIPTION_SEND")}
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

export default Forgot;
