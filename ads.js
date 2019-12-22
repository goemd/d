$(document).ready(function() {

$('#contents').hide();



});

var iDn = 31;
let input = document.querySelector('#getInput');

input.onchange = handleChange;

function handleChange(event) {
  iDn = event.target.value;
    if(iDn == 770)
	{
		$('#contents').show();
	}
}
