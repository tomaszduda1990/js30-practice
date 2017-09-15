const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e){
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	let x = e.offsetX;
	let y = e.offsetY;
	console.log(x, y); 

	if(this !== e.target){
		x = e.target.offsetLeft;
		y = e.target.offsetTop;
	}
	const xWalk = Math.round((x/width*walk)-(walk/2));
	const yWalk = Math.round((y/height*walk)-(walk/2));
	console.log(yWalk, xWalk); 
	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
		 ${-xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
		 ${yWalk}px ${-xWalk}px 0 rgba(255, 255, 0, 0.7),
		 ${-yWalk}px ${xWalk}px 0 rgba(0, 255, 255, 0.7) 


	`;
}
hero.addEventListener('mousemove', shadow)