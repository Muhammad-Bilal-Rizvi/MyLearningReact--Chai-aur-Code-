import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Assignment: 
//when press add button counter value don't exceed from 20
//when press remove button counter value don't exceed from 0 (do't get negative value)

function App() {
  // let counter = 10;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log('Value Added',Math.random());
    console.log("clicked", Math.random());
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("clicked", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Hello World</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
