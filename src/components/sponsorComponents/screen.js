import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/sponsor.scoped.css";

import Solution from "../../assets/images/solution.svg";
import frPurple from "../../assets/images/fr_purple.svg";
import spBlue from "../../assets/images/sp_blue.svg";
import fpGreen from "../../assets/images/fp_green.svg";
import mpYellow from "../../assets/images/mp_yellow.svg";

import useFetch from "../../hooks/useFetch.hook";
import { toast } from "react-toastify";
import AuthContext from "../../context/auth.context";

export default function Screen() {
  const { t } = useTranslation();
  const { request, error, clearError } = useFetch();
  const { token } = useContext(AuthContext);

  const [sponsor, setSponsor] = useState({});
  const [sponsorFirstLine, setSponsorFirstLine] = useState({});

  useEffect(() => {
    if (token)
      request("/get-sponsor", "GET", null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (res) setSponsor(res.data);
      });
    //eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (token)
      request("/get-upline", "GET", null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        if (res) {
          setSponsorFirstLine(res.data);
        }
      });
    //eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
    //eslint-disable-next-line
  }, [error]);

  return (
    <>
      <div className="screen">
        <div className="content">
          <div className="top_block">
            <img src={Solution} alt="solution" />
            <p className="title" style={{ marginBottom: 0 }}>
              {t("sponsor:TOP_TITLE")}
            </p>
          </div>
          <div className="block">
            <div style={{
              position: "relative", width: 300, height: 300, borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              margin: "0 auto",
              padding: 25
            }}>
              <div style={{
                position: "relative", width: 250, height: 250, borderRadius: "50%",
                backgroundColor: "rgba(168, 168, 168, 0.43)",
                margin: "0 auto",
                paddingTop: 25
              }}>
                <div className="img_block">
                  {
                    //eslint-disable-next-line
                    <img src={sponsor.photo} className="img" alt="photo-user" />

                  }
                  <img src={
                    (() => {
                      if (sponsor) {
                        switch (sponsor.status) {
                          case "Free":
                            return frPurple;
                          case "Start Profit":
                            return spBlue;
                          case "Fixed Profit":
                            return fpGreen;
                          case "Maxi Profit":
                            return mpYellow;
                          default:
                            return spBlue;
                        }
                      }
                    })()}
                    style={{
                      position: "absolute",
                      width: "100px",
                      right: "-5%",
                      bottom: "-25px"
                    }}
                    className="status__image"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="information">
              <p className="username">{sponsor.full_name}</p>
              <div className="contacts">
                <div>
                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_SKYPE1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="contact_input"
                        value={sponsor.skype}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_TELEGRAM1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="  contact_input"
                        value={sponsor.telegram}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_EMAIL1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="  contact_input"
                        value={sponsor.email}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_PHONE1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="  contact_input"
                        value={sponsor.phone}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top_block">
            <img src={Solution} alt="solution" style={{ marginTop: 45 }} />
            <p className="title" style={{ marginBottom: 0, marginTop: 45 }}>
              {t("sponsor:TOP_TITLE_LINE")}
            </p>
          </div>
          <div className="block">
            <div style={{
              position: "relative", width: 300, height: 300, borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              margin: "0 auto",
              padding: 25
            }}>
              <div style={{
                position: "relative", width: 250, height: 250, borderRadius: "50%",
                backgroundColor: "rgba(168, 168, 168, 0.43)",
                margin: "0 auto",
                paddingTop: 25
              }}>
                <div className="img_block">
                  <img src={sponsorFirstLine.photo} className="img" alt="sponsor-first" />
                  <img src={
                    (() => {
                      if (sponsorFirstLine) {
                        switch (sponsorFirstLine.status) {
                          case "Free":
                            return frPurple;
                          case "Start Profit":
                            return spBlue;
                          case "Fixed Profit":
                            return fpGreen;
                          case "Maxi Profit":
                            return mpYellow;
                          default:
                            return spBlue;
                        }
                      }
                    })()}
                    style={{
                      position: "absolute",
                      width: "100px",
                      right: "-5%",
                      bottom: "-25px"
                    }}
                    className="status__image"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="information">
              <p className="username">{sponsorFirstLine.full_name}</p>
              <div className="contacts">
                <div>
                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_SKYPE1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="contact_input"
                        value={sponsorFirstLine.skype}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_TELEGRAM1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="  contact_input"
                        value={sponsorFirstLine.telegram}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_EMAIL1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="  contact_input"
                        value={sponsorFirstLine.email}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="contact_item">
                    <p className="contact_item_text">
                      {t("sponsor:TOP_DESCRIPTION_PHONE1")}
                    </p>
                    <div className="contact_input_block">
                      <input
                        type="text"
                        className="  contact_input"
                        value={sponsorFirstLine.phone}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
