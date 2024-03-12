let button = document.querySelector("#btn");
let input = document.querySelector("#input-box");
let list = document.querySelector(".task-list");

button.addEventListener("click",()=>{
    if(input.value == ""){
        alert("Please write your task");
    }
    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        list.appendChild(newElement);
        input.value = "";
        newElement.querySelector("i").addEventListener("click",remove)
        function remove(){
            newElement.remove()
        }
    }
})