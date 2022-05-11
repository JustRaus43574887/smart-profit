import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";

import { useContext, useState, useEffect, useMemo } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";
import { useTranslation } from "react-i18next";

import info_icon from "../../assets/images/info-icon.svg";
import { toast } from "react-toastify";

function PaidPartners({ skip, search, setLength }) {
  const { t } = useTranslation();

  const { token } = useContext(AuthContext);
  const { request, error, clearError } = useFetch();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await request(
        `/get-paid-partners?limit=25&skip=${skip}`,
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(result);
      if (result) {
        setLength(result.data.length);
        if (result.data.length < 25) {
          Array(25 - result.data.length)
            .fill()
            .map((item) => result.data.push(item));
          setData(result.data);
        } else setData(result.data);
      }
    })();
  }, [request, token, skip, setLength]);

  useEffect(() => {
    if (error) {
      toast(error.message, { type: "error" });
      clearError();
    }
    //eslint-disable-next-line
  }, [error]);

  return (
    <>
      <div id="PaidPartner" className="tabcontent">
        <div className="table-responsive" style={{ marginTop: 50 }}>
          <table className="general_table" style={{ marginTop: 0 }}>
            <tbody>
              <tr className="head_table">
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_NAMEANDSURNAME1")}</p>
                </td>
                <td className="main_row">
                  <p>ID</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_SPONSOR1")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_TEAM1")}</p>
                </td>
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_DATEOFPAYMENT")}</p>
                </td>
              </tr>

              {data.map((row, index) => (
                <Table item={row} t={t} key={index} search={search} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Table({ item, t, search }) {
  const renderStatus = useMemo(() => {
    if (item) {
      switch (item.status) {
        case 0:
          return <span className="blue_text">SP:</span>;
        case 1:
          return <span className="green_text">FP:</span>;
        case 2:
          return <span className="yellow_text">MP:</span>;
        case 3:
          return <span className="purple_text">F:</span>;
        default: return <span className="blue_text">SP:</span>;
      }
    } else return <p />;
  }, [item]);

  return (
    <tr
      className="child_one"
      style={{
        backgroundColor:
          item && search === item.id ? "#FFFFFF3F" : "transparent",
      }}
    >
      <td className="child_row">
        <p>{item && item.full_name}</p>
      </td>
      <td className="child_row">
        <div className="child_content">
          {item && (
            <>
              <p>
                {renderStatus} ID {item && item.id}
              </p>
              <div className="popover__wrapper">
                <p className="popover__title">
                  <img src={info_icon} className="info_popover_icon" alt="" />
                </p>
                <div className="popover__content">
                  <div className="user_information">
                    <p className="country_id">
                      {t("myteam:TOP_DESCRIPTION_COUNTRY1")}:{" "}
                      <span className="country_text">
                        {item && item.country}
                      </span>
                    </p>
                    <p className="country_id">
                      {t("myteam:TOP_DESCRIPTION_L/COMAND")}:{" "}
                      <span className="country_text">
                        {item && item.my_team}
                      </span>
                    </p>
                  </div>
                  <div className="social_media_user">
                    <div className="social_item">
                      Skype:
                      <p className="social_text">{item.skype}</p>
                    </div>
                    <div className="social_item">
                      Phone:
                      <p className="social_text">{item.phone}</p>
                    </div>
                    <div className="social_item">
                      Telegram:
                      <p className="social_text">{item.telegram}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </td>
      <td className="child_row">
        <p className="user_id">{item && `ID ${item.sponsor_id}`}</p>
      </td>
      <td className="child_row">
        <p>{item && item.general_team}</p>
      </td>
      <td className="child_row">
        <p>{item && new Date(item.paid_date * 1000).toLocaleDateString()}</p>
      </td>
    </tr>
  );
}

export default PaidPartners;
