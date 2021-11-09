import React from "react";

import {
  ExpressPageComp,
  MongoDbPageComp,
  ReactPageComp,
} from "./../components/compPages";

const Home = () => {
  return (
    <div style={{ height: "100vh" }} className="stCont2">
      <h1 className="w3-center w3-margin-top w3-text-blue">
        <b>MERN PULSE Version: 0.0.2</b>
      </h1>
      <div className="w3-margin-top" style={{ margin: "0 auto", width: "90%" }}>
        <p className="w3-xxlarge">
          This Library is meant as a quick reference to reduce time taken to
          complete a project. Its ment for the full stack <b>MERN Developer.</b>
          Have fun.
        </p>
      </div>

      <ExpressPageComp />
      <MongoDbPageComp />
      <ReactPageComp />
    </div>
  );
};

export default Home;
