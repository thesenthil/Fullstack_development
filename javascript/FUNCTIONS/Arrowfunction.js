const user = {
    name: "John Doe",
    age: 30,
    price:99,
//******************   THIS       *************************** */
//this: it is a special keyword in JavaScript that refers to the current object that the code is being executed in. In the context of an object method, this refers to the object itself. In the context of a function, this refers to the global object (window in browsers) or undefined in strict mode.
    welcomemessage: function(){
       // return `Hello ${this.name}, welcome to our website!`;
       console.log(  `Hello ${user .name}, welcome to our website!`); 
       //console.log(this); // Output: { name: 'John Doe', age: 30, welcomemessage: [Function: welcomemessage]
    }
}
 user.welcomemessage(); // Output: Hello John Doe, welcome to our website!

// user.name = "sanchit";
// user.welcomemessage(); // Output: Hello sanchit, welcome to our website!
// console.log(this);

// function chai(){
//     let username = "sanchit";
//     console.log(this.username); // Output: undefined (in strict mode) or the global object (in non-strict mode)
// }
// chai(); // Output: Window { ... } (in browsers) or global object (in Node.js)




const chai = () => {
    let username = "sanchit";
    //console.log(this); // Output: undefined (in strict mode) or the global object (in non-strict mode)
};
 chai(); // Output: Window { ... } (in browsers) or global object (in Node.js)

///****explicit return: in arrow functions we use explicit return when we want to return a value from the function. In arrow functions, if the function body is enclosed in curly braces {}, we need to use the return statement to return a value. If the function body is a single expression without curly braces, the value of that expression is implicitly returned.


//  const addtwo=(num1, num2)=>{
//     return num1 + num2; 
//  }

 //const addtwo=(num1, num2)=>num1 + num2;      
//  const addtwo=(num1, num2)=>
//     return num1 + num2; 
//  }


 //const addtwo=(num1, num2)=>num1 + num2; 

//**  implicit return: in arrow functions we use implicit return when we want to return a value from the function. In arrow functions, if the function body is a single expression without curly braces, the value of that expression is implicitly returned.

 //const addtwo=(num1, num2)=>(num1 + num2);

//  const addtwo=(num1, num2)=>({ name: "sanchit" });

//  console.log(addtwo(5, 10)); // Output: 15


//  const myarray = [1, 2, 3, 4, 5];
//     myarray.forEach((element) => {
//         console.log(element);
//     }   )