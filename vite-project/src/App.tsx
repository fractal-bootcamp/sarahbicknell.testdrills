import {useState} from 'react';

function App() {

  const [value, changeValue] = useState("")


  function handleClick() {
    changeValue(document.getElementById("input")?.value || "default input")
    
  }

  

  return (
    <div>
      <input type="text" id="input"/> 
      <button onClick={handleClick}> Button</button>
      {value}
    </div>
  )
}

export default App
