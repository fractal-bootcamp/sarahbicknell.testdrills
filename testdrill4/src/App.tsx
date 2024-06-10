import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("")

  function handleClick() {
    setValue(document.getElementById("inputId").value)

  }

  return (
    <div>
      <input type="text" id="inputId" />
      <button onClick={handleClick}> Enter </button>
      {value}
    </div>
  )
}

export default App
