import "../assets/styles/dashboard.scoped.css";
import "../assets/styles/finance.scoped.css";
import React, { useState } from "react";

import Header from "../components/dashboardComponents/dashboardHeader";
import Footer from "../components/dashboardComponents/footer";
import MyFinance from "../components/financeComponents/myFinance";
import FinanceTablinks from "../components/financeComponents/financeTablinks";
import ButtonsBlock from "../components/financeComponents/buttonsBlock";

function Finance() {
  const [skip, setSkip] = useState(0);
  const [length, setLength] = useState(0);

  return (
    <div className="background">
      <Header />
      <div className="finance_screen">
        <FinanceTablinks />
        <MyFinance skip={skip} setLength={setLength} />
        <ButtonsBlock setSkip={setSkip} length={length} skip={skip} />
      </div>
      <Footer />
    </div>
  );
}

export default Finance;
