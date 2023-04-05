// normal function: add(a,b)
function add(a,b){
    return a+b;
}
console.log(add(100,300));
add = function(a,b){
    return a+b;
}
console.log(add(100,300));
// arrow function: printf(name)
var printf = (name)=>{
    console.log("Welcome to, ", name);
}
printf("Devmaster")
const show=(address)=>{
    console.log("Địa chỉ:",address);
}
show("25 Vũ Ngọc Phan")