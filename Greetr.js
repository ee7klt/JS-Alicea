(function(global,$) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  var Greetr.init = function(firstName, lastName, language) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || '';
    this.greet = function() {
      console.log('hola, ' + this.firstName + '. como estas?');
    }

  }

  global.Greetr = global.G$ = Greetr;

  }(window,$));
