import OneRow from "./oneRow/oneRow";
import TwoRow from "./twoRow/twoRow";
import LevelsBlock from "./levelsBlock/levelsBlock";
import BannerBlock from "./bannerBlock/bannerBlock";

import "../../../../assets/styles/dashboard.scoped.css";

const RightBlock = ({
    settings,
    t,
    user,
    textRef,
    text
}) => {
    return <div className="right_block">

        <OneRow
            settings={settings}
            user={user}
            t={t}
        />

        <TwoRow
            settings={settings}
            user={user}
            t={t}
        />

        <LevelsBlock
            settings={settings}
            user={user}
            t={t}
        />

        <BannerBlock
            settings={settings}
            textRef={textRef}
            text={text}
        />
    </div>
}

export default RightBlock;