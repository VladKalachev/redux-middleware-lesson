import { createStore, applyMiddleware } from 'redux'

function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
      case "PLUS":
        return {
          ...state,
          counter: state.counter + 1
        };
      case "MINUS":
        return {
          ...state,
          counter: state.counter - 1
        };
      default:
        return state;
    }
}

// Logger
const loggerMiddleware = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
};

// Thunk
const thunkMiddleware = store => next => action =>
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action)

const store = createStore(counterReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

export default store