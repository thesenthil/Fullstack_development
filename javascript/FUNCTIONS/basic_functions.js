// // function myFunction() {

// // console.log("s");
// // console.log("h");
// // console.log("a");
// // console.log("a");
// // console.log("g");
// // console.log("t");
// // }
// //  //console.log(myFunction());
// //  myFunction();


// //  function addtwonumbers(num1,num2){
// //      console.log(num1+num2);
// //  }
// function addtwonumbers(num1,num2){
//     // let result = num1 + num2;
//     // return result;
//     //console.log("This line will not be executed because it is after the return statement.");
//     return num1 + num2;
// }
// const result = addtwonumbers(5, 6);
// //console.log("result: " ,result);

// function loginusermessage(username= "sanchit"){
//     if(username === undefined){
//         console.log("Please provide a username");
//         return 
    
//     }

//     return `${username} just logged in`;
// }

// console.log(loginusermessage("sanchit"));

// console.log(loginusermessage());

 //rest operator:- The rest operator is a feature in JavaScript that allows you to represent an indefinite number of arguments as an array. It is denoted by three dots (...) followed by a variable name. The rest operator can be used in function parameters to collect all remaining arguments into a single array, making it easier to work with variable numbers of arguments.
function calculatecartprice( val1,val2,...num1)
{
    return num1;
}
//console.log(calculatecartprice(1000 ,300, 500, 2000, 10000));

const user = {
    name: "sanchit",
    age: 20,
    email: "sanchit@example.com",
    Price :200
}
function handleobject(anyobject){
   console.log(`username is ${anyobject.name} and age is ${anyobject.age} and email is ${anyobject.email} and price is ${anyobject.Price}`);
}

handleobject(user);

const mynewarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 function returnsecondvalue(getarray){
    return getarray[1];
 }
 console.log(returnsecondvalue(mynewarray));

  
