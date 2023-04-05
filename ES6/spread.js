//Spread Syntax – Cú pháp spread
// sao chép các phần tử cũ, bổ sung thêm phần tử mới
var arr=[1,2,3,4];
console.log(arr);
var arrNew = [...arr, 100,200];
console.log(arrNew);

arrNew = [arr,100,200];
console.log(arrNew);