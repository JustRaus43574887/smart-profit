import React from "react";
import { useTranslation } from "react-i18next";
import Circle from "../../assets/images/circle.svg";

const Preloader = ({ metamaskCheck, setBuyLoading, mobileCheckMetamask }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,.95)",
      }}
    >
      {metamaskCheck
        ? <button
          onClick={() => setBuyLoading(false)}
          style={{
            width: 300,
            height: 50,
            borderRadius: 20,
            border: "none"
          }}
          data-bs-toggle="modal"
          data-bs-target="#computer_modal"
        >
          {t("activation:TOP_TITLE_VIEW_INSTRUCTIONS")}
        </button>
        : mobileCheckMetamask
          ? <button
            onClick={() => setBuyLoading(false)}
            style={{
              width: 300,
              height: 50,
              borderRadius: 20,
              border: "none"
            }}
            data-bs-toggle="modal"
            data-bs-target="#mobile_modal"
          >
            {t("activation:TOP_TITLE_VIEW_INSTRUCTIONS")}
          </button>
          : <img src={Circle} alt="circle" />
      }
    </div>
  );
};

export default Preloader;
