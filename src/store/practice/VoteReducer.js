const initial = {
  supNum: 10,
  oppNum: 5,
};

export default function voteReducer(state = initial, action) {
  state = { ...state };
  switch (action.type) {
    case "SUPPORT":
      state.supNum++;
      break;
    case "OPPOSITE":
      state.oppNum++;
      break;
    default:
  }

  return state; // 替换公共状态
}
