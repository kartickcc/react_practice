import {useState} from 'react'
import Input from './Input'
import Preview from './Preview'
const Parent = () =>{
  const [input,setInput] = useState('')
    return(
        <>
         <p className="card" style={{color:"red"}}>Parent Component</p>
         <Input input={input} setInput={setInput}/>
         <Preview input={input}/>
        </>
    )
}

export default Parent