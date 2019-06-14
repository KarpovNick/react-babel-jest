
let arr = [];
for (var i=0; i < 3; i++) {
    arr.push(function () { return i });
}
let value = arr[0]();
console.log(value); // 3

//-----------------------------------------------------

let arr0 = [];
for (let i=0; i < 3; i++) {
    arr0.push(function () { return i });
}
let value0 = arr0[0]();
console.log(value0); // 0

//------------------------------------------------------

// for (const i=0; i<3; i++) {     // TypeError: Assignment to constant variable (due to i++)
//    console.log(i);
// }
