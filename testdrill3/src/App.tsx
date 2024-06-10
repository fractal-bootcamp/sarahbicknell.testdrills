import { useState } from 'react'
import './App.css'

function App() {
  const [textValue, setTextValue] = useState("")

  function heheIHandleClick() {
    setTextValue(((document.getElementById("textID")) as HTMLInputElement).value) 

  }

  return (
    <div> 
      <input type="text" id="textID" /> 
      <button onClick={heheIHandleClick}> Clicky! </button>
      {textValue}

    </div>
  )
}

export default App
