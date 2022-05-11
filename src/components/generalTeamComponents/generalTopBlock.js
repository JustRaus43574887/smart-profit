import { useTranslation } from "react-i18next";
import "../../assets/styles/general.scoped.css";

import GeneralTeam from "../../assets/images/general-team.svg";
import SearchIcon from "../../assets/images/search-icon.svg";

function GeneralTopBlock({ search, setSearch }) {
  const { t } = useTranslation();

  const handleChange = (e) => setSearch(e.target.value);

  return (
    <div className="general_top_block">
      <div className="general_title_block">
        <img src={GeneralTeam} alt="general-team" />
        <p className="general_title">{t("generalteam:TOP_TITLE")}</p>
      </div>
      <div className="general_search_block">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className="general_search_input"
          placeholder={t("generalteam:TOP_DESCRIPTION_SEARCHTEAM")}
        />
        <a href="#" style={{ textDecoration: "none" }}>
          <div className="search_button">
            <img src={SearchIcon} alt="search-icon" />
            <p>{t("generalteam:TOP_DESCRIPTION_SEARCHTEAM")}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
export default GeneralTopBlock;
