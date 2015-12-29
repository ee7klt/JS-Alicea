

function buildFunctions1() {
  var arr = [];

  for (var i = 0; i<3; i++) {
    arr.push(
      function() {
        console.log(i);
      }
    )
  }

  return arr;
}

var fs1 = buildFunctions1();
fs1[0]();
fs1[1]();
fs1[2]();



function buildFunctions2() {
  "use strict";
  var arr = [];

  for (var i = 0; i<3; i++) {
    let j = i;   // let variable is scoped to block
    // each time round the for loop runs, j will be a new variable in memory

    arr.push(
      function() {
        console.log("fs2 "+j);   // each time function is called, will point to different spot in memory
        // since each j resides in different spot each time round the loop
      }
    )
  }

  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();



function buildFunctions3() {

  var arr = [];

  for (var i = 0; i<3; i++) {

    arr.push(
      (function(j) {
        return function() {
          console.log("fs3 " + j)
        }
      }(i))
    )
  }

  return arr;
}

var fs3 = buildFunctions3();
fs3[0]();
fs3[1]();
fs3[2]();
