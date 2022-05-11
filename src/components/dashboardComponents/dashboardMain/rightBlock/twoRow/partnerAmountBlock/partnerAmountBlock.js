import InfoIcon from "../../../../../../assets/images/info-icon.svg";
import backgroundSP from "../../../../../../assets/images/background-sp.png";
import backgroundFreeP from "../../../../../../assets/images/background-freep.png";
import backgroundFP from "../../../../../../assets/images/background-fp.png";
import backgroundMP from "../../../../../../assets/images/background-mp.png";

import "../../../../../../assets/styles/dashboard.scoped.css";

const PartnerAmountBlock = ({
    settings,
    t,
    user,
    ...i
}) => {
    return <div className="partner_amount_block" style={{
        backgroundImage: `url(${settings && settings.status === "Free"
            ? backgroundFreeP
            : settings && settings.status === "Start Profit"
                ? backgroundSP
                : settings && settings.status === "Fixed Profit"
                    ? backgroundFP
                    : settings && settings.status === "Maxi Profit"
                        ? backgroundMP
                        : backgroundFreeP
            })`
    }}>
        <img src={i.background} alt="" style={{ position: "absolute", right: 2, top: 1.5, height: "98%" }} />
        <div className="partner_amount_content">
            <button
                className="info_icon"
                type="button"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-trigger="hover"
                title={t(i.buttonTitle)}
                data-bs-content={t(
                    i.buttonContent
                )}
            >
                <img src={InfoIcon} alt="" />
            </button>
            <div className="two_item_block">
                <div className="two_item_content">
                    <div className="item_icon">
                        <img src={i.icon} alt="" height="68" className="item_icon-block" />
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
                            {t(i.itemTitle)}
                        </p>
                        <p className="item_description">
                            {i.itemDesc}
                        </p>
                    </div>
                </div>
                <div className="item_link_block">
                    <p
                        className="item_link_text"
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
                        {i.itemLinkText ? t(i.itemLinkText) : `BNB:`}
                        <span href="#" className="item_link">
                            {i.itemLink === "null" ? "" : i.itemLink}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default PartnerAmountBlock;