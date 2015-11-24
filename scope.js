


function a() {

  function b() {   // change lexical env of b by putting it inside a
    // outer reference of b is now a cuz that's where it's physically sitting
    // b is created when a runs. i.e. b in created by a
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();  // returns 2
b();   // can no longer call b at the global level
      // uncaught ReferenceError: b is not defined
