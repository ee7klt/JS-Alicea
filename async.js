// long running funciton

function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while(new Date() < ms) {}
  console.log('finished function waitThreeSeconds')
}

function clickHandler() {
  console.log('click event!')
}

//listen for the click event
document.addEventListener('click', clickHandler);
// clickHandler run when stack empty and JS has chance to look at event queue.

waitThreeSeconds();
console.log('finished execution')
