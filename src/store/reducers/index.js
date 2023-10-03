// 合并各个模块reducer

import { combineReducers } from "redux";

import voteReducer from "./VoteReducer";

const reducer = combineReducers({
  vote: voteReducer,
});

export default reducer;
