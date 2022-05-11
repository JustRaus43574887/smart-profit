import BonusIcon from "../../../../../assets/images/bonus-icon.png";

import InfoIcon from "../../../../../assets/images/info-icon.svg";
import BonusBackground from "../../../../../assets/images/bonus-background.png";

import "../../../../../assets/styles/dashboard.scoped.css";

const BonusBlock = ({
    settings,
    maxiBonus,
    t,
    latestPrice
}) => {
    return <div className="bonus_block" >
        <img src={BonusBackground} alt="" style={{ position: "absolute", zIndex: "-1", height: "100%", width: "100%" }} />
        <div className="bonus_content">
            <button
                className="info_icon"
                type="button"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                title="Maxi Bonus"
                data-bs-content={t("dashboard:TOP_DESCRIPTION_POPUPWINDOW")}
            >
                <img src={InfoIcon} alt="" />
            </button>
            <div className="item_block">
                <div className="item_icon">
                    <img
                        src={BonusIcon}
                        alt=""
                        width="68"
                        className="item_icon-block"
                    />
                </div>
                <div className="item_content">
                    <p
                        className="item_title"
                        style={{
                            color: (() => {
                                if (settings) {
                                    switch (settings.status) {
                                        case "Free":
                                            return "#9375E7";
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
                        }}
                    >
                        {t("dashboard:TOP_DESCRIPTION_MAXIBONUS")}
                    </p>
                    <p className="item_description">
                        BNB: {(maxiBonus / Math.pow(10, 18)).toFixed(4)} | USD:{" "}
                        {((maxiBonus / Math.pow(10, 18)) * latestPrice).toFixed(
                            2
                        )}
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default BonusBlock;