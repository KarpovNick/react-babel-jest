
var showCollections = function (id, ...collection) {
    console.log(collection instanceof Array);
};
showCollections(42, "movies", "music");  // true

//----------------------------------------------------------

var showCollections = function (id, ...collection) {
    console.log(collection);
};
showCollections(42, "movies", "music"); // ["movies", "music"]

//-----------------------------------------------------------

var showCollections = function (id, ...collection) {};
console.log(showCollections.length); // 1

//--------------------------------------------------------------

var showCollections = function (id, ...collection) {
    console.log(arguments.length);
};
showCollections(123, "movies", "music"); // 3

//---------------------------------------------------------------

var getFirst = new Function("...args", "return args[0]");
console.log(getFirst(1, 2));   // 1

//------------------------------------------------------------------

