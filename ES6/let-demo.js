console.log("Demo let ");
let x=100;
if(x===100){
    let x=200;
    let y=300;
    console.log("Giá trị x trong if:",x);
    console.log("y bên trong if:",y);
}
console.log("Giá trị x ngoài if:",x);
console.log("y bên ngoài if:",y);// lỗi ở đây: ReferenceError: y is not defined