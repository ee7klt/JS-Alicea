
function b() {
  var myVar;
  console.log("b myVar = " + myVar)

}


function a() {
 var myVar = 2;
 console.log("a myVar = " + myVar)

 b()
}



var myVar = 1;
console.log("global myVar = " + myVar)
a();
