import ProfileBlock from "./profileBlock/profileBlock";
import BonusBlock from "./bonusBlock/bonusBlock";

import "../../../../assets/styles/dashboard.scoped.css";

const LeftBlock = ({
    settings,
    t,
    user,
    copyToClipBoard,
    partnerInput,
    handleChangePartnerInput,
    handleSavePartner,
    maxiBonus,
    latestPrice
}) => {

    return <div className="left_block">
        <div className="left_block_profile">
            <ProfileBlock
                settings={settings}
                copyToClipBoard={copyToClipBoard}
                partnerInput={partnerInput}
                handleChangePartnerInput={handleChangePartnerInput}
                handleSavePartner={handleSavePartner}
                t={t}
                user={user}
            />
        </div>
        <BonusBlock
            settings={settings}
            maxiBonus={maxiBonus}
            latestPrice={latestPrice}
            t={t}
        />
    </div>
}

export default LeftBlock;