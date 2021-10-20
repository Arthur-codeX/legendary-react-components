function nextModal(str, page = "EXPRESS") {
  let retType = page + "_" + "NEXT_MODULE";
  return { type: retType, value: str };
}

function goBack(str, page = "EXPRESS") {
  let retType = page + "_" + "GO_BACK";
  return { type: retType, value: str };
}

export { nextModal, goBack };
