//Default Parameters: Tham số mặc định
function add (num1, num2=100){ // num2 là tham số mặc định
    return num1+num2;
}
console.log(add(100)); // 200
console.log(add(100,200)); // 300
function printInfor(company,address){
    address = address || "Số 25 Vũ Ngọc Phan"; // address là tham số mặc định

    console.log("Welcome to, ", company,"Add:",address);

}
printInfor("Devmaster");
printInfor("Devmaster Academy","Tòa VIỆN CÔNG NGHỆ, Số 25 VNP");