import React , { useEffect, useState } from 'react'
import axios from 'axios'
const customhook = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
      async function fetchData(){
        try{  
            const result = await axios.get(url)
             setData(result.data)
             setLoading(false)
        }catch(e){
           console.log('error',e) 
        } 
      }
      fetchData()
    },[url])
  return {data,loading}
}

export default customhook