

var john = G$('john','peter','en');
console.log(john.greet(true));
john.log().greet(true);   // chainable.
john.setLang('es').greet().log();



$('#login').click(function() {
  john.injectGreeting('#greeting');
})
