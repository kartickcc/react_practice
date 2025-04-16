import React , {useState} from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0)
    const fun = (type) => {
       if(type == 'inc'){
        setCounter((prev)=> prev+1)
       }else if(type == 'dec'){
        setCounter((prev)=> prev-1)
       }
    }
  return (
    <>
       <p>{counter}</p>
      <button onClick={()=>setCounter((Prev)=>Prev + 1 )}>Increment</button>
      <button onClick={()=>setCounter((Prev)=>Prev - 1 )}>Decrement</button>
    </>
  )
}

export default Counter