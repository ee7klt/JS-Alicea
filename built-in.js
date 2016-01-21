var a = new Number(3)
console.log(a)
console.log(Number.prototype)
console.log(a.toFixed(2))

var b = new String("John")
console.log(b)
console.log(b.__proto__)
console.log(b.indexOf('o'))
console.log("John".length)

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

console.log("John".isLengthGreaterThan(3))

Number.prototype.isPositive = function() {
 return  this > 0
}
//console.log(3.isPositive())

var c = new Number(3)
console.log(c.isPositive())
