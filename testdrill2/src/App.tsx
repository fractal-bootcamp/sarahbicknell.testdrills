import { useState } from 'react'


function App() {
  const [value, setValue] = useState("")

  function handleClick() {
    setValue((document.getElementById("inputId") as HTMLInputElement).value)
  }
  

  return (
    <div> 
      <input type="text" id="inputId"  />
      <button onClick={handleClick} > Submit </button>
      {value}
    </div>

  )
}

export default App
