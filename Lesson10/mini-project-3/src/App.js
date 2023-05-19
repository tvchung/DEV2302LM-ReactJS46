import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import ListTask from "./components/ListTask";
import Control from "./components/Control";
import Form from "./components/Form";

function App() {
  // 5.1:
  // Tạo mock data
  // const listTasks = [
  //   {
  //     taskId: 1,
  //     taskName:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
  //     level: "Small",
  //   },
  //   {
  //     taskId: 2,
  //     taskName:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
  //     level: "Medium",
  //   },
  //   {
  //     taskId: 3,
  //     taskName:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c",
  //     level: "High",
  //   },
  // ];
  const listTasks=[]
  // tạo state lưu mockData
  // const [tasks, setTasks] = useState(listTasks);
  const [tasks, setTasks] = useState(()=>{
    const lists = JSON.parse(localStorage.getItem("DEV2302LMRJ_TASKS"));
    if(lists === null){
        return listTasks;
    }else{
      return lists
    }
  });
  // khi tasks thay đổi thì cập nhật localStorage
  useEffect(()=>{
    localStorage.setItem("DEV2302LMRJ_TASKS",JSON.stringify(tasks))
  },[tasks])

  // task: add, edit
  const [task, setTask] = useState({});

  // 5.2 toggle form
  const [isToggle, setToggle] = useState(false);

  // sự kiện cancel form
  const handleCancel = () => {
    setToggle(false);
  };

  // sự kiện add task
  const handleAddTask = (toggle) => {
    setToggle(toggle);
  };
  // sự kiện edit task
  const handleEditTask = (toggle) => {
    setToggle(toggle);
  };

  // Thêm mới một task vào listtask
  const handleSubmit=(task)=>{
    console.log("Add task submit:",task);
    // xử lý trường hợp thêm mới
    setTasks(prev =>{
      let taskIdAdd = prev.length<=0? 1: prev[prev.length-1].taskId +1;
      const taskAdd = {
        taskId:taskIdAdd,
        taskName:task.taskName,
        level:task.level
      }

      return [...prev,taskAdd]
    })
  }
  // renderForm
  const elementForm = isToggle ? <Form 
                                    onCancel={handleCancel} 
                                    onSubmit={handleSubmit}
                                    renderTask={task} /> : "";
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control onAddTask={handleAddTask} />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {/* <Form />  */}
      {elementForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask renderTasks={tasks} onEdit={handleEditTask} />
    </div>
  );
}

export default App;
