import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [grabValue, setGrabValue] = useState("")

  function handleChange(event) {
    setInputValue(event.target.value)
  }

  function handleClick() {
    setGrabValue(inputValue)
  }

  return (
    <div>
      <input type="text" id="inputId" value={inputValue} onChange={handleChange}/>
      <button onClick={handleClick}> Enter </button>
      {grabValue}
    </div>
  )
}

export default App
