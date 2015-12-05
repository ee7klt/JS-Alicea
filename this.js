//console.log(this)

function a() {
  console.log(this)
  this.newvariable = 'hello';
}

//a();
//console.log(newvariable)

var b = function () {
  console.log(this)
}

//b();



var c = {
  name: 'The c object',
  log: function () {
    this.name = 'updated c object'
    console.log(this)
    var setname = function(newname) {
      this.name = newname;
    }
    setname('this is newname')
      console.log(this)
  }
}


c.log();
