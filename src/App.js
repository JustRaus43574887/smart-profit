import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/auth.context";
import Routes from "./routes/Routes";
import "./utils/translation";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (window.location.href.includes("ru")) {
      i18n.changeLanguage("ru");
    }
    if (window.location.href.includes("en")) {
      i18n.changeLanguage("en");
    }
  }, [window.location]);

  useEffect(() => {
    localStorage.setItem("language", i18n.language)
  }, [i18n.language]);

  return (
    <AuthContextProvider>
      <Routes />
      <ToastContainer theme="dark" />
    </AuthContextProvider>
  );
}

export default App;
