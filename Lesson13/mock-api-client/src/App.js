import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import CreateStudent from './components/CreateStudent';
import ListStudent from './components/ListStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/list-user' element={<ListUser/>} />
          <Route path='/create-user' element={<CreateUser/>} />
          <Route path='/update-user' element={<UpdateUser />} />
          <Route path='/list-student' element={<ListStudent />} />
          <Route path='/create-student' element={<CreateStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
