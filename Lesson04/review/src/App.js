import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  return (
    <div className="App">
      <h2>Function Component</h2>
      <hr/>
      <FuncComp />
      <h2>Class Component </h2>
      <hr/>
      <ClassComp />
    </div>
  );
}

export default App;
