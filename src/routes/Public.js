import { Switch, Route } from "react-router-dom";

import Modal from "../components/homeComponents/copyrightModal";

import Home from "../pages/home";
import Login from "../pages/login";
import Forgot from "../pages/forgot";
import Join from "../pages/join";
import FAQ from "../pages/faq";

const Public = () => {
  return (
    <>
      <Modal />
      <Switch>
        <Route exact path="/faq/:id">
          <FAQ />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/join/:id">
          <Join />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
        <Route exact path="/forgot/:id">
          <Forgot />
        </Route>
        <Route exact path="/forgot">
          <Forgot />
        </Route>
        <Route path="/login/:id">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/:id">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">404 Not Found</Route>
      </Switch>
    </>
  );
};

export default Public;
