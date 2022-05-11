import { useTranslation } from "react-i18next";
import "../../assets/styles/general.scoped.css";

import RightArrow from "../../assets/images/right-arrow.svg";
import LeftArrow from "../../assets/images/left-arrow.svg";

function ButtonsBlock({ setSkip, length, skip }) {
  const { t } = useTranslation();

  const next = () => setSkip((skip) => (length < 25 ? skip : skip + 25));
  const prev = () => setSkip((skip) => (skip === 0 ? skip : skip - 25));

  return (
    <div className="buttons_block">
      <button
        onClick={prev}
        className="prev_button"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <img src={RightArrow} alt="right-arrow" className="right_icon" />
        <span>{t("myteam:TOP_DESCRIPTION_PREVIOUS")}</span>
      </button>
      <p className="table_page_indicator">{skip / 25 + 1}</p>
      <button
        onClick={next}
        className="next_button"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span>{t("myteam:TOP_DESCRIPTION_NEXT")}</span>
        <img src={LeftArrow} alt="left-arrow" className="left_icon" />
      </button>
    </div>
  );
}
export default ButtonsBlock;
