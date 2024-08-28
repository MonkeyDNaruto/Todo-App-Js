const inputBox = document.querySelector(".input-box");
const add = document.querySelector(".btn");
const listContainers = document.querySelector(".list-container");

function addTasks(event) {
    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainers.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("delete-btn");
        li.appendChild(span);
    }
    inputBox.value = "";
    
}

function removeTask(e) {
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}
add.addEventListener('click', addTasks);

listContainers.addEventListener('click', removeTask);