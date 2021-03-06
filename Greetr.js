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

    //this.validate();
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
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      if (console) {   // IE doesn't have console unless it's open, so test for it.
        console.log(msg);
      }

      // this will be the calling object
      // to make it chainable, return this.

      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': '+this.fullName());
      }
      return this;
    },

    setLang: function(lang) {
      if (lang === 'en')
        this.language = lang;
      else if (lang === 'es')
        this.language = lang;
      else throw "Cannot setLang. Not a valid language";
      return this;

    },

    injectGreeting: function(selector, formal) {
    // inject greeting in to selector.

    if (!$) {
      throw 'jQuery not loaded';
    }

    if (!selector) {
      throw 'missing jQuery selector';
    }
     var msg
     // this is silly. i've repeated greet() from above
     // but i wanted greet to return 'this' and not msg
     // how to return both??
     if (formal) {
       msg = this.formalGreeting();
     }
     else {
       msg = this.greeting();
     }
      $(selector).text(msg);

      return this;
    }




  };
  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

  }(window,$));
