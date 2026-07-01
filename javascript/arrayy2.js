 // let num=[1,2,3,4,5,6,7,8]
// console.log(num);

// // let fruits=[...num,"Mango","Apple","Papaya"]
// // console.log(fruits);

// let [a,b,...num]=fal
// console.log(fal);



let num=[1,2,3,4,5,6,7,8,9,10];
console.log(num);

var a=10;
console.log("htis is a",a );

var b=20;
console.log("htis is b",b );

var c=30;
console.log("htis is c",c );

console.log("value of a var",a);

function sum(){
    b=50;
    a=500;
    console.log("this is updated a",a);
    console.log("this is updated b",b);
    console.log(c);
    
}
sum();

alert("hello")
let name=prompt("what is your name")
console.log(name);

console.log(typeof(NAN));
console.log(typeof(null));

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr);
console.log(typeof(arr));

// Rest and Spread Operator


// *******  Rest Operator ******* 

let [a,b,...baki]=arr
console.log(a);
console.log(b);
console.log(baki);

// ******* Spread Operator *******

let arr1=["mango","banana"]
let arr2=[...num,"apple","kiwi","orange"]
console.log(arr2);

// ******* Destructuring Array *******

let [a,b]=[2,3,4,5]
b=9;
console.log(a);
console.log(b);

let [x , , y]=[10,20,30,40,50]
console.log(x);
console.log(y);

let a=10;
let b="10"
console.log(a==b);
console.log(a===b);