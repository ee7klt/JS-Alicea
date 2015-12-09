function greet(f,l,lang) {
  lang = lang || 'en';

  if (lang === 'en') {
    console.log('Hello ' + f + ' ' +l)
  }

  if (lang === 'es') {
    console.log('Hola ' + f + ' ' +l)
  }
}


greetEnglish(f,l) {
  greet(f,l,'en')
}

greetSpanish(f,l) {
  greet(f,l,'es')
}
