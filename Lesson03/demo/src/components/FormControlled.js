import React, { Component } from "react";

export default class FormControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Chuung",
      course: "CSS3",
    };
  }
  // xử lý khi thay đổi trên các điều khiển của form
  handleChange = (ev) => {
    // lấy tên điều khiển đang tương tác thay đổi
    let name = ev.target.name;
    // lấy giá trị trên điều khiển khi thay đổi
    let value = ev.target.value;
    // cập nhật lại trạng thái cho các thành phần trên form
    this.setState({
      [name]: value,
    });
  };

  // sử lý khi submit form
  handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Xin chào, " + this.state.studentName + "\n Course:" + this.state.course
    );
    console.log("Name:",this.state.studentName);
    console.log("Course:",this.state.course);

    // chuyển dữ liệu lên Component App
    let obj = this.state
    console.log(obj);
    this.props.onSubmit(obj)
  };
  render() {
    return (
      <div>
        <hr />
        <h2>Controlled Component Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            Tên sinh viên:
            <input
              value={this.state.studentName}
              name="studentName"
              //   onChange={(ev) => this.setState({ studentName: ev.target.value })}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="course">Chọn khóa học</label>
            <select
              value={this.state.course}
              name="course"
              onChange={this.handleChange}
            >
              <option value={"HTML5"}>HTML5</option>
              <option value={"CSS3"}>CSS3</option>
              <option value={"JS"}>JS</option>
              <option value={"ReactJS"}>ReactJS</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
