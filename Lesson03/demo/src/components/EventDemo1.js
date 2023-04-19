import React from 'react'

export default function EventDemo1() {

    const handleClick1 = () =>{
        alert("Click Button 1");
    }
    const handleClick2 = ()=>{
        alert("Click button 2");
    }
    return (
        <div>
            <h2>Sử dụng sự kiện không có tham số</h2>
            {/* gọi thực hiện khi render */}
            {/* <button onClick={handleClick1()}>Button1</button> */}
            {/* gọi thực hiện khi click  */}
            <button onClick={handleClick2}>Button2</button>
        </div>
    )
}
