// immediately invoked function expressions

/*
var fn = function(number) {
    return {
        getNumber: function() {
            return number;
        }
    };
}(42);
console.log(fn.getNumber());      // 42
*/

var fn = ((number) => {
    return {
        getNumber: function() {
            return number;
        }
    };
})(42);
console.log(fn.getNumber());      // 42

//--------------------------------------------------------



