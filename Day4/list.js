let taskInput = document.getElementById("taskInput");
let addBtn=document.getElementById("addBtn");
let taskList=document.getElementById("taskList");

window.onload = loadTasks();
addBtn.addEventListener("click", addTask);
const addTask =() => {
    let task = taskInput.value.trim();
    if(task === " "){
        alert("Please Enter A Task");
        return;
    }
    createTask(task);
    taskInput.value = "";
}
