export const createStore = function createStore(reducer) {
  let state,
    listeners = []; //事件池

  // 公共状态
  const getState = function getState() {
    return state;
  };

  // 事件池加入让组件更新方法
  const subscribe = function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new TypeError("listener is not a function!");
    }
    // 更新方法加入事件池
    if (!listeners.includes(listener)) {
      listeners.push(listener);
    }

    // 返回一个移除事件池方法的函数
    return function unsubscribe() {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  // 派发任务 通知 reducer 执行
  const dispatch = function dispatch(action) {
    // if(!isPlainObject(action)) throw new Error('')

    if (typeof action.type === "undefined")
      throw new Error("You have missed 'type'!");

    if (typeof reducer !== "function")
      throw new Error("Reducer must be function!");

    // reducer执行 接收执行的返回值 替换公共状态
    state = reducer(state, action);
    // 当状态更改 执行事件池方法
    listeners.forEach((listener) => {
      listener();
    });

    return action;
  };

  // redux内部 默认执行一次dispatch派发  给公共容器中的状态赋值
  dispatch({ type: Symbol() });

  return {
    getState,
    subscribe,
    dispatch,
  };
};
