const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const deleteBtn = document.querySelector('.delete-all');
const toggleAllBtn = document.querySelector('.toggle-all');


function addItem(e){
	e.preventDefault(); 
	const text = (this.querySelector('[name = item]')).value;

	const item = {
		text: text,
		done: false,
	}
	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items)); 
	console.log(item);
	
	
	this.reset();
}
function populateList(plates = [], platesList){
	platesList.innerHTML = plates.map((plate, i) => {
		return `
		<li>
			<input type="checkbox" data-index = ${i} id = "item${i}" ${plate.done ? 'checked' : ''} />
			<label for="item${i}">${plate.text}</label>
		</li>`;
	
	}).join('');
};

function toggleDone(e){
	if(!e.target.matches('input')) return;
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items))
	console.log(items[index].done);
	populateList(items, itemsList);
};
function deleteAll(){
	localStorage.removeItem('items');
	items = [];
	populateList(items, itemsList);	

};
function toggleAll(){
	let counter = 0;
	items.forEach(function(el){
		if(el.done === true){
			counter++;
		}
	});
	console.log(counter);
	items.forEach(function(el){
		if(counter == items.length){
			el.done = false;
		}else{
			el.done = true;
		}
	})
	localStorage.setItem('items', JSON.stringify(items))
	populateList(items, itemsList);	
	
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
deleteBtn.addEventListener('click', deleteAll);
toggleAllBtn.addEventListener('click', toggleAll);
populateList(items, itemsList);
