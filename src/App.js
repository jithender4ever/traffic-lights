import React, { useReducer } from 'react';
import './App.css';
import reducer from "./reducer";
import {INITIAL_STATE} from "./store";

const COLORS = ['red', 'green', 'yellow'];

const modeDisplay = {
  true: 'ON',
  false: 'OFF'
};

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div className="App">
      <h2>Traffic Lights - State Transition!</h2>
      <p>color: {COLORS[state.colorIndex]}</p>
      <p>mode: {modeDisplay[state.mode]}</p>
      <button onClick={ () => dispatch({type: 'NEXT'})}>Next</button>
      <button onClick={ () => dispatch({type: 'MODE'})}>Turn {modeDisplay[!state.mode]}</button>
    </div>
  );
}

export default App;
