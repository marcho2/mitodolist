const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Escribe tu tarea 😡");
    } else {
        let li = document.createElement("li");

        let currentDateTime = new Date();
        let hora = currentDateTime.getHours();
        let minutohora = currentDateTime.getMinutes();
        let dia = currentDateTime.getDate();
        let mes = currentDateTime.getMonth() + 1;
        let año = currentDateTime.getFullYear();
        let timeString = `${hora}:${minutohora < 10 ? '0' : ''}${minutohora}`;
        let dateString = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${año}`;
        
        li.innerHTML = `${inputBox.value} ${dateString} ${timeString}`;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);