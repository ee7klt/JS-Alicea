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
    var self = this;

    self.name = 'updated c object'
    console.log(self)
    var setname = function(newname) {
      self.name = newname;
    }
    setname('this is newname')
      console.log(self)
  }
}


c.log();
