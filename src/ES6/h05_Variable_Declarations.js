
function fn(param) {
//    let param; // SyntaxError: Identifier 'param' has already been declared
}

//-------------------------------------------------------

function fn(param) {
    {
        let param;
    }
}

//--------------------------------------------------------

let notGlobal = "hello";
var isGlobal = "what up";

  { console.log(notGlobal); } // hello
  { console.log(isGlobal); } // what up

  global.isGlobal //'what up'
  global.notGlobal // undefined

//------------------------------------------------------------