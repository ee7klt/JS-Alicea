function greet(firstname, lastname, language) {
   console.log('<___________')
 language = language || 'en'   // defaults
 if (arguments.length === 0) {
   console.log('missing paramters! enter at least one!')
   console.log('___________>')
   return;   // return kicks us out of the function .won't execute any of the later code.
 }


  console.log(firstname)
  console.log(lastname)
  console.log(language)
  console.log(arguments)   //auto available
  console.log('args[0] = ' +arguments[0])
  console.log('___________>')
}

greet()   // hoisting sets params to undefined
greet('John')
greet('John','Doe')
greet('John','Doe','es')
