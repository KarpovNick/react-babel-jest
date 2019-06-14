/*
function Employee(firstName, department, salary) {
    this.firstName = firstName;
    this.department = department;
    this.salary = salary;
    this.getInfo = function() {
        // outer function context = Employee object
        return function () {
            // inner function context = Global object
            console.log(this.firstName + " from " +
                this.department + " earns " + this.salary);
        };
    }
}

let jim = new Employee('Jim', 'Finance', 5200);

let printInfo = jim.getInfo();
printInfo();  // undefined from undefined earns undefined
*/

//-----------------------------------------------------------
/*
function Employee(firstName, department, salary) {
    this.firstName = firstName;
    this.department = department;
    this.salary = salary;
    this.getInfo = function() {
        // outer function context = Employee object
        return () => {
            // inner function context = surrounding context = Employee object
            console.log(this.firstName + " from " +
                this.department + " earns " + this.salary);
        };
    }
}

let jim = new Employee('Jim', 'Finance', 5200);
let printInfo = jim.getInfo();
printInfo();  // Jim from Finance earns 5200

*/
//-------------------------------------------------------------
/*
function Employee() {
    this.firstName = 'Mike',
        this.department = 'HR',
        this.salary = 4500,
        this.getContext = () => {
            console.log(this);
        }
}
let mark = new Employee();
mark.getContext(); // [Employee object]
let context = mark.getContext;
context(); // [Employee object] (regardless of a function invocation)
*/
//-----------------------------------------------------------------

var details = {
    number: 42,
    operation: function () {
        return () => console.log(this.number);
    }
};
var details2 = {
    number: 84
};
details.operation().bind(details2)(); // 42

//------------------------------------------------------------------

var product = (x, y) => x * y;
console.log(product.call(null, 2, 3));           // 6
console.log(product.apply(null, [2, 3]));        // 6
var multiply = product.bind(null, 2, 3);
console.log(multiply ());                        // 6

//------------------------------------------------------------------

// var newFn = () => {},
//    object = new newFn();  // error - you can't use arrow functions with'new'

//-------------------------------------------------------------------






