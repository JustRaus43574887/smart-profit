import { useContext, useEffect, useState } from "react";
import "../../assets/styles/activation.scoped.css";
import { useTranslation } from "react-i18next";
import { Popover } from "bootstrap/dist/js/bootstrap.esm.min.js";
import WebIcon from "../../assets/images/web-icon.svg";
import CloseIcon from "../../assets/images/close.svg";
import usePrice from "../../hooks/web3/price.hook";
import Preloader from "../loaders/Preloader";
import AuthContext from "../../context/auth.context";
import { connectWallet, getSupported, handleSendTxHash, sendTx } from "../../utils/contract";
import { toast } from "react-toastify";
import contractAbi from "../../utils/contractAbi";

import useUsers from "../../hooks/web3/users.hook";

function PackageBlock() {
  const { t, i18n } = useTranslation();

  const { settings, token } = useContext(AuthContext);
  const { getUsersInfo } = useUsers();

  const { getLatestPrice, packagePrices } = usePrice();

  const [buyLoading, setBuyLoading] = useState(false);
  const [metamaskCheck, setMetamaskCheck] = useState(false);
  const [mobileCheckMetamask, setMobileCheckMetamask] = useState(false);
  const [openAttantion, setOpenAttantion] = useState(true);
  const [openHashBlock, setOpenHashBlock] = useState(false);
  const [valueHash, setValueHash] = useState("");
  const [openPasswordField, setOpenPasswordField] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  useEffect(() => {
    getLatestPrice();
  }, []);

  useEffect(() => {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((tooltipNode) => new Popover(tooltipNode));
  }, [t, settings]);

  const update = (contract, price) =>
    contract.methods
      ._update(Number(settings.contract_id))
      .send({ value: window.web3.utils.toWei(String(price)) })
      .on("transactionHash", (hash) => {
        sendTx(hash, settings.id, token).then((res) => {
          toast(JSON.stringify(t("toast:SUCCESS")), { type: "info" });
          setBuyLoading(false);
        });
      })
      .on("error", (err) => {
        if (err.message === 'No "from" address specified in neither the given options, nor the default options.') {
          toast(t("activation:TOP_TITLE_ERROR_WALLET_METAMASK"), { type: "error" });
        } else {
          toast(err.message, { type: "error" });
        }
        setBuyLoading(false);
      });

  const buyPlace = (contract, price) =>
    contract.methods
      ._buyPlace(Number(settings.transfer_id))
      .send({ value: window.web3.utils.toWei(String(price)) })
      .on("transactionHash", (hash) => {
        sendTx(hash, settings.id, token).then((res) => {
          toast(JSON.stringify(t("toast:SUCCESS")), { type: "info" });
          setBuyLoading(false);
        });
      })
      .on("error", (err) => {
        setBuyLoading(false);
        toast(err.message, { type: "error" });
      });

  const support = (contract, price, partner) =>
    contract.methods
      ._support(Number(settings.ref_id || 0), Number(partner))
      .send({ value: window.web3.utils.toWei(String(price)) })
      .on("transactionHash", (hash) => {
        sendTx(hash, settings.id, token).then((res) => {
          toast(JSON.stringify(t("toast:SUCCESS")), { type: "info" });
          setBuyLoading(false);
        });
      })
      .on("error", (err) => {
        setBuyLoading(false);
        toast(err.message, { type: "error" });
      });

  const register = (contract, price) =>
    contract.methods
      ._register(Number(settings.ref_id || 0))
      .send({ value: window.web3.utils.toWei(String(price)) })
      .on("transactionHash", (hash) => {
        sendTx(hash, settings.id, token).then((res) => {
          toast(JSON.stringify(t("toast:SUCCESS")), { type: "info" });
          setBuyLoading(false);
        });
      })
      .on("error", (err) => {
        setBuyLoading(false);
        toast(err.message, { type: "error" });
      });

  const buyPackage = async (packagePrice) => {
    try {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        if (window.web3) {
          const account = await connectWallet(settings.wallet);
          const contract = new window.web3.eth.Contract(
            contractAbi.abi,
            contractAbi.address,
            { from: account }
          );
          if (settings.expire) return update(contract, packagePrice);
          if (settings.transfer_id) {
            const { isForSale } = await getUsersInfo(settings.transfer_id);
            if (isForSale) buyPlace(contract, packagePrice);
            else
              toast(t("toast:FOR_SALE"), {
                type: "info",
              });
          } else {
            const res = await getSupported(settings.ref_id, token);
            if (res) {
              if (res.data && res.data !== 0)
                support(contract, packagePrice, res.data);
              else register(contract, packagePrice);
            }
          }
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
        if (settings.expire) return update(contract, packagePrice);
        if (settings.transfer_id) {
          const { isForSale } = await getUsersInfo(settings.transfer_id);
          if (isForSale) buyPlace(contract, packagePrice);
          else
            toast(t("toast:FOR_SALE"), {
              type: "info",
            });
        } else {
          const res = await getSupported(settings.ref_id, token);
          if (res) {
            if (res.data && res.data !== 0)
              support(contract, packagePrice, res.data);
            else register(contract, packagePrice);
          }
        }
      } else if (window.BinanceChain) {
        const account = await connectWallet(settings.wallet);
        const contract = new window.web3.eth.Contract(
          contractAbi.abi,
          contractAbi.address,
          { from: account }
        );
        if (settings.expire) return update(contract, packagePrice);
        if (settings.transfer_id) {
          const { isForSale } = await getUsersInfo(settings.transfer_id);
          if (isForSale) buyPlace(contract, packagePrice);
          else
            toast(t("toast:FOR_SALE"), {
              type: "info",
            });
        } else {
          const res = await getSupported(settings.ref_id, token);
          if (res) {
            if (res.data && res.data !== 0)
              support(contract, packagePrice, res.data);
            else register(contract, packagePrice);
          }
        }
      } else {
        setBuyLoading(true);
        setMetamaskCheck(true);
        toast(t("activation:TOP_TITLE_ERROR_METAMASK"), {
          autoClose: 3000,
          onClose: () => setBuyLoading(false),
          position: "top-center",
          type: "error",
        });
      }
    } catch (e) {
      if (e.message === "Cannot read properties of undefined (reading 'Contract')" || "undefined is not an object (evaluating 'new window.web3.eth.Contract')") {
        toast(t("activation:TOP_TITLE_ERROR_WALLET_METAMASK"), { type: "error" });
      } else {
        toast(e.message, { type: "error" });
      }
      setBuyLoading(false);
    }
  };

  const setDisabled = (packNumber) => {
    if (settings) {
      if (
        settings.status === "Free" ||
        !settings.expire ||
        settings.expire * 1000 - Date.now() <= 1000 * 60 * 60 * 24 * 7
      )
        return false;

      if (settings.status === "Start Profit") {
        if (packNumber === 0) return true;
        else return false;
      }

      if (settings.status === "Fixed Profit") {
        if (packNumber === 0 || packNumber === 1) return true;
        else return false;
      }

      if (settings.status === "Maxi Profit") {
        if (packNumber === 0 || packNumber === 1 || packNumber === 2)
          return true;
        else return false;
      }
    } else return true;
  };

  const handleClickTopIcon = () => {
    setOpenPasswordField(true);
    setOpenAttantion(false);
  };

  const handleCheckPassword = () => {
    if (passwordValue === "ytrewq321") {
      setOpenHashBlock(true);
      setOpenPasswordField(false);
      setOpenAttantion(false);
    } else {
      setOpenPasswordField(false);
      setPasswordValue("");
      toast("Password incorrect", { type: "error" });
    }
  };

  const sendTransactionHashByInput = () => {
    handleSendTxHash(valueHash, settings.id, token)
      .then((res) => {
        toast(JSON.stringify(t("toast:SUCCESS")), { type: "info" });
        setTimeout(() => setOpenHashBlock(false), 2000);
      })
      .catch(e => {
        toast(e, { type: "error" });
      })
  };

  return (
    <>
      {(buyLoading) && <Preloader
        metamaskCheck={metamaskCheck}
        setBuyLoading={setBuyLoading}
        mobileCheckMetamask={mobileCheckMetamask}
      />}
      {openAttantion && <div className="attantion_block">
        <div style={{
          height: 90,
          background: " rgba(68, 133, 230, 0.6)",
          backdropFilter: "blur(10px)",
          paddingTop: 29,
          fontWeight: 600,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        }}>
          {t("activation:TOP_TITLE_ATTANTION")}
        </div>
        <div style={{
          background: "rgba(23, 23, 23, 0.7)",
          backdropFilter: "blur(100px)",
          padding: "50px 35px 0px 35px",
          height: 340,
          position: "relative",
          borderBottomRightRadius: 16,
          borderBottomLeftRadius: 16,
        }}
          className="attantion_block-text"
        >
          {t("activation:TOP_TITLE_ATTANTION_TEXT")}
          <button style={{
            position: "absolute",
            bottom: 0,
            color: "#fff",
            border: 0,
            background: " linear-gradient(152.97deg, rgba(68, 133, 230, 0.6) 0%, rgba(24, 41, 101, 0.6) 100%)",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -30%)",
            height: 50,
            width: 150,
            borderRadius: 16,
          }}
            onClick={() => setOpenAttantion(false)}
          >
            {t("activation:TOP_TITLE_ATTANTION_BTN")}
          </button>
        </div>
      </div>}
      {openHashBlock && <div className="hash_block">
        <div style={{
          height: 90,
          background: " rgba(68, 133, 230, 0.6)",
          backdropFilter: "blur(10px)",
          paddingTop: 29,
          fontWeight: 600,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          position: "relative"
        }}
          className="hash_block-title"
        >
          {t("activation:TOP_TITLE_HASH")}
          <div style={{
            position: "absolute",
            top: 10,
            right: 20,
            cursor: "pointer"
          }}
            onClick={() => setOpenHashBlock(false)}>
            <img src={CloseIcon} alt="close" />
          </div>
        </div>
        <div style={{
          background: "rgba(23, 23, 23, 0.7)",
          backdropFilter: "blur(100px)",
          padding: "25px 35px 0px 35px",
          height: 150,
          position: "relative",
          borderBottomRightRadius: 16,
          borderBottomLeftRadius: 16,
        }}>
          <input
            value={valueHash}
            onChange={(e) => setValueHash(e.target.value)}
            placeholder={t("activation:TOP_TITLE_HASH_PLACEHOLDER")}
            style={{
              width: "100%",
              borderRadius: 6,
              background: "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 23%, rgba(255, 255, 255, 0) 100%)",
              border: 0,
              outline: 0,
              padding: "5px 10px 6px",
              color: "#fff",
              fontSize: 15
            }} />
          <button style={{
            position: "absolute",
            bottom: 0,
            color: "#fff",
            border: 0,
            background: " linear-gradient(152.97deg, rgba(68, 133, 230, 0.6) 0%, rgba(24, 41, 101, 0.6) 100%)",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -30%)",
            height: 50,
            width: 150,
            borderRadius: 16,
          }}
            onClick={sendTransactionHashByInput}
          >
            {t("activation:TOP_TITLE_HASH_BTN")}
          </button>
        </div>
      </div>}
      <div className="package_block">
        <div className="package_top_block">
          <img src={WebIcon} alt="web-icon"
            style={{ cursor: "pointer" }}
            onClick={handleClickTopIcon}
          />
          <p className="package_title" style={{ marginBottom: 0 }}>
            {t("activation:TOP_TITLE")}
          </p>
          {openPasswordField && (
            <div style={{
              position: "absolute",
              top: 40
            }}>
              <input
                type="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="password"
                style={{
                  border: 0,
                  outline: 0,
                  height: 30
                }}
              />
              <button onClick={handleCheckPassword}
                style={{
                  border: 0,
                  outline: 0,
                  background: "#eee",
                  height: 30
                }}
              >
                ok
              </button>
            </div>
          )}
        </div>
        <div className="packages_block">
          <div className="package_item">
            <div className="package_content">
              <p className="package_blue_title">
                <span>Start</span> Profit
              </p>
              <div className="rectangle_blue" />
              <p className="package_blue_text">
                {t("activation:TOP_DESCRIPTION_LEVELS3_1")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS3_2")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS3_3")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS3_4")}</span>
                {t("activation:TOP_DESCRIPTION_LEVELS3_5")}
              </p>
            </div>
            <div className="package_item_button">
              <button
                data-bs-container="body"
                data-bs-toggle={settings && setDisabled(0) && "popover"}
                data-bs-placement="top"
                data-bs-trigger="hover"
                data-bs-content={t("dashboard:TOP_DESCRIPTION_DISABLED_UPDATE")}
                onClick={() => {
                  if (setDisabled(0)) {
                    return;
                  } else {
                    packagePrices[0] && buyPackage(packagePrices[0])
                  }
                }
                }
              >
                {packagePrices[0] && packagePrices[0].toFixed(4)} BNB
              </button>
            </div>
            <div className="package_price">
              <p
                style={{
                  color: "#54cdef",
                }}
              >
                30$
              </p>
            </div>
          </div>

          <div className="package_item">
            <div className="package_content">
              <p className="package_green_title">
                <span>Fixed</span> Profit
              </p>
              <div className="rectangle_green" />
              <p className="package_green_text">
                {t("activation:TOP_DESCRIPTION_LEVELS5_1")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS5_2")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS5_3")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS5_4")}</span>
                {t("activation:TOP_DESCRIPTION_LEVELS5_5")}
              </p>
            </div>
            <div className="package_green_button">
              <button
                data-bs-container="body"
                data-bs-toggle={settings && setDisabled(1) && "popover"}
                data-bs-placement="top"
                data-bs-trigger="hover"
                data-bs-content={t("dashboard:TOP_DESCRIPTION_DISABLED_UPDATE")}
                onClick={() => {
                  if (setDisabled(1)) {
                    return;
                  } else {
                    packagePrices[1] && buyPackage(packagePrices[1])
                  }
                }
                }
              >
                {packagePrices[1] && packagePrices[1].toFixed(4)} BNB
              </button>
            </div>
            <div className="angle_bottom_green" />
            <div className="package_price">
              <p
                style={{
                  color: "#5cd58e",
                }}
              >
                90$
              </p>
            </div>
          </div>

          <div className="package_item">
            <div className="package_content">
              <p className="package_yellow_title">
                <span>Maxi</span> Profit
              </p>
              <div className="rectangle_yellow" />
              <p className="package_yellow_text" style={i18n.language === "en" ? { marginBottom: 65 } : { marginBottom: 100 }}>
                {t("activation:TOP_DESCRIPTION_LEVELS7_1")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS7_2")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS7_3")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS7_4")}</span>
                {t("activation:TOP_DESCRIPTION_LEVELS7_5")}{" "}
                <span>{t("activation:TOP_DESCRIPTION_LEVELS7_6")}</span>{" "}
                {t("activation:TOP_DESCRIPTION_LEVELS7_7")}
              </p>
            </div>
            <div className="package_yellow_button">
              <button
                data-bs-container="body"
                data-bs-toggle={settings && setDisabled(2) && "popover"}
                data-bs-placement="top"
                data-bs-trigger="hover"
                data-bs-content={t("dashboard:TOP_DESCRIPTION_DISABLED_UPDATE")}
                onClick={() => {
                  if (setDisabled(2)) {
                    return;
                  } else {
                    packagePrices[2] && buyPackage(packagePrices[2])
                  }
                }
                }
              >
                {packagePrices[2] && packagePrices[2].toFixed(4)} BNB
              </button>
            </div>
            <div className="angle_bottom_yellow" />
            <div className="package_price">
              <p
                style={{
                  color: "#f2ca6b",
                }}
              >
                180$
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageBlock;
