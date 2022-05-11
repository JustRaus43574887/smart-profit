import PartnerAmountBlock from "./partnerAmountBlock/partnerAmountBlock";
import PartnerScore from "../../../../../assets/images/partner_score.png";
import WalletIcon from "../../../../../assets/images/wallet-icon.png";
import OneRowLeft from "../../../../../assets/images/one-row-left.png";
import OneRowRight from "../../../../../assets/images/one-row-right.png";
import "../../../../../assets/styles/dashboard.scoped.css";

const OneRow = ({
    settings,
    user,
    t
}) => {

    const blocks = [
        {
            id: 1,
            buttonTitle: "dashboard:TOP_DESCRIPTION_POPUPWINDOW1_TITLE",
            buttonContent: "dashboard:TOP_DESCRIPTION_POPUPWINDOW1",
            itemTitle: "dashboard:TOP_DESCRIPTION_AFFILIATEPROFIT",
            itemDesc: `BNB:
            ${user &&
                parseFloat(user.partner_income.BNB).toFixed(4)}
            | USD: ${user && user.partner_income.USD} `,
            icon: PartnerScore,
            background: OneRowLeft
        },
        {
            id: 2,
            buttonTitle: "dashboard:TOP_DESCRIPTION_POPUPWINDOW2_TITLE",
            buttonContent: "dashboard:TOP_DESCRIPTION_POPUPWINDOW2",
            itemTitle: "dashboard:TOP_DESCRIPTION_PROFITLEVELS",
            itemDesc: `BNB:
            ${user && parseFloat(user.level_income.BNB).toFixed(4)}
            | USD: ${user && user.level_income.USD} `,
            icon: WalletIcon,
            background: OneRowRight
        }
    ];

    return <div className="one_row">
        {blocks.map(i => {
            return <PartnerAmountBlock
                key={i.id}
                settings={settings}
                user={user}
                t={t}
                {...i}
            />
        })}
    </div>
}

export default OneRow;