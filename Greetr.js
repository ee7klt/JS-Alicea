(function(global,$) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

// these are not exposed.
var supportedLang = ['en','es'];
var greetings = {
  en: 'Hello',
  es: 'Hola'
};

var formalGreetings = {
  en: 'Greetings',
  es: 'Saludos'
};

var logMessages = {
  en: 'Logged in',
  es: 'Inició sesión'
};


   Greetr.init = function(firstName, lastName, language) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || '';


  }

  // these are exposed
  Greetr.prototype = {
  fullName : function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      // will find supportedLang up the scope chain.
      if (supportedLang.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.fullName() + '.';
    },

    greet: function(formal) {
      if (formal) return this.formalGreeting();
      else return this.greeting();
    }


  };
  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

  }(window,$));
