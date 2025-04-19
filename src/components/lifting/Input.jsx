import React from 'react'

const Input = React.memo(({input,setInput}) => {
  return (
    <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
})

export default Input