
let values = [200, 300, 400];
let newSet = [100, ...values, 500]

console.log(newSet);  // [100, 200, 300, 400, 500]

//--------------------------------------------------------

let numbers = [-25, 100, 42, -1000];
console.log(Math.max(...numbers, 900));        // 900

//---------------------------------------------------------

function printInput(...input) {
    console.log(input);
}
let input = [,,];
printInput(...input); // [undefined, undefined]

//-----------------------------------------------------------


