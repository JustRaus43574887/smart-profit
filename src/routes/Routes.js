import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/auth.context";
import Private from "./Private";
import Public from "./Public";

const Routes = () => {
  const { token } = useContext(AuthContext);
  return <Router>{!!token ? <Private /> : <Public />}</Router>;
};

export default Routes;
