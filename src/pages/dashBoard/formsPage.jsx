import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { IoCopySharp } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { BackInfoTopBar } from "./../../components/TopBars";
import { LoginForm } from "./../../components/forms";
import { goBack } from "./../../redux/actions/reducerActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const FormsPage = () => {
  var dispatch = useDispatch();
  return (
    <div style={{ width: "100%", height: "100 vh" }}>
      <BackInfoTopBar
        mess={"All Form Components"}
        backBtn={() => dispatch(goBack("FormsPage"))}
      />
      <div className="w3-panel w3-light-grey w3-leftbar w3-margin-top w3-container">
        <p className="w3-xlarge">
          All Form Components. Click on the clipboard to copy and modify the
          components.
        </p>
      </div>
      <p className="w3-margin-top">
        <button className="w3-button w3-blue w3-round w3-card-4 w3-ripple">
          <FaGithubAlt />
        </button>
      </p>
      <div className="w3-container">
        <h3 className="w3-center">
          <b>Log In Form</b>
        </h3>
        <LoginForm1 />
      </div>
    </div>
  );
};

const LoginForm1 = () => {
  const notify = () => toast("Component Copied", { toastId: "0012" });

  const code =
    'const LoginForm = ({ btnMess, setLogin, card, mess }) => { btnMess = btnMess || "Login"; card = card || "w3-card"; mess = mess || "Legendary Login"; const [inputs, setInputs] = useState({ email: "", pass: "", emailPlaceholder: "Enter Email", passPlaceholder: "Enter Password", }); function submitForm() { console.log("Form Submited"); if (inputs.email === "") { setInputs({ ...inputs, emailPlaceholder: "!!! Email Required" }); toast.error("Email Is Required", { toastId: "dsadsa", }); return; } if (inputs.pass === "") { setInputs({ ...inputs, passPlaceholder: "!!! Password Required" }); toast.error("Password Is Required", { toastId: "0dsad3", }); return; } if (inputs.email.trim().includes(" ")) { toast.error("!! Email Should Not Include White Spaces", { toastId: "001", }); setInputs({ ...inputs, email: "", emailPlaceholder: "!!! No spaces allowed", }); return; } if (!inputs.email.trim().includes("@")) { toast.error("!! Wrong Email Format", { toastId: "0da02", }); setInputs({ ...inputs, email: "", emailPlaceholder: "!!! Invalid email", }); return; } setLogin({ email: inputs.email, password: inputs.pass }); } return ( <div className={`w3-container ${card}`}> <h3 className="w3-center"> <b>{mess}</b> </h3> <div className="w3-cell-row"> <div className="w3-cell w3-cell-middle"> <span className="w3-xxlarge w3-right"> <MdEmail /> </span> </div> <div className="w3-cell"> <input className="w3-input w3-border" type="text" placeholder={inputs.emailPlaceholder} value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} /> </div> </div> <div className="w3-cell-row"> <div className="w3-cell w3-cell-middle"> <span className="w3-xxlarge w3-right"> <AiFillUnlock /> </span> </div> <div className="w3-cell"> <input className="w3-input w3-border" type="password" placeholder={inputs.passPlaceholder} value={inputs.pass} onChange={(e) => setInputs({ ...inputs, pass: e.target.value })} /> </div> </div> <div className="w3-bar w3-margin-bottom"> <div className="w3-center"> <button className="w3-button w3-blue w3-round w3-ripple" onClick={() => submitForm()} > {btnMess} </button> </div> </div> </div> ); };';

  function loggedIn(obj) {
    console.log(obj);
  }
  return (
    <div className="w3-padding">
      <p>
        <CopyToClipboard text={code}>
          <span
            className="w3-right w3-xxlarge w3-margin-right pointer w3-ripple"
            onClick={notify}
          >
            <IoCopySharp />
          </span>
        </CopyToClipboard>
      </p>
      <div className="w3-container w3-card-4">
        <div className="w3-col m6 ">
          <LoginForm
            setLogin={(data) => {
              console.log(data);
            }}
          />
          <div>
            <p>
              This is a simple login form. The inputs are email and password.
              The props are btnMess,setLogin,card,mess.
            </p>
            <ul>
              <li>btnMess: Button Text:</li>
              <li>Mess: Form Header Text: Defaul :Legendary Login</li>
              <li>
                setLogin: Pass function. Function output is an object containing
                email and password.
              </li>
              <li>
                card: pass 'w3-card' || 'w3-card-2': To get elevated effect
              </li>
            </ul>
          </div>
        </div>
        <div className="w3-col m6 ">
          <img
            src={"./img/codeImages.jpg"}
            width="100%"
            className="w3-bordered w3-padding"
          />
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default FormsPage;
