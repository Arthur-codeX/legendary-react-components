import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import ExpressPage from "./pages/Express/ExpressPage";
import ErrorPage from "./pages/Error";
import { NavBar } from "./components/nav";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Express">
          <ExpressPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
