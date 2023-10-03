import { combineReducers } from "redux";
import voteReducer from "./VoteReducer";

let reducers = combineReducers({
  vote: voteReducer,
});

export default reducers;
