import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Program from './components/Program';
import Kid from './components/Kid';
import Network from './components/Network';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Menu /> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/categories' element={<Categories />}>
            <Route path='program' element={<Program />}/>
            <Route path='kid' element={<Kid />}/>
            <Route path='network' element={<Network />}/>
          </Route>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
