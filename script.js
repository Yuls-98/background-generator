var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", checkItem);
	ul.appendChild(li);
	createListButton(li);
	input.value = "";
}


function createListButton(li){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Eliminar"));
	li.appendChild(button);
	button.classList.add("liBttn");
	button.addEventListener("click", deleteItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function checkItem(event){
	event.target.classList.toggle("done");
}

function deleteItem(event){
	event.target.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);