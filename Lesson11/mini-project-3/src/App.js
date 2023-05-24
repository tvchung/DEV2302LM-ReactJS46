import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import ListTask from "./components/ListTask";
import Control from "./components/Control";
import Form from "./components/Form";

function App() {
  // 5.1:
  // Tạo mock data
  const listTasks = [
    {
      taskId: 1,
      taskName:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
      level: "Small",
    },
    {
      taskId: 2,
      taskName:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
      level: "Medium",
    },
    {
      taskId: 3,
      taskName:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
      level: "High",
    },
  ];
  // const listTasks=[]
  // tạo state lưu mockData
  // const [tasks, setTasks] = useState(listTasks);
  const [tasks, setTasks] = useState(()=>{
    const lists = JSON.parse(localStorage.getItem("DEV2302LMRJ_TASKS"));
      if(lists === null || lists.length ===0){
        return listTasks;
      }else{
        return lists;
      }
  });
 
  // khi tasks thay đổi thì cập nhật localStorage
  useEffect(()=>{
    localStorage.setItem("DEV2302LMRJ_TASKS",JSON.stringify(tasks))
  },[tasks])

  // task: add, edit
  let initTask = {
    taskId: 0,
    taskName:"",
    level: "Medium",
  }
  const [task, setTask] = useState(initTask);
  console.log("App:",task);
  // 5.2 toggle form
  const [isToggle, setToggle] = useState(false);

  // sự kiện cancel form
  const handleCancel = () => {
    setToggle(false);
  };
  // state quản lý chức năng Thêm/ sửa
  const [actionName, setActionName]=useState("Add")

  // sự kiện add task / Edit task => onclick trên nút AddTask của Control; Edit của Task
  const handleAddOrEditTask = (toggle,actionName, task) => {
    console.log("AddOrEdit:",toggle,actionName,task);
    setToggle(toggle); // hiển thị form
    setActionName(actionName); // Quản lý chức năng Thêm/Sửa
    if(task!==null){
      // console.log("if:add");
      setTask(task); // dữ liệu render lên form trước khi sửa
    }
  };
 

  // Thêm mới một task vào listtask
  const handleSubmit=(task)=>{
    // xử lý trường hợp thêm mới
    if(actionName === "Save"){
      setTasks(prev =>{
        let taskIdAdd = prev.length<=0? 1: prev[prev.length-1].taskId +1;
        const taskAdd = {
          taskId:taskIdAdd,
          taskName:task.taskName,
          level:task.level
        }
        return [...prev,taskAdd]
      })
    }else{ // actionName==="Update" => Cập nhật trường hợp sửa
      setTasks(prev =>{
        for (let index = 0; index < prev.length; index++) {
            if(prev[index].taskId === task.taskId){
              prev[index] = task;
              break;
            }          
        }
        return [...prev];
      })
    }
  } //./End Submit Form
  // renderForm
  const elementForm = isToggle ? <Form 
                                    onCancel={handleCancel} 
                                    onSubmit={handleSubmit}
                                    actionName={actionName}
                                    renderTask={task} /> : "";
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control onAddTask={handleAddOrEditTask} />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {/* <Form />  */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderTasks={tasks} onEdit={handleAddOrEditTask} />
    </div>
  );
}

export default App;
