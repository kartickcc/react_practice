import React,{useState,useEffect} from 'react'
import axios from 'axios'
const FetchData = () => {
    const [user,setUsers] = useState([])
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then((res) => res.json())
        // .then((data) => {
        //     setUsers(data)
        //     console.log(data)
        // });
        async function fetchApi(){
            try{
               const data =  await axios.get("https://jsonplaceholder.typicode.com/users")
               setUsers(data?.data)
            }catch(e){
               console.log(e)
            }    
        }
        fetchApi()
    },[])
  return (
    <div>{
            user.map((item,index)=>{
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

export default FetchData