// Rest Parameters: Tham số còn lại
function add(num1, num2, ...otherNum){
    console.log(num1, num2);
    console.log(...otherNum);
    console.log("==================");
}

add(100,200,1,2,4)
add(1,2,6,7,8,9)
