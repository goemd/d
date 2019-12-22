var iDn = 31;
let input = document.querySelector('#getInput');

input.onchange = handleChange;

function handleChange(event) {
  iDn = event.target.value;
    if(iDn == 770)
	{
		window.location.assign("https://secure.ebookmd.com/go")
	}
}
