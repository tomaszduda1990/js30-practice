window.addEventListener('keydown', function(e){
	console.log(e.keyCode);
	const audio = document.querySelector('audio[data-key="'+e.keyCode+'"');
	const key = document.querySelector('.key[data-key="'+e.keyCode+'"');
	if(!audio){return;}
	console.log(audio);
	console.log(key)
	audio.currentTime = 0;
	audio.play();
	console.log(e);
	key.classList.add('playing');
});
const keys = document.querySelectorAll('.key');
var removeTransition = function(e){
	console.log(e);
	if(e.propertyName !=='transform') return;
	this.classList.remove('playing');
};
keys.forEach(key => key.addEventListener('transitionend', removeTransition));