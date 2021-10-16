import React from "react";

const Dash = () => (
  <div className="w3-container">
    <h1 className="w3-center">
      <b>Legendary Components version 1.0.2</b>
    </h1>
    <div className="w3-panel w3-light-grey w3-leftbar">
      <p className="w3-xlarge">
        The main style sheet used is &nbsp;
        <a href="https://www.w3schools.com/w3css/4/w3.css" target="_blank">
          <b> W3.css</b>.
        </a>
        <br />A custom css style sheet is also included.&nbsp;
        <a href="https://www.w3schools.com/w3css/4/w3.css" target="_blank">
          <b> Cust.css</b>.
        </a>
        <br />
        <span>Link The Files in the index html. </span>
      </p>
      <p className="w3-xlarge">
        To use some icons knowledge of &nbsp;
        <a href="https://react-icons.github.io/react-icons/" target="_blank">
          <b>react icons</b>
        </a>
        ,&nbsp; library is required
      </p>
    </div>
    <p>
      Components Will be added over time. Note that the comoponents havent been
      packaged. Instead the undelying code is given this is to enable easy
      modification of the components.
    </p>
    <div>
      <h3 className="w3-center">
        <b>List Of All Components</b>
        <table className="w3-table-all w3-hoverable w3-card-4 w3-margin-top">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Variations</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            <tr className="pointer w3-ripple">
              <td>1</td>
              <td>Top Bars</td>
              <td>3</td>
              <td>Top bar components for information</td>
            </tr>
          </tbody>
        </table>
      </h3>
    </div>
  </div>
);
export default Dash;
