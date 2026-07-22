// var a= 10;
// console.log("this a",a);

// let b= 20;
// console.log("this is 20",b);
// const c= 30;
// console.log("this is 30",c);
// function sum(){
//     let b= 50;
//     console.log("this is 50",b);
//     console.log("this is 10",a);        


//     console.log(a);
//     console.log(b);
//     console.log(c);
    
    
// }sum()
// alert("this is alert");

// prompt("this is prompt");
//  let name= prompt("what is your name");
//  console.log("your name is",name);



// let arr =[1,2,3,4,5]
// console.log(typeof arr );
// console.log(arr);


// console.log(typeof(NaN));

// console.log(typeof(null));

//let arr = [1, 2, 3, 4, 5];
// console.log(arr);  

// //rest operator:- The rest operator is used to collect multiple elements and condense them into a single array. It allows you to capture a variable number of arguments passed to a function or to extract the remaining elements from an array. The rest operator is denoted by three dots (...). It can be used in function parameters, destructuring assignments, and other contexts where you want to gather remaining values into an array.
  //let [a,b,...rest] =arr;
//console.log(a);
 // console.log(b);
//console.log(rest);

// spread operator:- The spread operator is used to expand an iterable (like an array or string) into individual elements. It allows you to easily copy, merge, or manipulate arrays and objects in a concise way. The spread operator is denoted by three dots (...). It can be used in various contexts, such as function calls, array literals, and object literals.

// let num1=["apple","banana","orange"];
// let num2=["grapes","kiwi","mango"];
// let num3=[...num1,...num2];
// console.log(num3);

// let arr1=["mango","banana","grapes"];
// let arr2=["orange","apple",...arr1];
// console.log(arr2);

//destructuring:- Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It provides a convenient syntax for unpacking data structures, making it easier to work with complex data.a

// let [x,y,c]=[2,3,4];
// x=5;
// y=6;
// c=7;

// console.log(x);
// console.log(y);
// console.log(c);

// let [x , , z] = [1, 2, 3 , 4, 5];
// console.log(x);
// console.log(z);

// let a= 1.9;
// let b= 2.5;
// let c= a+b;
// console.log(c);

// console.log(c==4.00);
// console.log(c===4.4);
// let a=20;
// let b="20";
// console.log(a==b);
// console.log(a===b);



// rest operator:- The rest operator is a feature in JavaScript that allows you to represent an indefinite number of arguments as an array. It is denoted by three dots (...) followed by a variable name. The rest operator can be used in function parameters to collect all remaining arguments into a single array, making it easier to work with variable numbers of arguments.

let arr1 = [1, 2, 3, 4, 5];
   console.log(arr1);
     let [x, y, ...rest] = arr1;
     console.log(x); // Output: 1
     console.log(y);    
     console.log(rest);
