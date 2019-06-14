let data = true;

if (true) { // enter new scope, TDZ starts
    // Uninitialized binding for "data" is created
    console.log(data); // ReferenceError
//    let data; // TDZ ends, "data" is initialized with "undefined"
}
console.log(data); // true

//----------------------------------------------------

if (true) {
    console.log(typeof anUndeclaredVariable); // 'undefined'
//    console.log(typeof random); // ReferenceError (TDZ)
    let random;
}

//-------------------------------------------------------

if (typeof globalVariable === 'undefined') {
//    var globalVariable = { ··· };
}

//----------------------------------------------------

const obj = {};
obj.key = 42;
console.log(obj.key); // 42
// obj = {}; // TypeError

//-------------------------------------------------------

const obj0 = Object.freeze({});
obj0.key = 42;
console.log(obj0);   // {}