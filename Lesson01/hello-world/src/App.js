import logo from './logo.png';
import './App.css';
import person from './person';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World - {person.name} - {person.age}
        </a>
      </header>
    </div>
  );
}

export default App;
