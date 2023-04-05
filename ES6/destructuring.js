//❖Destructuring – Phá vỡ cấu trúc
var arr=[10,2,33,4,5,6];
var [x,y]=arr; // x=10; y=2
[x,y,z]=arr; // x=10, y=2, z=33

var person = {
    name:"Chung Chuung",
    age:45,
    address:"25 Vũ Ngọc Phan",
    phone:"09788611889"
}
var {name, phone} = person;
console.log("Name:",name);
console.log("Phone:",phone);
var {name,age,phone} = person;
console.log(name, age, phone);