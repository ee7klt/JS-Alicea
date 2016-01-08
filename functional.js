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
