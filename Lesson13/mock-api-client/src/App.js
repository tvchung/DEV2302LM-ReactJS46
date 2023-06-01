import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/list-user' element={<ListUser/>} />
          <Route path='/create-user' element={<CreateUser/>} />
          <Route path='/update-user' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
