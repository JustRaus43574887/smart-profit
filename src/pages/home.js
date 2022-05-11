import "../assets/styles/styles.scoped.css";
import HomeHeader from "../components/homeComponents/homeHeader";
import MainPage from "../components/homeComponents/mainPage";
import WorkPage from "../components/homeComponents/workPage";
import ValuesBlock from "../components/homeComponents/valuesBlock";
import TiredBlock from "../components/homeComponents/tiredBlock";
import StatusBlock from "../components/homeComponents/statusBlock";
import TableBlock from "../components/homeComponents/tableBlock";
import StartBlock from "../components/homeComponents/startBlock";
import Footer from "../components/homeComponents/footer";

function Home() {
  return (
    <div className="background">
      <HomeHeader />
      <MainPage />
      <WorkPage />
      <TiredBlock />
      <ValuesBlock />
      <StatusBlock />
      <TableBlock />
      <StartBlock />
      <Footer />
    </div>
  );
}

export default Home;
