import { useTranslation } from "react-i18next";
import "../../assets/styles/general.scoped.css";

import GeneralTeam from "../../assets/images/general-team.svg";
import SearchIcon from "../../assets/images/search-icon.svg";

function GeneralTopBlock({ setSearch, search }) {
  const { t } = useTranslation();

  const handleChange = (e) => setSearch(e.target.value);

  return (
    <div className="general_top_block">
      <div className="general_title_block">
        <img src={GeneralTeam} alt="general-team" />
        <p className="general_title">{t("myteam:TOP_TITLE")}</p>
      </div>
      <div className="general_search_block">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className="general_search_input"
          placeholder={t("myteam:TOP_DESCRIPTION_SEARCH")}
        />
        <span href="#" style={{ textDecoration: "none" }}>
          <div className="search_button">
            <img src={SearchIcon} alt="search-icon" />
            <p>{t("myteam:TOP_DESCRIPTION_SEARCH")}</p>
          </div>
        </span>
      </div>
    </div>
  );
}

export default GeneralTopBlock;
