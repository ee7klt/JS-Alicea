var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}

console.log(objectLiteral)
var json = JSON.stringify(objectLiteral)
console.log(json)
console.log(JSON.parse(json))
