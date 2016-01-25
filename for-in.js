Array.prototype.myCustomFeature = 'cool';

var arr = ['a','b','c'];

for (var prop in arr) {
  if (arr.hasOwnProperty(prop)) {
  console.log(prop + ': ' + arr[prop]);
}
}
