//what is higher order function in javascript?
//A higher-order function is a function that can take other functions as arguments or return a function as its result. In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as numbers or strings. This allows you to create higher-order functions that can operate on other functions, enabling powerful abstractions and functional programming techniques.

// callback function:- A callback function is a function that is passed as an argument to another function and is executed at a later time, usually after some asynchronous operation or event has completed. In JavaScript, callbacks are commonly used for handling asynchronous tasks, such as making API requests, reading files, or responding to user interactions.

//map filter reduce:- The map, filter, and reduce methods are higher-order functions in JavaScript that operate on arrays. They allow you to transform, filter, and reduce the elements of an array in a concise and functional way.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//*************************** map *************************** //
// let num2=num.map((num)=>{
//     return num*num;
// })
// console.log(num2);

// let num3=num.map((values,index,array)=>{
//     console.log("value is",values);
//     console.log("index is",index);
//     console.log("array is",array);
//     // return values*values;
// })

//*************************** filter *************************** //
// let num4=num.filter((values)=>{
//     return values>5;
// })
// console.log(num4);

//*************************** reduce *************************** //
// let num5=num.reduce((accumulator,values )=>{
//     return accumulator+values;
// },5)
// console.log(num5);

// let num6=num.forEach((values,index,array)=>{
//     console.log("value is",values);
//     console.log("index is",index);
//     console.log("array is",array);
// })
// let obj = {
//     name: "sanchit",
//     age: 20,
//     email: "sanchit@example.com"
// };
// for(const key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// for (const element of object) {
//     console.log(key);
    
// }


//******************* MAP ********************* */
// const map = new Map();
// map.set('name', 'sanchit');
// map.set('age', 20);
// map.set('email', 'sanchit@example.com');
// map.set('name', 'sanchit'); // Duplicate key, will overwrite the previous value

//console.log(map);

//dstructuring in map

// for(const [key , value] of map){
//     console.log(key, value);
// } 
//******************************** */
//for of loop in object not possible because object is not iterable but we can use for in loop to iterate over the object properties.
// const myobject = {
//     name: "sanchit",
//     age: 20,
//     email: "sanchit@example.com",
//     subject: "javascript"
// }
// for(const key in myobject){
//     console.log(key, myobject[key]);
// }



//for in for array
// const myarray = [1, 2, 3, 4, 5];
// for(const key in myarray){
// console.log(myarray[key]);
//}


// for each loop in array
//  
// const coding=["value", "index", "array"];
// here i am use foreach an callback funtion 
// coding.forEach( function (val){
//     console.log(val);
// })


// call back function with arrow function
// coding.forEach( ( val)=>{
  //console.log(val);
    
// })

// function printme (item){
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach((item , index, arr)=>{
//     console.log(item , index , arr);
// })

//  const mycoding =[
//     {
//         languagename : "js",
//         file: "code"
//     },
//      {
//         languagename : "java",
//         file: "jav"
//     },
//      {
//         languagename : "python",
//         file: "py"
//     },
//  ]

//   mycoding.forEach((item )=>{
//     console.log(item.languagename)
//   }) 


//   const value = coding.forEach((item)=>{
//    // console.log(item);
//     return item ;

//   })
//   console.log(value)

//**************** FILTER     ********************** */

//const number =[ 1,2,3,4,5,6,7,8,9,10]
 // let newnums = number.filter((num)=> num>4)
//  let newnums = number.filter((num)=>{
//     return num>4 //jab mujhe scope ke saath call karna rahega toh return jaruri hai otherwise  empty dega
//  })
//  const newnums = []

//  number.forEach((num) => {
//     if(num>4){
//          newnums.push(num)
//     }
    
//  });
    
//     console.log(newnums);



//******************** MAP FUNCTION  *************************** */
//const mynumbers = [1,2,3,4,45,56,7,8,9]
//const newnums = mynumbers.map((num)=>  num+10)



//******* Chaining  */
//  const newnums = mynumbers
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=> num>=40)
// console.log (newnums)


//  ************** REDUCE FUNCTION ******************

 const number = [1,2,3,4,5,6]
  

//  const mytotal =  number.reduce(function( acc , currval){
//     console.log(`acc:${acc} and currval ${currval}`)
//     return acc+ currval
//  } , 0)

const mytotal = number.reduce(( acc , curr)=> acc+curr,0)
  console.log(mytotal);

const shoppingcart =[
    {
        item :"js",
        price:300
    },
    {
        item :"python",
        price:300
    },
    {
        item :"c++",
        price:300
    }
]
 const  pricetopay =shoppingcart.reduce(( acc, item )=>(acc + item.price),0)

 console.log(pricetopay);
 

  





 