import WelcomeRedux from "./components/WelcomeRedux";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Welcome to Redux</h1>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Change Username
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Change Course Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Coursename"
              aria-label="Coursename"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <WelcomeRedux></WelcomeRedux>
        </div>
      </div>
    </div>
  );
}

export default App;
