
let getNumber = () => 42;

console.log(typeof getNumber); // function
console.log(getNumber()); // 42

//--------------------------------------------------

var getPrice = (quantity, tax) => (quantity * 5) * (1 + tax);
console.log(getPrice(2, .095)); //  10.95

//---------------------------------------------------

var getNumber0 = data => ({ data: "check", number: 42 });
// effectively equivalent to:
/*
var getNumber0 = function(data) {
    return {
        data: "check",
        number: 42
    };
};
 */