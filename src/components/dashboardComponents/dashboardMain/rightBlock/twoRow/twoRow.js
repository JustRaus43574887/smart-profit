import PartnerAmountBlock from "./partnerAmountBlock/partnerAmountBlock";
import TeamIcon from "../../../../../assets/images/team-icon.png";
import LostIcon from "../../../../../assets/images/lost-icon.png";
import TwoRowLeft from "../../../../../assets/images/two-row-left.png";
import TwoRowRight from "../../../../../assets/images/two-row-right.png";

import "../../../../../assets/styles/dashboard.scoped.css";

const TwoRow = ({
    settings,
    user,
    t
}) => {

    const blocks = [
        {
            id: 1,
            buttonTitle: "dashboard:TOP_DESCRIPTION_POPUPWINDOW3_TITLE",
            buttonContent: "dashboard:TOP_DESCRIPTION_POPUPWINDOW3",
            itemTitle: "dashboard:TOP_DESCRIPTION_MYTEAM",
            icon: TeamIcon,
            itemDesc: `${user && user.my_team.partners_count} PARTNERS`,
            itemLinkText: "dashboard:TOP_DESCRIPTION_GENERALTEAM1",
            itemLink: `${user && user.my_team.team_count}`,
            background: TwoRowLeft
        },
        {
            id: 2,
            buttonTitle: "dashboard:TOP_DESCRIPTION_POPUPWINDOW4_TITLE",
            buttonContent: "dashboard:TOP_DESCRIPTION_POPUPWINDOW4",
            itemTitle: "dashboard:TOP_DESCRIPTION_LOSTPROFIT",
            icon: LostIcon,
            itemDesc: `BNB:
                ${user && parseFloat(user.lost_income.BNB).toFixed(4)}
            | USD: ${user && user.lost_income.USD} `,
            itemLink: `${user && user.wallet}`,
            background: TwoRowRight
        }
    ];

    return <div className="two_row">
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

export default TwoRow;