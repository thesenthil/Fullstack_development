// what is tdz= TDZ stands for "Temporal Dead Zone." It is a behavior in JavaScript that occurs when you try to access a variable before it has been declared. Variables declared with `let` and `const` are in the TDZ from the start of the block until the declaration is processed. If you try to access them during this period, it will result in a ReferenceError.

/*
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

*/
/*
sum(2,4)
 function sum(a,b){
    console.log(a+b);
 }
    */

 console.log(a);
 var a=10;

 sum(2,6)
 function sum(a,b){
    console.log(a+b);
 }