const text = document.getElementById("inputTask");
const addButton = document.getElementById("add");
const mainList = document.getElementById("mainList");
const myDate = document.getElementById("date");

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
myDate.innerText = formattedDate;


addButton.addEventListener("click", function(){
    const taskLists = document.createElement("div");
    mainList.appendChild(taskLists);
    const check = document.createElement("div");
    taskLists.appendChild(check);
    taskLists.classList.add("listAdd");
    const para = document.createElement("p")
    check.appendChild(para);
    const complete = document.createElement("input");
    complete.setAttribute("type", "checkbox");
    para.appendChild(complete);
    
    const todoList = document.createElement("div");
    taskLists.appendChild(todoList);
    const paragraph = document.createElement("p")
    todoList.appendChild(paragraph);
    paragraph.innerText = text.value;

    const erase = document.createElement("div");
    taskLists.appendChild(erase);
    const graph = document.createElement("p");
    erase.appendChild(graph);
    const del = document.createElement("button");
    graph.appendChild(del);
    del.innerText = "X";

    text.value ="";

    del.addEventListener("click",function(){
        mainList.removeChild(taskLists);
    });
    complete.addEventListener("click",function(){
        paragraph.classList.toggle("complete");
    })
}
);
