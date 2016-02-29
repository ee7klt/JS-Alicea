var q = jQuery("ul"); // finds all ul. jQuery is identical to $
console.log(q);



var p = $("ul.people li") // find all li of ul with class people
console.log(p);

var z = $("ul.people").addClass("newclass").removeClass("people");
console.log(z);
