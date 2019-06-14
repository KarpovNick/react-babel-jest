
function getSum(a,b) {
    a = (a !== undefined) ? a : 1;
    b = (b !== undefined) ? b : 41;
    console.log( a + b );
}
getSum();                //42
getSum(1, 2);       //3
getSum(10);            //51
getSum(null, 6);    //6

//-----------------------------------------------------------

var getSum2 = function(a = 1, b = 41) {
    console.log(a + b);
}
getSum2();                //
getSum2(1, 2);       //
getSum2(10);           //
getSum2(null, 6);    //

//------------------------------------------------------------

var getAnswer = function(number = 42, item = "universe") {
    console.log(number + " is the answer to " + item);
}
getAnswer(undefined, "life"); // 42 is the answer to life

//--------------------------------------------------------------

var getName = function(firstName = "John", lastName = "Doe") {
    console.log(firstName + " " + lastName);
}
getName("Jane"); // Jane Doe

//----------------------------------------------------------------

var defaultName = "John";

var getName = function(firstName = defaultName, lastName = "Doe") {
    console.log(firstName + " " + lastName);
}

getName(); // John Doe

//-----------------------------------------------------------------

var getFirstName = () => "John";

var getName = function(firstName = getFirstName(), lastName = "Doe") {
    console.log(firstName + " " + lastName);
}

getName(); // John Doe

//------------------------------------------------------------------

var getName = function(firstName, lastName = "Doe") {
    console.log(arguments.length);
}
getName("John"); // 1

//-------------------------------------------------------------------

var getPrice = function(quantity = price, price = 5) {
    console.log(quantity + ", " + price);
}
// getPrice(); // ReferenceError: price is not defined

//--------------------------------------------------------------------

var getNumber = new Function("number = 42", "return number;");
console.log(getNumber()); // 42

