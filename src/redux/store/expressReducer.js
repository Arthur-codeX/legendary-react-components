const initialState = {
  currentModule: "Home",
  lastModule: "Home",
  btns: ["w3-blue", "", "", "", "", ""],
};

const Reducer = (state = initialState, action) => {
  const sideDash = {
    Home: 0,
    Server: 1,
    DotEnv: 2,
    MiddleWare: 3,
    Routes: 4,
  };
  switch (action.type) {
    case "EXPRESS_NEXT_MODULE":
      var a = newBtn(sideDash[action.value], state.btns);
      return {
        ...state,
        lastModule: state.currentModule,
        currentModule: action.value,
        btns: a,
      };
    case "EXPRESS_GO_BACK":
      var a = newBtn(sideDash[action.value], state.btns);
      return {
        ...state,
        currentModule: state.lastModule,
        lastModule: action.value,
        btns: a,
      };
    default:
      return state;
  }
};

function newBtn(no, btns) {
  var newArr = [];
  no = no || 0;
  for (let i = 0; i < btns.length; i++) {
    if (i === no) {
      newArr.push("w3-blue");
      continue;
    }
    newArr.push("");
  }
  return newArr;
}

export default Reducer;
