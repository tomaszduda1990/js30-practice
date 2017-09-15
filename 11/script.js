// variables

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullscreen');

// functions

function togglePlay(){
	if(video.paused){
		video.play();
	}else {
		video.pause();
	}
}
function scrub(e){
	console.log(e);
	const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
	video.currentTime = scrubTime;

};
function updateButton(){
	const icon = this.paused ? "►" : "||";
	toggle.textContent = icon;
}

function skip(){
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip); 
}

function handleRangeUpdate(){
	video[this.name] = this.value;

};
function handleProgress(){
	const percent = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = percent+"%";
};
//event listeners

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', ()=> {
	if(mouseDown){
		scrub();
	}
});
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);



let fullScreenClicked = false;

var fullscreenButton = document.querySelector('.fullscreen');
var fullscreenDiv    = document.querySelector(".viewer");
var fullscreenFunc   = fullscreenDiv.requestFullscreen;
if (!fullscreenFunc) {
  ['mozRequestFullScreen',
   'msRequestFullscreen',
   'webkitRequestFullScreen'].forEach(function (req) {
     fullscreenFunc = fullscreenFunc || fullscreenDiv[req];
   });
}
function enterFullscreen() {
  fullscreenFunc.call(fullscreenDiv);
}
fullscreenButton.addEventListener('click', enterFullscreen);




  

 