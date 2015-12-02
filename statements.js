var a;


if (a === 3) {

}


greet();

function greet() {
  console.log('hi i am a function statement');
}




var anonymousGreet = function () {
  console.log('hi i am a function expression');
}

anonymousGreet();

function log(a) {
  a()
}

log(function () {
  console.log('hi from FCF')
})
