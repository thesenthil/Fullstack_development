// const result = (function total(a, b) {
//     return a + b;
// })(5, 3);

// console.log(result);

// // iifefunction:- Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.      

// // remove decimal from a number
// const removeDecimal = (function(num) {
//     return Math.floor(num);
// })(5.7);

// console.log(removeDecimal);

// // random number between 1 to 10
// const randomNum = (function() {
//     return Math.floor(Math.random() * 10000) + 1;
// })();

// console.log(randomNum); 


// console.log(Math.PI);
// console.log(Math.E);

// // set interval arrow function
// setInterval(() => {
//     console.log("Hello World");
// }, 1000);

//**********  IIFE by hitesh************* */

(function chai() {
//named iife function
    console.log("I am chai function");
})();

((name)=>{
    console.log(`I am arrow function ${name}`);
})("sanchit")




