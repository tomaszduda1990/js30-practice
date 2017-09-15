var checkbox = document.querySelectorAll('.inbox input[type="checkbox"]');

var lastChecked; 
function handleCheck(e){
	let inBetween = false;
	if(e.shiftKey && this.checked){
		checkbox.forEach(checkbox => {
			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween;
			}
			if(inBetween){

				checkbox.checked = true;
			}
		});
	}
	lastChecked = this; 
};
checkbox.forEach(checkbox => checkbox.addEventListener("click", handleCheck));