import React , { useEffect, useState } from 'react'

function DemoUseEffect() {

    // useState
    const [count,setCount] = useState(0);

    // callbback
    useEffect (()=>{
        console.log("Đây là callback function => re-render");
    })

    // (callBack, [])
    useEffect (()=>{
        console.log("[], Đây là callback function (một lần)");
    },[])
    // (callback, [deps])
    useEffect (()=>{
        console.log("[",count,"], Đây là callback function => re-render (count)");
    },[count])
  return (
    <div>
      <h2> Demo useEffect</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Click</button>
    </div>
  )
}

export default DemoUseEffect
