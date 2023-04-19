import React from 'react'

export default function RenderListKey() {
    const number = [11,22,5,33,44];

    const elementNumber = number.map((num)=>{
        return <span>{num*num} ; </span>
    })

    // Tạo mảng đối tượng
    const students = [
        {id:"100",name:"Quốc Dân",age:20},
        {id:"200",name:"Thẩm Dương",age:19},
        {id:"300",name:"Mỹ Ngọc",age:25},
        {id:"400",name:"Mỹ Nga",age:25},
        {id:"500",name:"Mỹ Hoa",age:25},
    ];
    // tạo danh sách 
    const elementStudent = students.map((item,index)=>{
        return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                        <button>Xem</button>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
        )
    })
  return (
    <div>
      <hr/>
      <h2>Render dữ liệu từ mảng, đối tượng...</h2>
        <div>
            {elementNumber}
        </div>
        <table border={"1px"} cellPadding={"10px"} align='center'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sinh viên</th>
                    <th>Họ tên</th>
                    <th>Tuổi</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {elementStudent}
            </tbody>
        </table>
    </div>
  )
}
