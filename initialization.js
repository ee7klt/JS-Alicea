var people = [
  {
    // the 'john object'
    first: 'john',
    last: 'doe',
    address: [
      '111',
      '222'
    ]
  },
  {
    // the 'jane' object
    first: 'jane',
    last: 'doe',
    address: [
      '333',
      '444'
    ],
    greet: function() {
      return 'Hello!';
    }
  }
]


console.log(people);
console.log(people[1].greet());
