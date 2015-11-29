var Alex = {
  firstname: 'Alex',
  lastname: 'Tah',
  address: {
    street: 'rumpai',
    city: 'Kuala Lumpur'
  }
};



function greet(person) {
  console.log('Hi ' + person.firstname);
}


greet(Alex)


greet({
  firstname: 'Mary',
  lastname: 'Doe'
});

Alex.address2 = {
  street: '1 infinite loop'
}

console.log(Alex)
