import "../assets/styles/dashboard.scoped.css";
import "../assets/styles/my-team.scoped.css";
import React, { useState } from "react";

import Header from "../components/dashboardComponents/dashboardHeader";
import Footer from "../components/dashboardComponents/footer";
import GeneralTopBlock from "../components/generalTeamComponents/generalTopBlock";
import Tablinks from "../components/generalTeamComponents/tablinks";
import Tabcontent from "../components/generalTeamComponents/tabContent";
import ButtonsBlock from "../components/generalTeamComponents/buttonsBlock";

function MyTeam() {
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [length, setLength] = useState(0);

  return (
    <div className="background">
      <Header />
      <div className="team_screen">
        <GeneralTopBlock setSearch={setSearch} search={search} />
        <Tablinks />
        <Tabcontent
          skip={skip}
          search={search}
          setLength={setLength}
          setSkip={setSkip}
        />
        <ButtonsBlock setSkip={setSkip} skip={skip} length={length} />
      </div>
      <Footer />
    </div>
  );
}

export default MyTeam;
