import { createStore } from "redux";
// import { createStore } from "./myredux";

import reducer from "./practice/reducer";

const store = createStore(reducer);
export default store;
