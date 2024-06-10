import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [getInputValue, setGetInputValue] = useState("")

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    setGetInputValue(inputValue)
  }

  return (
    <div> 
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}> Submit </button>
      {getInputValue}
    </div>
  )
}

export default App
