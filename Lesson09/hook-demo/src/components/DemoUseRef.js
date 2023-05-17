import React, { useRef, useState } from 'react'

function DemoUseRef() {
    const [count, setCount] = useState(60);
    // dùng useRef để gán giá trị cho biến timeId
    const timeId = useRef();

    const handleStart = ()=>{
        timeId.current = setInterval(()=>{
            setCount(prev=>prev-1)
        },1000);
        console.log("Start--------->",timeId.current);
    }

    const handleStop = ()=>{
        clearInterval(timeId.current)
        console.log("Stop---> ", timeId.current);
    }
  return (
    <div>
      <h2>Demo useRef</h2>
      <h3>Current count:{count}</h3>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}> Stop</button>
    </div>
  )
}

export default DemoUseRef
