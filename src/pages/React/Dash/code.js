const indexJS = `
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import reducer from "./redux/store";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
`;

const storeJs = `
const initialState = {
    btn1Color: "w3-blue",
    btn2Color: "w3-green"
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "CHANGE_BTN_1_COLOR":
        return { ...state, btn1Color: action.value };
      case "CHANGE_BTN_2_COLOR":
        return { ...state, btn2Color: action.value };
      default:
        return state;
    }
  };
  
  export default reducer;
  
`;

const actionJs = `
const changeBtn1Color = (c = "w3-red") => {
    return { type: "CHANGE_BTN_1_COLOR", value: c };
  };
  
  const changeBtn2Color = (c = "w3-red") => {
    return { type: "CHANGE_BTN_2_COLOR", value: c };
  };
  
  export { changeBtn1Color, changeBtn2Color };
`;

const appJS =
  '\n import "./styles.css";\n import React, { useState } from "react";\n import { useSelector, useDispatch } from "react-redux";\n import { changeBtn1Color, changeBtn2Color } from "./redux/action";\n \n export default function App() {\n var btn1 = useSelector((state) => state.btn1Color);\n var btn2 = useSelector((state) => state.btn2Color);\n const dispatch = useDispatch();\n const [inputs, setInputs] = useState({ btn1: "", btn2: "" });\n \n console.log(btn1);\n function changeBtnsColor() {\n if (inputs.btn1 !== "") { dispatch(changeBtn1Color(inputs.btn1)); }\n if (inputs.btn2 !== "") { dispatch(changeBtn2Color(inputs.btn2)); }\n }\n return ( <div className="App">\n <h1 className="w3-center w3-margin-top">React Redux Quick App</h1>\n <div style={{ width: "100%" }}>\n <div style={{ margin: "auto", width: "50%" }} className="w3-container w3-card-4" >\n <h3 className="w3-center w3-text-blue">\n <b>Submit Buttton Color</b>\n </h3>\n <p>\n <label>Enter Btn 1 Color</label> </p>\n <input type="text" value={inputs.btn1} className="w3-input w3-border" onChange={(e) => setInputs({ ...inputs, btn1: e.target.value })} />\n <p>\n <label>Enter Btn 2 Color</label> </p>\n <input type="text" value={inputs.btn2} className="w3-input w3-border " onChange={(e) => setInputs({ ...inputs, btn2: e.target.value })} />\n <div className="w3-margin-top w3-center w3-margin-bottom">\n <button className="w3-button w3-blue w3-round w3-ripple" onClick={() => changeBtnsColor()} > Submit </button>\n </div>\n </div>\n \n <div className="w3-margin-top">\n <button className={`w3-button w3-round w3-margin-right w3-margin-left ${btn1}`} > Button 1 </button>\n <button className={`w3-button w3-round w3-margin-right w3-margin-left ${btn2}`} > Button 2 </button>\n </div>\n </div>\n </div>\n );\n }\n';
export { appJS, actionJs, storeJs, indexJS };
