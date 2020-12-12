import { createStore } from 'redux'

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

const store = createStore(counterReducer)

export default store