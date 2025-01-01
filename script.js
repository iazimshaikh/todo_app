let arrlist=[];

const input=document.getElementById('data');
const list=document.getElementById('list');

 function addTodo(){
     let li=document.createElement("li");
     li.innerHTML=input.value;
     list.appendChild(li);

     let span = document.createElement("span");
     span.innerHTML="<img src='cross.png' width='20px' height='20px'>";
     li.appendChild(span);

     input.value="";
     saveTodos();
 }

 list.addEventListener("click",function(e){
     if(e.target.tagName==="IMG"){
         const li = e.target.closest('li');
         if (li) {
             li.remove();
         }
         saveTodos();
     }
 },false);

 function saveTodos(){
     localStorage.setItem("data",list.innerHTML)
 }

 function showList(){
     list.innerHTML = localStorage.getItem("data")
 }

 showList();