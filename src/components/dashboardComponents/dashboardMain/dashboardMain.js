import "../../../assets/styles/dashboard.scoped.css";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import AuthContext from "../../../context/auth.context";
import { toast } from "react-toastify";
import { Popover } from "bootstrap/dist/js/bootstrap.esm.min.js";
import { useTranslation } from "react-i18next";

import Preloader from "../../loaders/Preloader";

import useBonus from "../../../hooks/web3/bonus.hook";
import usePrice from "../../../hooks/web3/price.hook";
import useFetch from "../../../hooks/useFetch.hook";
import LeftBlock from "./leftBlock/leftBlock";
import RightBlock from "./rightBlock/rightBlock";

function DashboardMain() {
  const ftch = useFetch();
  const { user, settings, loading, partner, setPartner, token } = useContext(
    AuthContext
  );

  const { t, i18n } = useTranslation();

  const { getMaxiBonus, maxiBonus } = useBonus();
  const { getLatestPrice, latestPrice } = usePrice();

  const [partnerInput, setPartnerInput] = useState("");
  const handleChangePartnerInput = (e) => setPartnerInput(e.target.value);

  const [text, setText] = useState("");

  const handleSavePartner = () => {
    if (partnerInput === settings.contract_id)
      return toast(t("toast:SAME_ID"), { type: "error" });
    const form = new FormData();
    form.append("support", partnerInput);
    fetch("https://api.smart-profit.info/save-supported", {
      method: "POST",
      body: form,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        setPartner(partnerInput);
        toast(t("toast:PARTNER_SAVE"), { type: "success" });
      })
      .catch((e) => {
        toast(e.message, { type: "error" });
      });
  };

  useEffect(() => {
    ftch
      .request(`/lottery-text?lang=${i18n.language}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      })
      .then((res) => {
        setText(res.success[i18n.language]);
      });
    //eslint-disable-next-line
  }, [t]);

  useEffect(() => {
    setPartnerInput(partner === 0 ? "" : partner);
  }, [partner]);

  useEffect(() => {
    getMaxiBonus();
    getLatestPrice();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((tooltipNode) => new Popover(tooltipNode));
  }, [t]);

  const copyToClipBoard = (text) =>
    navigator.clipboard
      .writeText(text)
      .then(() => toast(t("toast:COPY_CLIPBOARD"), { type: "success" }))
      .catch(() => toast("Could not copy text.", { type: "error" }));

  const textRef = useRef();

  useLayoutEffect(() => {
    if (textRef.current) {
      if (textRef.current) {
        const span = textRef.current.querySelectorAll(".yellow");
        for (let i = 0; i < span.length; i++) {
          span[i].style = "color: #f2ca6b";
        }
      }
    }
  });

  return (
    <>
      {(ftch.loading && <Preloader />)}
      <div className="main_block">
        <div className="main_content">

          <LeftBlock
            settings={settings}
            user={user}
            t={t}
            copyToClipBoard={copyToClipBoard}
            partnerInput={partnerInput}
            handleChangePartnerInput={handleChangePartnerInput}
            handleSavePartner={handleSavePartner}
            maxiBonus={maxiBonus}
            latestPrice={latestPrice}
          />

          <RightBlock
            settings={settings}
            t={t}
            user={user}
            text={text}
            textRef={textRef}
          />

        </div>
      </div>
    </>
  );
}
export default DashboardMain;
