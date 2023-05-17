import React ,{useState} from 'react'

function DemoUseState() {
    // sử dụng useState 
    // khởi tạo state (count = 0) 
    const [count, setCount] = useState(10);
    // Cập nhật count
    const handleCountUp = () =>{
        // count++;
        // setCount(count)
        setCount((prev)=>prev+1)
    }
    const handleCountDown = ()=>{
        setCount((prev)=>prev-1)
    }

    // khởi tạo state là 1 mảng
    const lists = ['arr1','arr2']
    const [list,setLists] = useState(lists);
    // event
    const handleList = (param)=>{
        switch (param) {
            case "Add":
                setLists([
                    ...list,
                    parseInt(Math.random()*100)
                ])
                break;
            case "Remove":
                list.pop();
                setLists([...list])
                break;
            default:
                break;
        }
    }
  return (
    <div>
      <h2>Demo useState</h2>
        <p className='alert alert-success'>Count: {count}</p>

        <button onClick={handleCountUp}> Click Count++ </button>
        <button onClick={handleCountDown}> Click Count-- </button>
        <hr/>
        <div className='alert alert-danger'> List: {list.toString()}</div>
        <button onClick={()=>handleList("Add")}> Add </button>
        <button onClick={()=>handleList("Remove")}> Remove </button>
        
    </div>
  )
}

export default DemoUseState
