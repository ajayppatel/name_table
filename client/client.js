function addName() {
	var nameField = document.getElementById("nameField");
	var name = nameField.value;

	var table = document.getElementById("nameTable");

	var row = table.insertRow();

	var cell = row.insertCell();

	cell.innerHTML = name;
};