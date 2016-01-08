var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i <arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2)

// take arr
// apply fn to each element of arr
// return resulting (new) arr
function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )

  }
  return newArr;
}


console.log(mapForEach(arr1, function(x) {return x+3}))
console.log(mapForEach(arr1, function(x) {return (x > 2)}))

var checkPastLimit = function(limiter, item) {
  return item > limiter;
}

// how to use checkPastLimit?
// it accepts two parameters
// curry it!

console.log(mapForEach(arr1, checkPastLimit.bind(this,2)))


// still not good enough
// can create a function that takes only limiter as argument??

var checkPastLimit2 = function(limiter) {
  return checkPastLimit.bind(this,limiter)
}

console.log(mapForEach(arr1, checkPastLimit2(2)))

// but above seems like cheating cuz still used bind
// can use closure to by pass bind
var checkPastLimit3 = function(limiter) {
  return function(item) {
    return item > limiter;
  }
}

console.log(mapForEach(arr1, checkPastLimit3(2)))
