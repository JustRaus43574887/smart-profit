import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
import { useCallback } from "react";
import Timer from "react-compound-timer";

import FREE from "../../../../../assets/images/fr_purple.svg";
import SP from "../../../../../assets/images/sp_blue.svg";
import FP from "../../../../../assets/images/fp_green.svg";
import MP from "../../../../../assets/images/mp_yellow.svg";
import SettingsIconPurple from "../../../../../assets/images/settings-icon-purple.svg";
import SettingsIconBlue from "../../../../../assets/images/settings-icon-blue.svg";
import SettingsIconGreen from "../../../../../assets/images/settings-icon-green.svg";
import SettingsIconYellow from "../../../../../assets/images/settings-icon-yellow.svg";
import CopyIcon from "../../../../../assets/images/copy-icon.svg";
import InfoIcon from "../../../../../assets/images/info-icon.svg";

import Preloader from "../../../../loaders/Preloader";

import "../../../../../assets/styles/dashboard.scoped.css";

const ProfileBlock = ({
    settings,
    copyToClipBoard,
    partnerInput,
    handleChangePartnerInput,
    handleSavePartner,
    t,
    user
}) => {
    const history = useHistory();

    const ETimer = useCallback(() => {
        return (
            <Timer
                initialTime={
                    user && user.end_plan_time
                        ? String(user.end_plan_time * 1000 - Date.now())
                        : "0"
                }
                direction="backward"
            >
                {() => (
                    <>
                        <div
                            style={{
                                color: "white",
                                paddingTop: 20,
                                display: "flex",
                                fontSize: 24,
                            }}
                        >
                            <div
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    fontSize: 24,
                                }}
                            >
                                <Timer.Days />
                                <p style={{ fontSize: 14 }}>
                                    {t("dashboard:TOP_DESCRIPTION_DAYS")}
                                </p>
                            </div>
                            {" : "}
                            <div
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    fontSize: 24,
                                }}
                            >
                                <Timer.Hours />
                                <p style={{ fontSize: 14 }}>
                                    {t("dashboard:TOP_DESCRIPTION_HOURS")}
                                </p>
                            </div>
                            {" : "}
                            <div
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    fontSize: 24,
                                }}
                            >
                                <Timer.Minutes />
                                <p style={{ fontSize: 14 }}>
                                    {t("dashboard:TOP_DESCRIPTION_MINUTES")}
                                </p>
                            </div>
                            {" : "}
                            <div
                                style={{
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    fontSize: 24,
                                }}
                            >
                                <Timer.Seconds />
                                <p style={{ fontSize: 14 }}>
                                    {t("dashboard:TOP_DESCRIPTION_SECONDS")}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </Timer>
        );
    }, [user]);

    return <>
        {!settings && <Preloader />}
        <div
            className={classNames("profile_block", {
                "profile_block_purple": settings && settings.status === "Free",
                "profile_block_blue": settings && settings.status === "Start Profit",
                "profile_block_green": settings && settings.status === "Fixed Profit",
                "profile_block_yellow": settings && settings.status === "Maxi Profit",
            })}
        >
            <p style={{ color: "white", marginBottom: 8 }}>
                LOGIN: {settings && settings.login}
            </p>
            <div className="settings_item">
                <img
                    src={
                        settings ? (
                            settings.status === "Free" ? SettingsIconPurple :
                                settings.status === "Start Profit" ? SettingsIconBlue :
                                    settings.status === "Fixed Profit" ? SettingsIconGreen :
                                        settings.status === "Maxi Profit" ? SettingsIconYellow :
                                            SettingsIconBlue
                        ) : (
                            SettingsIconBlue
                        )
                    }
                    alt=""
                />
                <p
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push("/profile")}
                    className="settings_text"
                >
                    {t("dashboard:TOP_TITLE")}
                </p>
            </div>
            <div className="profile_settings">
                <div className="profile_image_block">
                    <div style={{
                        borderRadius: 75,
                        background: "rgba(255, 255, 255, 0.05)",
                        width: 150,
                        height: 150,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            borderRadius: 75,
                            background: "rgba(168, 168, 168, 0.43)",
                            width: 125,
                            height: 125,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        }}>
                            <img
                                src={settings && settings.photo}
                                alt="avatar"
                                style={{
                                    width: 104,
                                    height: 104,
                                    objectFit: "cover",
                                    borderRadius: 75
                                }}
                            />
                            <img src={
                                settings ? (settings.status === "Free"
                                    ? FREE
                                    : settings.status === "Start Profit"
                                        ? SP
                                        : settings.status === "Fixed Profit"
                                            ? FP
                                            : MP
                                ) : FREE
                            }
                                alt=""
                                style={{ position: "absolute", bottom: 0, right: "-15px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="profile_content_block">
                    <p className="username_text">
                        {(() => {
                            if (user && user.full_name) {
                                if (user.full_name.length > 15)
                                    return user.full_name.substring(0, 15) + "...";
                                else return user.full_name;
                            }
                        })()}
                    </p>
                    {settings && settings.contract_id && (
                        <p className="id_text">ID: {settings.contract_id}</p>
                    )}
                    {settings && settings.contract_id && (
                        <div className="profile_link_block">
                            <span
                                href="#"
                                className="profile_link"
                                onClick={() =>
                                    copyToClipBoard(
                                        `https://smart-profit.info/${settings.contract_id}`
                                    )
                                }
                            >
                                https://smart-profit.info/
                                {settings.contract_id}
                            </span>
                            <img src={CopyIcon} alt="" />
                        </div>
                    )}
                </div>
            </div>
            <Link to="/activation">
                <div
                    className={classNames("activation_block", {
                        "blinking": settings && (!settings.expire ||
                            settings.expire * 1000 - Date.now() <=
                            1000 * 60 * 60 * 24 * 7) && settings.status === "Free",
                        "blinking-blue": settings && (!settings.expire ||
                            settings.expire * 1000 - Date.now() <=
                            1000 * 60 * 60 * 24 * 7) && settings.status === "Start Profit",
                        "blinking-green": settings && (!settings.expire ||
                            settings.expire * 1000 - Date.now() <=
                            1000 * 60 * 60 * 24 * 7) && settings.status === "Fixed Profit",
                        "blinking-yellow": settings && (!settings.expire ||
                            settings.expire * 1000 - Date.now() <=
                            1000 * 60 * 60 * 24 * 7) && settings.status === "Maxi Profit",
                    })}
                    style={{
                        background: (() => {
                            if (settings) {
                                switch (settings.status) {
                                    case "Free":
                                        return "#728ab3";
                                    case "Start Profit":
                                        return "#54cdef";
                                    case "Fixed Profit":
                                        return "#5cd58e";
                                    case "Maxi Profit":
                                        return "#f2ca6b";
                                    default:
                                        return "#54cdef";
                                }
                            }
                        })(),
                    }
                    }
                >
                    <p className="activation_text">
                        {settings &&
                            (settings.status === "Free" ||
                                settings.expire * 1000 - Date.now() <=
                                1000 * 60 * 60 * 24 * 7)
                            ? t("dashboard:TOP_DESCRIPTION_ACTIVATE")
                            : t("dashboard:TOP_DESCRIPTION_ACTIVE")}
                    </p>
                </div>
            </Link>
            <div className="time_block">
                {
                    <div className="eTimer">
                        <ETimer />
                    </div>
                }
            </div>
            <div className="partner_block">
                <button
                    style={{ marginBottom: 0, marginLeft: 5 }}
                    className="info_icon partner_info_mob"
                    type="button"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-trigger="hover"
                    title={t("dashboard:TOP_DESCRIPTION_ENTERID_TITLE")}
                    data-bs-content={t("dashboard:TOP_DESCRIPTION_ENTERID")}
                >
                    <img src={InfoIcon} style={{ width: 15, height: 15 }} alt="" />
                </button>

                <input
                    type="text"
                    className="partner_input"
                    placeholder={t("dashboard:TOP_DESCRIPTION_HELP")}
                    value={partnerInput}
                    onChange={handleChangePartnerInput}
                />

                <button
                    style={{ marginBottom: 30, marginLeft: 5 }}
                    className="info_icon partner_info"
                    type="button"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-trigger="hover"
                    title={t("dashboard:TOP_DESCRIPTION_ENTERID_TITLE")}
                    data-bs-content={t("dashboard:TOP_DESCRIPTION_ENTERID")}
                >
                    <img src={InfoIcon} style={{ width: 15, height: 15 }} alt="" />
                </button>

                <span
                    href="#"
                    style={{ marginLeft: 10 }}
                    onClick={handleSavePartner}
                >
                    <div className="save_button_block">
                        <div className="save_icon" />
                        <p className="save_text">
                            {t("dashboard:TOP_DESCRIPTION_SAVE")}
                        </p>
                    </div>
                </span>
            </div>
            <div className="referal_block">
                <Link
                    to={`sponsor/${settings && settings.ref_id}`}
                    className="referal_text"
                >
                    {t("dashboard:TOP_DESCRIPTION_YOURSPONSOR")}
                </Link>
            </div>
        </div>
    </>
}

export default ProfileBlock;