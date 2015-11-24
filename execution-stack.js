function a() {
  b();
  var c;
}

function b() {
  console.log('called b');
  var d;
}

a();
var d;
