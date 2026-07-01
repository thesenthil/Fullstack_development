// what is higher order function in javascript?
// A higher-order function is a function that can take other functions as arguments or return a function as its result. In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as numbers or strings. This allows you to create higher-order functions that can operate on other functions, enabling powerful abstractions and functional programming techniques.

// callback function:- A callback function is a function that is passed as an argument to another function and is executed at a later time, usually after some asynchronous operation or event has completed. In JavaScript, callbacks are commonly used for handling asynchronous tasks, such as making API requests, reading files, or responding to user interactions.

// map filter reduce:- The map, filter, and reduce methods are higher-order functions in JavaScript that operate on arrays. They allow you to transform, filter, and reduce the elements of an array in a concise and functional way.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// *************************** map *************************** //

// let num2 = num.map((num) => {
//     return num * num;
// })
// console.log(num2);

// let num3 = num.map((values, index, array) => {
//     console.log("value is", values);
//     console.log("index is", index);
//     console.log("array is", array);
//     // return values * values;
// })

// *************************** filter *************************** //

// let num4 = num.filter((values) => {
//     return values > 5;
// })
// console.log(num4);

// *************************** reduce *************************** //

// let num5 = num.reduce((accumulator, values) => {
//     return accumulator + values;
// }, 5)
// console.log(num5);

// *************************** forEach *************************** //

// let num6 = num.forEach((values, index, array) => {
//     console.log("value is", values);
//     console.log("index is", index);
//     console.log("array is", array);
// })

// *************************** Object *************************** //

let obj = {
    name: "Senthil",
    age: 20,
    email: "thesenthil0114@gmail.com"
};

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// *************************** for...of *************************** //

// for (const element of num) {
//     console.log(element);
// }