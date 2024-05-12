import './App.css'
import { useState } from 'react';
import Form from './form'

function App() {

 let [counter,setCounter]=useState(1)
  const addValue=()=>{
    if(counter<20){
    setCounter(counter+1)
  }
}
  
 const removeValue=()=>{
  if(counter>0){
  setCounter(counter-1); 
 }
}
  return (
    <>  
      <h1> counter value:{counter}</h1>
       <button
       onClick={addValue}
       > Add Value</button>
       <br/>
       <br/>
      <button
      onClick={removeValue}
      > Remove Value</button>    
     
    </>
  )
}

export default App
