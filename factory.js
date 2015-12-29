function makeGreeting(language) {  // factory function
  return function (firstname,lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}


// language closed in by return function
// lets us do something neat like this ...


// upon execution of makeGreeting, return function points to
// language = 'en' in memory
// makeGreeting then ends
// but language = 'en' is closed in by the return function already
// so greetEnglish is return function with language set to 'en'
var greetEnglish = makeGreeting('en');


// makeGreeting executed again
// gets it's own execution context
// this time with language set to 'es'
// return function closes in different language spot in memory
// where it is set to 'es'
var greetSpanish = makeGreeting('es');


// both functions sit same spot lexically inside makeGreeting
// but point to two  spots in memory
// because created in two different execution contexts

greetEnglish('alex','tah')
