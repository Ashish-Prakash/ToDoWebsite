let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
console.log(todoInput);
function AddToDo(){
    let todo = todoInput.value;
    if(todo){
        let listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        let Ptag = document.createElement("p");
        Ptag.classList.add("todo");
        Ptag.innerHTML = todo
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML= "DELETE";
        deleteButton.addEventListener("click", function(){
            event.target.parentNode.remove();
        })
        listItem.append(Ptag);
        listItem.append(deleteButton);
        todoList.append(listItem);
        todoInput.value = "";
    }
    else{
        alert("Nothing Added in TODO");
    }
}
todoButton.addEventListener("click", function(){
    AddToDo();
});
todoInput.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        AddToDo();
    }
});
