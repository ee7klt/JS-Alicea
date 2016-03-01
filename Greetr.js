(function(global,$) {
  var Greetr = function(firstName, lastName, language) {
    return new init(firstName, lastName, language);
  }

  var init = function(firstName, lastName, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;
    this.greet = function() {
      console.log('hola, ' + this.firstName + '. como estas?');
    }

  }

  window.Greetr = window.G$ = Greetr;

  }(window,$));
