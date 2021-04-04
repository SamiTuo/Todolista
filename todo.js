var input = document.getElementById("input");
var list = document.getElementById("list");

list.addEventListener("click", checkRemove);

//Funktio joka luo uuden tehtävän listaan
function newTodo() {
	//Tarkastaa että kenttä ei ole tyhjä
	if (input.value == "") {
		alert("Kenttä ei saa olla tyhjä!");
		input.style.border = "4px solid red";

	}
	//Tarkastaa, että kentään syötetyssä arvossa on vähintään 3 merkkiä
	else if (input.value.length < 3) {
		alert("Sanan on oltava vähintään 3 merkkiä pitkä");
		input.style.border = "4px solid red";

	} else {

		//Luo divin ja tekee sille classin todo
		var task = document.createElement("div");
		task.classList.add("todo");

		//Luo divin alle li elementin ja lisää siihen käyttäjän antaman tiedon
		var newTask = document.createElement("li");
		newTask.innerText = input.value;
		newTask.classList.add("todo-item");
		task.appendChild(newTask);

		//Luo li elementille viereen check-painikkeen
		var checkMark = document.createElement("button");
		checkMark.innerHTML = '<i class="fas fa-check"></i>';
		checkMark.classList.add("complete-btn");
		task.appendChild(checkMark);

		//luo li elementin perään poista-painikkeen
		var removeButton = document.createElement("button");
		removeButton.innerHTML = '<i class="fas fa-times"></i>';
		removeButton.classList.add("x-btn");
		task.appendChild(removeButton);

		list.appendChild(task);

		input.style.border = "1px solid black";

		input.value = "";
	}
}
//Merkitsee tehtävän tehdyksi tai poistaa tehtävän listasta
function checkRemove(e) {
	var i = e.target;
	var todo = i.parentElement;

	if (i.classList[0] == "x-btn") {
		todo.innerHTML = "";
	}
	if (i.classList[0] == "complete-btn") {
		todo.style.textDecoration = "line-through";
		todo.style.backgroundColor = "#7FFF00";

	}
}

//Tallentaa listan localstorageen
function saveTodo() {
	var save = document.getElementById("list").innerHTML;
	localStorage.setItem("Todo", save);
}
//Hakee tallennetun listan localstoragesta
function getTodo() {
	document.getElementById("list").innerHTML = localStorage.getItem("Todo");
}
//Tyhjentää koko listan
function removeAll() {
	document.getElementById("list").innerHTML = "";
}