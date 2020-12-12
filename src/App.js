import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: "PLUS" })
  }

  const decrement = () => {
    dispatch({ type: "MINUS" })
  }

  return (
    <div style={{ textAlign: "center" }}>
     Counter: {counter}
     <br/>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
