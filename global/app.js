
function a() {
  b();
  var c;
}

function b() {
  console.log('Called b');
  var d = 1;
}


a();
var d = 2;

console.log(d)
