
// let a=300;
//  if(true){
//     let a=10;
//  const b=20;
//  var c=30;
//  console.log(a);
//  }

  //console.log("i am outside the block", a);
  //console.log(b);
//   console.log(c);

 function one (){
   const username = "sanchit";

   function two(){
     const website = "youtube";
      //console.log(username);
      //console.log(website);
   }
   //console.log(website);

  two();
 }
 one();  


 if (true){
    const username = "sanchit";{
      if(username === "sanchit"){
        const website = "youtube";
         //console.log(username + " " + website);
      }
     // console.log(website);
    }
    //console.log(username);
   }
 
   ///*********interesting**** */
    //console.log(addone(5));
    addone(5);

   function addone (num){
      return num + 1;
   }
   console.log(addone(5));
   
//console.log(addtwo(5));
   const addtwo = function(num){
      return num + 2;
   }
  