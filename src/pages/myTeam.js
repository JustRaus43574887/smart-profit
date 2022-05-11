import "../assets/styles/dashboard.scoped.css";
import "../assets/styles/my-team.scoped.css";
import React, { useEffect, useState } from "react";

import Header from "../components/dashboardComponents/dashboardHeader";
import Footer from "../components/dashboardComponents/footer";
import GeneralTopBlock from "../components/teamComponents/generalTopBlock";
import Tablinks from "../components/teamComponents/tablinks";
import NewRegistrations from "../components/teamComponents/newRegistrations";
import ExpiredPartners from "../components/teamComponents/expiredPartners";
import PaidPartners from "../components/teamComponents/paidPartners";
import ButtonsBlock from "../components/teamComponents/buttonsBlock";
import Modals from '../components/activationComponents/activationModals'

function MyTeam() {
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [length, setLength] = useState(0);

  const [tab, setTab] = React.useState("New");

  useEffect(() => {
    setSkip(0);
  }, [tab]);

  return (
    <>
      <Modals />
      <div className="background">
        <Header />
        <div className="team_screen">
          <GeneralTopBlock setSearch={setSearch} search={search} />
          <Tablinks tab={tab} setTab={setTab} />

          {tab === "New" ? (
            <NewRegistrations skip={skip} search={search} setLength={setLength} />
          ) : tab === "Expired" ? (
            <ExpiredPartners skip={skip} search={search} setLength={setLength} />
          ) : tab === "Paid" ? (
            <PaidPartners skip={skip} search={search} setLength={setLength} />
          ) : null}

          <ButtonsBlock setSkip={setSkip} length={length} skip={skip} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyTeam;
