let task = document.getElementById("task");
console.log(task);
let list =document.getElementById("list")


 document.getElementById("btn").addEventListener('click',()=>{

    console.log(task);
   //  let li = document.createElement("li")
   //  li.innerHTML=`${task.value}`
   //  list.appendChild(li)

   if(task.value==""){
      alert("please enter task")
      return;
   }else{
       let li = document.createElement("li")
       li.innerHTML=`${task.value}`
       console.log(task.value);
       

    let complete = document.createElement("button");
     complete.innerHTML="complete";
     complete.addEventListener("click",()=>{
      li.style.textDecoration="line-through";
     })
     let dlt = document.createElement("button");
     dlt.innerHTML="remove";
     dlt.addEventListener("click",()=>{
      li.remove();
      
     })
     task.value="";

      li.appendChild(complete)
      li.appendChild(dlt)
      list.appendChild(li) 




       
   //  list.appendChild(li)
      
   }

    
 })
    
