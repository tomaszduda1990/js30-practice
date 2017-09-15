const inputs = document.querySelectorAll('input');
console.log(inputs);

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	console.log(suffix);
	console.log(this.name); 
	document.documentElement.style.setProperty("--"+this.name, this.value+suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate)); 
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

document.addEventListener('mousemove', function(e){
	console.log(e);
})