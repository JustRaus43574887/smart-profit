import Banner from "../../../../../assets/images/banner.png";
import Gift from "../../../../../assets/images/gift.svg";
import BannerDefault from "../../../../../assets/images/banner-default.png";

import "../../../../../assets/styles/dashboard.scoped.css";

const BannerBlock = ({ textRef, text }) => {
    return <div className="banner_block" style={{ position: "relative" }}>
        <img
            src={BannerDefault}
            alt="banner"
            width="100%"
            height="100%"
        />

        <div
            style={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div style={{ position: "relative" }}>
                <img
                    src={Banner}
                    alt="banner"
                    style={{ marginLeft: 30, marginRight: 20 }}
                    height="68"
                />
                <img
                    src={Gift}
                    alt="banner"
                    style={{ position: "absolute", right: 35, top: 30 }}
                    className="gift-banner"
                    height="24"
                />
            </div>
            <p
                ref={textRef}
                style={{ color: "white" }}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    </div>
}

export default BannerBlock;