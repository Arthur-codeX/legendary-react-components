import React from "react";
import { Link } from "react-router-dom";
const styles = {
  contMargin: {
    marginTop: "40px",
    marginBottom: "60px",
  },
};

const ExpressPageComp = () => (
  <div className="w3-blue w3-container w3-text-white">
    <div className="w3-container" style={styles.contMargin}>
      <p className="w3-center w3-xxxlarge">
        <b>Express Js</b>
      </p>
      <p className="w3-center w3-xxlarge" style={{ opacity: 0.5 }}>
        Covers Express setup and boilerplate code in Express.
      </p>
      <p className="w3-center">
        <Link
          to="/Express"
          className="w3-button w3-xlarge w3-border w3-border-grey w3-round"
        >
          Express
        </Link>
      </p>
    </div>
  </div>
);

const MongoDbPageComp = () => (
  <div className="w3-container w3-text-black">
    <div className="w3-container" style={styles.contMargin}>
      <p className="w3-center w3-xxxlarge">
        <b>Mongo Db</b>
      </p>
      <p className="w3-center w3-xxlarge" style={{ opacity: 0.5 }}>
        Covers use of mongo Db
      </p>
      <p className="w3-center">
        <Link
          to="/Mongo"
          className="w3-button w3-xlarge w3-border w3-border-grey w3-round"
        >
          MongoDb
        </Link>
      </p>
    </div>
  </div>
);
export { ExpressPageComp, MongoDbPageComp };
