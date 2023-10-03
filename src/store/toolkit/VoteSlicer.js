import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initial = {
  supNum: 10,
  oppNum: 5,
};

const voteSlice = createSlice({
  name: "vote",
  initialState: initial,
  reducers: {
    support(state, action) {
      return { ...state, supNum: state.supNum + 1 };
    },
    opposite(state, action) {
      return { ...state, oppNum: state.oppNum + 1 };
    },
  },
});

export const { support, opposite } = voteSlice.actions;
export default voteSlice.reducer;
