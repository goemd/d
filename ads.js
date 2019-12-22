$(document).ready(function() {

$('#contents').hide();



});

var idMan = 0; 
$(document).ready(function(){
  $("input").keydown(function(event){ 
  	idMan = event.which;
  	if(idMan == 73){
  		$('#contents').show();
  	}
  	else{
  		window.location.assign("https://www.tracemyip.org/")
  	}

  });
});