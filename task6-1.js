function OneClick() {
	let target = event.currentTarget;
	target.dataset.status = 'done';
}

let tasks = document.getElementById('tasks');
let divs = tasks.getElementsByTagName('div');

for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', OneClick);
}