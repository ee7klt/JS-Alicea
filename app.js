


$('#login').click(function() {
  var user = G$($('#firstName').val(),$('#lastName').val());
  user.setLang($('#lang').val()).injectGreeting('#greeting',true).log();
})
