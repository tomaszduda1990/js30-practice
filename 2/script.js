const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate(){
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const h = now.getHours();

	const secDegrees = (sec/60)*360+90;
	const minDegrees = (min/60)*360+90;
	const hourDegrees = (h/60)*360+90;
	secondHand.style.transform = "rotate("+secDegrees+"deg)";
	minHand.style.transform = "rotate("+minDegrees+"deg)";
	hourHand.style.transform = "rotate("+hourDegrees+"deg";
	console.log(sec);
}
setInterval(setDate, 1000)