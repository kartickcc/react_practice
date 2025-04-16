import React, { useState } from 'react'

const index = () => {
    const items = Array.from({length:30},(_, i)=> `Item ${i+1}`)
    const [page,setPage] = useState(1)
    const setPerPage = 5;
    const start = (page-1) * setPerPage;
    const paginatedItem = items.slice(start,start+setPerPage)
    const totalPage = Math.ceil(items.length/setPerPage)
  return (
    <>
    <div>{page} of {totalPage}</div>
    <div>
        {paginatedItem.map((item)=><li>{item}</li>)}
       <button onClick={()=>setPage(page-1)} disabled={page<=1}>Prev</button>   <button onClick={()=>setPage(page+1)} disabled={page >= totalPage}>Next</button>
    </div>
    </>
    
  )
}



export default index