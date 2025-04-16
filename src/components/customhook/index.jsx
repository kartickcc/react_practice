import React from 'react'
import customhook from './customhook'
const index = () => {
    const {data, loading} = customhook("https://jsonplaceholder.typicode.com/users")
  
  return (
      <div>{ loading ? 'Loading' : data &&
        data.map((item,index)=>{
                return(
                    <div key={item.id}>
                       <p>{item.name}</p>
                       <p>{item.email}</p>
                    </div>
                )
            })
        }</div>
  )
}

export default index