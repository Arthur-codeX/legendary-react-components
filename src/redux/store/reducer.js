const initialState = {
  currentPage: "DashPage",
  lastPage: "DashPage",
  btnColor: ["w3-blue", "", ""],
};

const Reducer = (state = initialState, action) => {
  var sideBarColor = { DashPage: 0, TopBarPage: 1 };
  switch (action.type) {
    case "Page_To_Show":
      var btnNo = sideBarColor[action.value] || 0;
      var btnArr = btnColorArray(state.btnColor, btnNo);
      return {
        ...state,
        lastPage: state.currentPage,
        currentPage: action.value,
        btnColor: btnArr,
      };
    case "GO_BACK":
      var btnNo = sideBarColor[state.lastPage] || 0;
      var btnArr = btnColorArray(state.btnColor, btnNo);
      return {
        ...state,
        currentPage: state.lastPage,
        lastPage: action.value,
        btnColor: btnArr,
      };
    default:
      return state;
  }
};

function btnColorArray(colorAr, no, color = "w3-blue") {
  let newColor = [];
  var colorPushed = false;
  for (let i = 0; i < colorAr.length; i++) {
    if (i === no) {
      colorPushed = true;
      newColor.push(color);
      continue;
    }
    newColor.push("");
  }
  // if (colorPushed == false) {
  //   return btnColorArray(colorAr, 0);
  // }
  return newColor;
}

export default Reducer;
