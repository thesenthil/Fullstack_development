// let div  = document.createElement("div")
// let h1= document.createElement("h1")
  document.getElementById("clock")

// Object.assign (h2.style,{
//   color : "red"

// })

// let h2 =document.createElement("h1")
 
// document.body.style.backgroundColor="#212121"
// document.body.style.color="#ffff"

// document.body.style.textAlign ="center"
// document.body.style.marginTop  ="300px"
// document.getElementsByTagName("div")
// div.style.backgroundColor ="grey"
// div.style.height="300px"
// div.style.textAlign="center"
// div.style.width="400px"
// div.style.border="50%"




function clock (){
    let time = new Date();
   let hrs = String(time.getHours()).padStart(2 ,"0")
   let min =  String(time.getMinutes()).padStart(2,"0")
   let sec = String(time.getSeconds()).padStart(2,"0")
 console.log(`${hrs} ${min} ${sec}`);
 h1.innerHTML=`${hrs} : ${min} : ${sec}`
 //h2.innerHTML=`${hrs} : ${min} : ${sec}`
 

}

div.appendChild(h1)
document.body.appendChild(div)
Object.assign(div.style ,{
  color:"red"
})

 div.appendChild(h1)
 document.body.appendChild(div)
//  div.appendChild(h2)
//  document.body.appendChild(div)
 
 
 clock();
 setInterval(clock, 1000)











   



