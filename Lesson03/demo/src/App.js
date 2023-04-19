import './App.css';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import EventDemo3 from './components/EventDemo3';
import EventDemo4 from './components/EventDemo4';
import FormControlled from './components/FormControlled';
import RenderCondition from './components/RenderCondition';
import RenderListKey from './components/RenderListKey';

function App() {

  // lấy dữ liệu từ component con
  const handleView = (args)=>{
    console.log(args);
  }

  // get data submit form (FormControlled)
  const handleSubmit = (agrs)=>{
    console.log("Data:",agrs);
    console.log("Student Name:",agrs.studentName);
    console.log("Course:",agrs.course);
  }
  return (
    <div className="App">
      <h1>DEMO EVENT - FORM - LIST&KEY - render condition</h1>
      <hr/>
      <EventDemo1 />
      <EventDemo2 />
      <EventDemo3 name1="Devmaster" name2=" Academy "
              onView={handleView} />
      <EventDemo4 />

      <FormControlled onSubmit = {handleSubmit}/>

      <RenderCondition />

      <RenderListKey />
    </div>
  );
}

export default App;
