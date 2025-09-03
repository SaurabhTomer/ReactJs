import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState( 5 )

  // let counter = 5; 

  const addValue = () => {
    if (counter < 10) {
      setcounter(counter + 1)
    }
    
  }

  const removeValue = () => {
    // setcounter(counter - 1)
    
    if (counter >= 1) {
      setcounter(counter - 1)
    }

  }
  
  return (
    <>
      
     <h1>Saurabh Tomer</h1>

     <h2>Counter Value : { counter }</h2>

     <button onClick={addValue}> Add Value : {counter}</button>
     {/* {addValue} is the only reference here because i want to update the value once i clicked on it */}
     {/* if i call function then it will update itself */}

     <br />
     <br />

     <button onClick={removeValue}>Remove Value : {counter}</button>

    </>
  )
}

export default App
