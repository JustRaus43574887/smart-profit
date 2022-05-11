import i18n from "../../node_modules/i18next";
import { initReactI18next } from "react-i18next";

import landingTranslationEN from "../translations/en/landingTranslationEN.json";
import landingTranslationRU from "../translations/ru/landingTranslationRU.json";
import loginEN from "../translations/en/loginEN.json";
import loginRU from "../translations/ru/loginRU.json";
import joinEN from "../translations/en/joinEN.json";
import joinRU from "../translations/ru/joinRU.json";
import resetPasswordEN from "../translations/en/resetPasswordEN.json";
import resetPasswordRU from "../translations/ru/resetPasswordRU.json";
import forgotEN from "../translations/en/forgotEN.json";
import forgotRU from "../translations/ru/forgotRU.json";
import footerEN from "../translations/en/footerEN.json";
import footerRU from "../translations/ru/footerRU.json";
import headerEN from "../translations/en/headerEN.json";
import headerRU from "../translations/ru/headerRU.json";
import dashboardEN from "../translations/en/dashboardEN.json";
import dashboardRU from "../translations/ru/dashboardRU.json";
import faqEN from "../translations/en/faqEN.json";
import faqRU from "../translations/ru/faqRU.json";
import toastEN from "../translations/en/toastEN.json";
import toastRU from "../translations/ru/toastRU.json";
import activationEN from "../translations/en/activationEN.json";
import activationRU from "../translations/ru/activationRU.json";
import profileEN from "../translations/en/profileEN.json";
import profileRU from "../translations/ru/profileRU.json";
import sponsorEN from "../translations/en/sponsorEN.json";
import sponsorRU from "../translations/ru/sponsorRU.json";
import myteamEN from "../translations/en/myteamEN.json";
import myteamRU from "../translations/ru/myteamRU.json";
import generalteamEN from "../translations/en/generalteamEN.json";
import generalteamRU from "../translations/ru/generalteamRU.json";
import financeEN from "../translations/en/financeEN.json";
import financeRU from "../translations/ru/financeRU.json";

const resources = {
  en: {
    landing: landingTranslationEN,
    login: loginEN,
    join: joinEN,
    resetPassword: resetPasswordEN,
    forgot: forgotEN,
    footer: footerEN,
    header: headerEN,
    dashboard: dashboardEN,
    faq: faqEN,
    toast: toastEN,
    activation: activationEN,
    profile: profileEN,
    sponsor: sponsorEN,
    myteam: myteamEN,
    generalteam: generalteamEN,
    finance: financeEN,
  },
  ru: {
    landing: landingTranslationRU,
    login: loginRU,
    join: joinRU,
    resetPassword: resetPasswordRU,
    forgot: forgotRU,
    footer: footerRU,
    header: headerRU,
    dashboard: dashboardRU,
    faq: faqRU,
    toast: toastRU,
    activation: activationRU,
    profile: profileRU,
    sponsor: sponsorRU,
    myteam: myteamRU,
    generalteam: generalteamRU,
    finance: financeRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
