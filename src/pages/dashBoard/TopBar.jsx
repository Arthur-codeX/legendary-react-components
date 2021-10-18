import React from "react";
import { useDispatch } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { IoCopySharp } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { BackInfoTopBar, InfoTopBar } from "./../../components/TopBars";
import { goBack } from "./../../redux/actions/reducerActions";

const TopBarPage = () => {
  var dispatch = useDispatch();
  function prevPage() {
    dispatch(goBack("TopBarPage"));
  }
  return (
    <div className="">
      <BackInfoTopBar
        color={""}
        mess={"Top Bars Components"}
        backBtn={prevPage}
      />
      <div className="w3-panel w3-light-grey w3-leftbar w3-margin-top w3-container">
        <p className="w3-xlarge">
          Components That are displayed on the top of the page. Some of the
          components have <b>Props</b>. The props can be easily removed or
          modified. Click on the clip board to copy the code.
        </p>
      </div>
      <p className="w3-margin-top">
        <button className="w3-button w3-blue w3-round w3-card-4 w3-ripple">
          <FaGithubAlt />
        </button>
      </p>
      <div className="w3-container">
        <h3 className="w3-center">
          <b>Info Top Bar</b>
        </h3>
        <TopBar1 />
      </div>
      <div className="w3-container">
        <h3 className="w3-center">
          <b>Back Info Top Bar</b>
        </h3>
        <TopBar2 />
      </div>
    </div>
  );
};

const TopBar1 = () => {
  var infoTopBar =
    'const InfoTopBar = ({ mess, color }) => {  mess = mess || "Legendary Components";color = color || "w3-blue";return (<div className={`w3-bar ${color} w3-card`}><h3 className="w3-center">{mess}</h3> </div>);};';
  const notify = () => toast("Component Copied", { toastId: "006" });
  return (
    <div className="w3-padding">
      <p>
        <CopyToClipboard text={infoTopBar}>
          <span
            className="w3-right w3-xxlarge w3-margin-right pointer w3-ripple"
            onClick={notify}
          >
            <IoCopySharp />
          </span>
        </CopyToClipboard>
      </p>
      <div className="w3-row-padding w3-margin-top w3-card-4 w3-margin-bottom">
        <div className="w3-col m6 ">
          <InfoTopBar />
          <p>
            The Info Top bar has the mess prop and color prop. The default
            values can be changed and new props can be added. uses the w3 color
            classes.
          </p>
          <p>
            The default Message is <b>Legendary Component</b>
          </p>
          <p>
            The default color is <b>Blue.</b>
          </p>
        </div>
        <div className="w3-col m6 ">
          <img
            src={"./img/info.jpg"}
            width="100%"
            className="w3-bordered w3-padding"
          />
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

const TopBar2 = () => {
  var infoTopBar =
    'const BackInfoTopBar = ({ mess, color, card, backBtn }) => {mess = mess || "Legendary Message";color = color || "";card = card || "";return (<div className={`w3-bar  ${color} ${card}`}><span className="w3-xlarge w3-bar-item w3-margin-left w3-margin-right pointer w3-ripple"onClick={() => backBtn()}><FaArrowLeft /></span><b className="w3-xlarge w3-bar-item w3-margin-left">{mess}</b></div>);};';
  const notify = () => toast("Component Copied", { toastId: "007" });
  return (
    <div className="w3-padding">
      <p>
        <CopyToClipboard text={infoTopBar}>
          <span
            className="w3-right w3-xxlarge w3-margin-right pointer w3-ripple"
            onClick={notify}
          >
            <IoCopySharp />
          </span>
        </CopyToClipboard>
      </p>
      <div className="w3-row-padding w3-margin-top w3-card-4 w3-margin-bottom">
        <div className="w3-col m6 ">
          <BackInfoTopBar backBtn={() => {}} card={"w3-card"} />
          <p>
            The Back Info Top bar has the mess,color,back function and card
            prop. The default values can be changed and new props can be added.
            uses the w3 color classes.
            <br />
            Used when you require a top bar with back button and some message
          </p>
          <p>
            Ensure you pass the back function button. This component is for
            naviagtion
          </p>
          <p>
            The default Message is <b>Legendary Component</b>
          </p>
          <p>
            The default color is <b>You background color</b>
          </p>
          <p>
            You can pass <b>"w3-card"||"w3-card-4"</b>
            To get an elevation effect on the component
          </p>
        </div>
        <div className="w3-col m6 ">
          <img
            src={"./img/backInfoTopBar.jpg"}
            width="100%"
            className="w3-bordered w3-padding"
          />
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default TopBarPage;
