
function toggleSidebar(){
document.querySelector('.sidebar').classList.toggle('active');
document.querySelector('.overlay').classList.toggle('active');
}

function done(el){
el.classList.toggle('done');
let list = document.getElementById('taskList');
list.appendChild(el);
}
