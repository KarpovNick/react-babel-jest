var price = 10; // Global Declaration
function showPrice() {
        var price = 12; // Local Declaration using var
        console.log(price); // 12
}
showPrice();
console.log(price); // 10

// Following is an example of function level scopes with IIFE:
var price = 10; // Global Declaration
(function () {
        var price = 12; // Local Declaration using var
        console.log(price); // 12
})();
console.log(price); // 10

var price = 10;
if (price) {
        price = 12;
        console.log(price); // 12
}
console.log(price); // 12


