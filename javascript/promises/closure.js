//what is closure in javascript=A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. This means that a closure can remember and access variables from its outer function even after that function has finished executing. Closures are often used to create private variables or to maintain state in asynchronous programming.
//what is lexical scoping=Lexical scoping is a way of determining the scope of variables based on their physical placement in the source code. In JavaScript, functions are lexically scoped, meaning that they can access variables defined in their outer scope, even if they are called from a different context. This allows for closures to be created, as inner functions can "remember" the variables from their outer function's scope.

//closure =A function remembers variables from its outer function even after the outer function has finished.      
//  a closure in js is created when a function remembers and access variable from its outerscope even after outer function has finished executing. 

//lexical scoping =is the ability of the js engine to search for the variebles from its parent scope and if it is not found then it will search for the variable in the global scope. This is known as lexical scoping. A function can access variables from where it was created.

 function outer() {
    let count = 10;
    function inner() {
        console.log(count);
        count++;
    }
    return inner;
}
let out = outer();
out();
out();
out();