import logo from "./logo.png";
import "./App.css";
import FunComp from "./components/FunComp";
import ClassComp from "./components/ClassComp";
import ArrowFunction from "./components/ArrowFunction";
import MemberInfor from "./components/MemberInfor";
import DemoState from "./components/DemoState";

function App() {
  // Khai báo biến
  const name = "Devmaster Aacademy!";

  // Tạo một jsxelement
  const elementCompany = <h2>Welcome to, {name}</h2>;
  // tạo một hàm
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  // tạo đối tượng
  const users = {
    firstName: "Chuung",
    lastName: "Trịnh",
  };
  // tạo jsxelement có nội dụng sử dụng hàm và đối tượng trên
  const elementFullName = (
    <>
      <h2>Hello, {formatName(users)}</h2>
      <p>Welcome to, {name}</p>
    </>
  );
  // arrow function 
  const Member = (props)=>{
    return(
        <>
            <hr/>
            <h2>Tôi là ArrowFunction</h2>
            <h3>Welcome to, {props.info}</h3>
        </>
    )
}
  // tạo đối tượng member
  const member = {
    path:"/images/avatar.jpg",
    name:"Chung Trịnh Văn",
    age:42
  }
  return (
    <div className="App">
      <img
        src={logo}
        style={{ width: "150px", height: "100px" }}
        className="App-logo"
        alt="logo"
      />
      <hr />
      {/* sử dụng jsxelement */}
      {elementCompany}
      <hr />
      {elementFullName}
      {/* sử dụng function component */}
      <FunComp />
      <FunComp
        name="Là lá la là"
        company="Devmaster Academy"
        address="25 Vũ Ngọc Phan"
      />
      {/* sử dụng class component  */}
      <ClassComp name="Devmaster Academy" address="25 Vũ Ngọc Phan" />
      <ClassComp name="Viện Công nghệ Devmaster" address="25 Vũ Ngọc Phan" />
      <ClassComp name="Chuung Chung" address="Tầng 6, Số 25 Vũ Ngọc Phan" />
      <ArrowFunction info="Chúng tôi là những chiến sỹ code thực chiến" />
      <Member info="Chúng tôi là những chiến sỹ code thực chiến" />

      <MemberInfor info={member} />
      {/* sủ dụng state  */}
      <DemoState />
    </div>
  );
}

export default App;
