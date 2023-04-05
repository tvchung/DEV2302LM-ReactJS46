// demo const - khai báo biến hằng 
    // => không cho phép khai báo lại, gán lại
const PI=3.14;
console.log("PI:",PI);

// gán lại => lỗi:TypeError: Assignment to constant variable.
PI=3.1415;
console.log("PI:",PI);

// const PI=3.141516;=> lỗi