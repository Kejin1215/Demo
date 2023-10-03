const VoteAction = {
  support: () => {
    return { type: "SUPPORT" };
  },
  opposite: () => {
    return { type: "OPPOSITE" };
  },
};
export default VoteAction;
