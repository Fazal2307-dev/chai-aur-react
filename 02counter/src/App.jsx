import { useState } from 'react'

import './App.css'

function App() {
 let [counter,setCounter] = useState(15)
// let counter  = 15;
const addValue=()=>{
  setCounter(counter+1);
}
const removeValue = ()=>{
  setCounter(counter-1)
}


  return (
    <>

    <h1>count the value:{counter}</h1>
      <button onClick={addValue}>add vlaue</button><br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
