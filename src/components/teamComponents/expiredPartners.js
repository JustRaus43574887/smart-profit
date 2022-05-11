import "../../assets/styles/general.scoped.css";
import "../../assets/styles/my-team.scoped.css";
import { useTranslation } from "react-i18next";

import { useContext, useState, useEffect, useMemo } from "react";
import useFetch from "../../hooks/useFetch.hook";
import AuthContext from "../../context/auth.context";

import info_icon from "../../assets/images/info-icon.svg";
import Copy from "../../assets/images/green-copy.svg";
import Instructions from "../../assets/images/instructions.png";
import Preloader from "../loaders/Preloader";
import { toast } from "react-toastify";
import useUsers from "../../hooks/web3/users.hook";
import { connectWallet } from "../../utils/contract";
import contractAbi from "../../utils/contractAbi";

function ExpiredPartners({ skip, search, setLength }) {
  const { t } = useTranslation();
  const users = useUsers();

  const { token } = useContext(AuthContext);
  const { request, error, clearError } = useFetch();

  const [data, setData] = useState([]);
  const [buyLoading, setBuyLoading] = useState(false);
  const [metamaskCheck, setMetamaskCheck] = useState(false);
  const [mobileCheckMetamask, setMobileCheckMetamask] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await request(
        `/get-out-of-date-partners?limit=25&skip=${skip}`,
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
      {(buyLoading) && <Preloader
        metamaskCheck={metamaskCheck}
        setBuyLoading={setBuyLoading}
        mobileCheckMetamask={mobileCheckMetamask} />}
      <div id="ExpirePartner" className="tabcontent">
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
                <td className="main_row">
                  <p>{t("myteam:TOP_DESCRIPTION_TRANSFERPLACE")}</p>
                </td>
              </tr>
              {data.map((row, index) => (
                <Table
                  item={row}
                  key={index}
                  t={t}
                  search={search}
                  getUsersInfo={users.getUsersInfo}
                  setBuyLoading={setBuyLoading}
                  setMetamaskCheck={setMetamaskCheck}
                  setMobileCheckMetamask={setMobileCheckMetamask}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Table({
  item,
  t,
  search,
  getUsersInfo,
  setBuyLoading,
  setMetamaskCheck,
  setMobileCheckMetamask
}) {
  const { settings } = useContext(AuthContext);

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
        default:
          return <span className="blue_text">SP:</span>;
      }
    } else return <p />;
  }, [item]);

  const approveSale = async (id, link) => {
    try {
      if (settings) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
          if (window.web3) {
            const account = await connectWallet(settings.wallet);
            const contract = new window.web3.eth.Contract(
              contractAbi.abi,
              contractAbi.address,
              { from: account }
            );
            contract.methods
              .approveSale(Number(id))
              .send()
              .on("receipt", () => {
                navigator.clipboard
                  .writeText(link)
                  .then(() =>
                    toast(t("toast:COPY_CLIPBOARD"), { type: "success" })
                  )
                  .catch(console.error);
                setBuyLoading(false);
              })
              .on("error", (err) => {
                toast(err.message, { type: "error" });
                setBuyLoading(false);
              });
          } else {
            setBuyLoading(true);
            setMobileCheckMetamask(true);
            toast(t("activation:TOP_TITLE_ERROR_ACTIVATION"), {
              autoClose: 3000,
              onClose: () => setBuyLoading(false),
              position: "top-center",
              type: "error",
            });
          }
        } else if (window.web3) {
          const account = await connectWallet(settings.wallet);
          const contract = new window.web3.eth.Contract(
            contractAbi.abi,
            contractAbi.address,
            { from: account }
          );
          contract.methods
            .approveSale(Number(id))
            .send()
            .on("receipt", () => {
              navigator.clipboard
                .writeText(link)
                .then(() =>
                  toast(t("toast:COPY_CLIPBOARD"), { type: "success" })
                )
                .catch(console.error);
              setBuyLoading(false);
            })
            .on("error", (err) => {
              toast(err.message, { type: "error" });
              setBuyLoading(false);
            });
        } else if (window.BinanceChain) {
          const account = await connectWallet(settings.wallet);
          const contract = new window.web3.eth.Contract(
            contractAbi.abi,
            contractAbi.address,
            { from: account }
          );
          contract.methods
            .approveSale(Number(id))
            .send()
            .on("receipt", () => {
              navigator.clipboard
                .writeText(link)
                .then(() =>
                  toast(t("toast:COPY_CLIPBOARD"), { type: "success" })
                )
                .catch(console.error);
              setBuyLoading(false);
            })
            .on("error", (err) => {
              toast(err.message, { type: "error" });
              setBuyLoading(false);
            });
        } else {
          setBuyLoading(true);
          setMetamaskCheck(true);
          toast(t("activation:TOP_TITLE_ERROR_NO_METAMASK"), {
            autoClose: 3000,
            position: "top-center",
            onClose: () => setBuyLoading(false),
            type: "error",
          });
        }
      }
    } catch (e) {
      if (e.message === "Cannot read properties of undefined (reading 'Contract')" || "undefined is not an object (evaluating 'new window.web3.eth.Contract')") {
        toast(t("activation:TOP_TITLE_ERROR_WALLET_METAMASK"), { type: "error" });
      } else {
        toast(e.message, { type: "error" });
      }
      setBuyLoading(false);
    }
  }

  return (
    <>
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
        <td className="child_row">
          {item && Date.now() - item.paid_date * 1000 > 7 * 24 * 60 * 60 && (
            <>
              <input
                type="text"
                defaultValue={t("myteam:TOP_DESCRIPTION_REPLACE")}
                id="copygreenInput"
                className="copy_input"
                readOnly
                style={{ cursor: "pointer" }}
                onClick={() =>
                  getUsersInfo(item.id).then((res) => {
                    if (res) {
                      if (res.isForSale) {
                        navigator.clipboard
                          .writeText(
                            `https://smart-profit.info/${item.sponsor_id}|${item.id
                            }`
                          )
                          .then(() => {
                            toast(t("toast:COPY_CLIPBOARD"), {
                              type: "success",
                            })
                          }
                          );
                      } else toast(t("toast:FOR_SALE"), { type: "info" });
                    }
                  })
                }
              />
              <button
                onClick={() =>
                  approveSale(
                    item.id,
                    `https://smart-profit.info/${item.sponsor_id}|${item.id}`
                  )
                }
                className="copy_green"
              >
                {item && Date.now() - item.paid_date * 1000 > 7 * 24 * 60 * 60 ? < img src={Copy} alt="copy" /> : ""}
              </button>
              <button
                style={{
                  background: "none",
                  border: "none"
                }}
                data-bs-toggle="modal"
                data-bs-target="#partner_modal"
              >
                <img src={Instructions}
                  alt="instructions"
                  className="instructions"

                />
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
}

export default ExpiredPartners;
