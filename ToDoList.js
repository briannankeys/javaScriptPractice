 const generateListText = (text, deadline) => {
        return text + " the deadline is: " + deadline;
}

const addTodo = (toDo, checked) => {
        let myList = document.getElementById("myList");
        let newItem = document.createElement("li");
        let checkBox = document.createElement("input"); 
        checkBox.type = "checkbox";
        checkBox.checked = checked || toDo.finished
        newItem.appendChild(checkBox)
        let listText = document.createElement("span")

        listText.innerText = generateListText(toDo.text, toDo.deadline);
        newItem.appendChild(listText);
        myList.appendChild(newItem);
}

const clearField = (field) => {
        field.value = "";
}