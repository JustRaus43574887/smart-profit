import classNames from "classnames";
import { Link } from "react-router-dom";

import "../../../../../assets/styles/dashboard.scoped.css";

const LevelsBlock = ({ settings, user, t }) => {
    const date = new Date();
    const payDay = new Date(settings && settings.expire) * 1000;
    const checkStatus = date > payDay;

    return <>
        <div className="levels_block">
            <Link to="/general-team/1" style={{ width: "100%" }}>
                <div className={classNames("level_item", {
                    "level_item-block-purple": settings && (settings.status === "Free" || checkStatus),
                    "level_item-block-blue": settings && (settings.status === "Start Profit" && !checkStatus),
                    "level_item-block-green": settings && (settings.status === "Fixed Profit" && !checkStatus),
                    "level_item-block-yellow": settings && (settings.status === "Maxi Profit" && !checkStatus),
                })} style={{ width: "100%" }}>
                    <div className="level_content">
                        <p className="level_title">
                            {t("dashboard:TOP_DESCRIPTION_LEVEL")} 1
                        </p>
                        <div className="quantity_block">
                            <p className="quantity_text">
                                {user && user.levels[0].level_1}
                            </p>
                        </div>
                    </div>
                    <div style={{ position: "absolute", top: 10, right: "43%" }} className="lock-icon">
                        {(() => {
                            if (settings) {
                                if (checkStatus)
                                    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5" y="11" width="14" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 8C7 5.23858 9.23858 3 12 3V3C14.7614 3 17 5.23858 17 8V11H7V8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="white" />
                                    </svg>
                                switch (settings.status) {
                                    case "Free":
                                        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5" y="11" width="14" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 8C7 5.23858 9.23858 3 12 3V3C14.7614 3 17 5.23858 17 8V11H7V8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="white" />
                                        </svg>
                                    case "Start Profit":
                                        return null;
                                    case "Fixed Profit":
                                        return null;
                                    case "Maxi Profit":
                                        return null;
                                    default:
                                        return <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.15283 7.76942V7.63504C7.15283 4.89639 9.37295 2.67627 12.1116 2.67627V2.67627C14.8503 2.67627 17.0704 4.89639 17.0704 7.63504V10.8253" stroke="white" strokeLinecap="round" />
                                            <rect x="5.16919" y="10.8253" width="13.8846" height="9.05449" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.1114 16.258C12.6591 16.258 13.1031 15.8527 13.1031 15.3526C13.1031 14.8525 12.6591 14.4471 12.1114 14.4471C11.5637 14.4471 11.1196 14.8525 11.1196 15.3526C11.1196 15.8527 11.5637 16.258 12.1114 16.258Z" stroke="white" />
                                        </svg>
                                            ;
                                }
                            }
                        })()}
                    </div>
                </div>
            </Link>
            <div className="bottom_levels_block">
                {user &&
                    user.levels.slice(1).map((level, index) => (
                        <Link
                            key={index}
                            to={`/general-team/${index + 2}`}
                            style={index === 5 ? { marginRight: 0, width: "100%" } : { marginRight: 15, width: "100%" }}
                        >
                            <div class={`level_item ${(() => {
                                if (settings) {
                                    if (checkStatus)
                                        return "level_item-purple";
                                    switch (settings.status) {
                                        case "Free":
                                            return "level_item-purple";
                                        case "Start Profit":
                                            return index < 2
                                                ? "level_item-blue"
                                                : "level_item-purple";
                                        case "Fixed Profit":
                                            return index < 4
                                                ? "level_item-green"
                                                : "level_item-purple";
                                        case "Maxi Profit":
                                            return "level_item-yellow";
                                        default:
                                            return "level_item-blue";
                                    }
                                }
                            })()}`}>
                                <div style={{ position: "absolute", top: 10, right: 10 }} className="lock-icon">
                                    {(() => {
                                        if (settings) {
                                            if (checkStatus)
                                                return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="5" y="11" width="14" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7 8C7 5.23858 9.23858 3 12 3V3C14.7614 3 17 5.23858 17 8V11H7V8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="white" />
                                                </svg>
                                            switch (settings.status) {
                                                case "Free":
                                                    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="5" y="11" width="14" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M7 8C7 5.23858 9.23858 3 12 3V3C14.7614 3 17 5.23858 17 8V11H7V8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="white" />
                                                    </svg>
                                                case "Start Profit":
                                                    return index < 2
                                                        ? null

                                                        : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="5" y="11" width="14" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7 8C7 5.23858 9.23858 3 12 3V3C14.7614 3 17 5.23858 17 8V11H7V8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="white" />
                                                        </svg>;
                                                case "Fixed Profit":
                                                    return index < 4
                                                        ? null

                                                        : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="5" y="11" width="14" height="10" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M7 8C7 5.23858 9.23858 3 12 3V3C14.7614 3 17 5.23858 17 8V11H7V8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="white" />
                                                        </svg>;
                                                case "Maxi Profit":
                                                    return null
                                                        ;
                                                default:
                                                    return <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.15283 7.76942V7.63504C7.15283 4.89639 9.37295 2.67627 12.1116 2.67627V2.67627C14.8503 2.67627 17.0704 4.89639 17.0704 7.63504V10.8253" stroke="white" strokeLinecap="round" />
                                                        <rect x="5.16919" y="10.8253" width="13.8846" height="9.05449" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1114 16.258C12.6591 16.258 13.1031 15.8527 13.1031 15.3526C13.1031 14.8525 12.6591 14.4471 12.1114 14.4471C11.5637 14.4471 11.1196 14.8525 11.1196 15.3526C11.1196 15.8527 11.5637 16.258 12.1114 16.258Z" stroke="white" />
                                                    </svg>
                                                        ;
                                            }
                                        }
                                    })()}
                                </div>
                                <div className="level_content">
                                    <p className="level_title">
                                        {t("dashboard:TOP_DESCRIPTION_LEVEL")} {index + 2}
                                    </p>
                                    <div className="quantity_block">
                                        <p className="quantity_text">
                                            {level[`level_${index + 2}`]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    </>
}

export default LevelsBlock;