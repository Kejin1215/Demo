import { configureStore } from "@reduxjs/toolkit";
import voteReducer from "./VoteSlicer";

export default configureStore({
  reducer: {
    vote: voteReducer,
  },
});
