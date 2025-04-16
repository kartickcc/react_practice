import React, { useState } from 'react'

const index = () => {
    const [isLogin,setIsLogin] = useState(false)
  return (
    <div>
        <button onClick={()=>{setIsLogin(!isLogin)}}>{isLogin? 'Login' : 'Logout'}</button>
        <p>{isLogin?'Welcome to the Dashboard':'Need to login'}</p>
    </div>
  )
}

export default index