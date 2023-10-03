const VoteAction = {
  support() {
    return { type: "VOTE_SUP" };
  },
  opposite() {
    return { type: "VOTE_OPP" };
  },
};

export default VoteAction