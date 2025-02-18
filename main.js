const input_box=document.getElementById("input-box");
const list_container=document.getElementById("list-container");

function addTask(){
    if(input_box.value==''){
        alert("You need to write your task it cannot be empty");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        list_container.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_box.value='';
    saveData();
}

list_container.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
    saveData()
},false);


function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
    console.log(list_container.innerHTML)
}
function showTask(){
    list_container.innerHTML=localStorage.getItem("data");
}
showTask();