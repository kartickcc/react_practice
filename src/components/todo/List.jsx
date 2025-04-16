import React, { useState } from 'react'

const List = () => {
    const [input,setInput] = useState('')
    const [list,setList] = useState([])
    const AddtoList = () =>{
        setList([...list,{
           id: list.length + 1,
           name : input
        }])
        setInput("")
    }
    const removeTodo = (id) =>{
         const result =  list.filter((data)=> data?.id !== id)
         setList(result)
    }
    const updateTodo = (id) =>{
       const result = list.map((item)=>{
        if(item.id === id){
            return {...item,name:'updated'}
       }
       return item
    }
    )
       setList(result)
    }
  return (
    <>
        <div>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={AddtoList}>Add +</button>
        </div>
        <div>
            {list && list.map((data,index)=>{
                return(
                    <div style={{display:"flex"}}>
                    <p>{data?.name}</p>
                    <button onClick={()=>removeTodo(data?.id)}>Remove - </button>
                    <button onClick={()=>updateTodo(data?.id)}>Edit </button>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default List