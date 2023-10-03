import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { support, opposite } from "./store/toolkit/VoteSlicer";
function App() {
  let { supNum, oppNum } = useSelector((store) => store.vote);
  let dispatch = useDispatch();
  return (
    <div className="App">
      <div>Support Number: {supNum}</div>
      <button onClick={() => dispatch(support())}>SUP</button>
      <div> Opposite Number: {oppNum}</div>
      <button onClick={() => dispatch(opposite())}>OPP</button>
    </div>
  );
}
export default App;
// export default connect(
//   (state) => {
//     return {
//       vote: state.vote,
//     };
//   },
//   (dispatch) => {
//     return {
//       support: () => dispatch(action.vote.support()),
//       opposite: () => dispatch(action.vote.opposite()),
//     };
//   }
// )(App);
