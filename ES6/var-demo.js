// Demo variable - var
var x=100;
if(x===100){
    var x=200;
    var y=300;
    console.log("x bên trong if:",x);
    console.log("y bên trong if:",y);
}
console.log("x bên ngoài if:",x);
console.log("y bên ngoài if:",y); // lỗi ở đây
