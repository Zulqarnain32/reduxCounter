import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber,incByFive } from './actions/index'
import "./App.css"

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Increment/Decrement Counter App</h1>
      <h3>using React and Redux</h3>
      <div className="structure">
        <button className="decr" onClick={() => dispatch(decNumber())}>-</button>
        <div className="counter">
          {myState}
        </div>
        <button className="incr" onClick={() => dispatch(incNumber())}>+</button>
        <button className="incrf" onClick={() => dispatch(incByFive())}>5</button>
      </div>
    </div>
  )
}

export default App
